import { useEffect, useState } from "react";
import MENU from "data/menu";

function Personality() {
    const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = document.querySelector(`#${MENU[5].id}`);
        const onScroll = () => {
            if (section.classList.contains("active")) {
                setIsActive(true);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // isActive가 변경될 때마다 새로 setInterval 설정
    useEffect(() => {
        const personalityList = document.querySelectorAll(".personality-li li");
        const personalityLength = personalityList.length;

        const _personalityLoop = setInterval(() => {
            if (isActive) {
                setActiveIndex((prevIndex) =>
                    prevIndex !== personalityLength - 1 ? prevIndex + 1 : 0
                );
            }
        }, 2000);

        return () => {
            clearInterval(_personalityLoop);
        };
    }, [isActive]);

    // activeIndex가 변경될 때마다 실행
    useEffect(() => {
        const personalityList = document.querySelectorAll(".personality-li li");
        const personalityIcons = document.querySelectorAll(
            ".personality-icon li"
        );

        personalityList.forEach((element, index) => {
            element.classList.toggle("active", index === activeIndex);
        });
        personalityIcons.forEach((element, index) => {
            element.classList.toggle("active", index === activeIndex);
        });
    }, [activeIndex]);

    return (
        <section className="se6" id={MENU[5].id}>
            <div className="container wide">
                <div className="flex-row personality-wrap">
                    <div className="col col_8 txt-box">
                        <h2 className="main-quote">
                            <span className="emp">차분하고</span>{" "}
                            <br className="visible-xs" />
                            <span className="emp">책임감</span> 있으며{" "}
                            <br className="hidden-xs" />
                            <span className="emp">팀으로 일하는 것</span>
                            을 <br />
                            중요하게 생각합니다.
                        </h2>
                        <ul
                            className="personality-li"
                            data-acive="fadeleft"
                            data-active-idx="1"
                        >
                            <li className="active">
                                모든 업무는 정해진 기간에{" "}
                                <br className="visible-xs" />
                                맞춰 정확히 마무리 합니다
                            </li>
                            <li>
                                불필요한 작업을 최소화하여{" "}
                                <br className="visible-xs" />
                                효율적인 작업환경을 구축합니다
                            </li>
                            <li>
                                홈페이지는 함께 완성해 나가는{" "}
                                <br className="visible-xs" />
                                작업임을 인지하고 협력합니다
                            </li>
                            <li>
                                늘 같은 위치에 머무르지 않고{" "}
                                <br className="visible-xs" />
                                새로운 것들을 배웁니다
                            </li>
                        </ul>
                    </div>
                    <div className="col col_4 icon-box">
                        <ul className="personality-icon">
                            <li className="active">
                                <span className="clock material-symbols-outlined">
                                    alarm_on
                                </span>
                            </li>
                            <li className="">
                                <span className="process material-symbols-outlined">
                                    rebase_edit
                                </span>
                            </li>
                            <li className="">
                                <span className="handshake material-symbols-outlined">
                                    handshake
                                </span>
                            </li>
                            <li className="">
                                <span className="book material-symbols-outlined">
                                    local_library
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Personality;

import MENU from "data/menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToastMessage from "components/renew/ToastMessage";
import gitHubLogo from "assets/img/renew/github-mark.svg";

function Floating(isVisibleFloating) {
    const [toast, setToast] = useState(null);
    // const [isVisibleFloating, setIsVisibleFloating] = useState(visibleFloating);
    const [isVisibleSideMenu, setIsVisibleSideMenu] = useState(false);
    const onClickFloating = () => {
        // setIsVisibleFloating(!isVisibleFloating);
        setIsVisibleSideMenu(!isVisibleSideMenu);
    };

    const onClickMenu = (e) => {
        const target = e.target;
        const menuId = MENU[target.getAttribute("data-index")].id;
        const el = document.querySelector(`#${menuId}`);

        window.scrollTo({
            top: el.offsetTop + 60,
            behavior: "smooth",
        });
        // setIsVisibleFloating(!isVisibleFloating);
        setIsVisibleSideMenu(!isVisibleSideMenu);
    };

    const copyMail = (e) => {
        const copyText = document.querySelector("#input-mail").value;
        const now = new Date().getTime();
        navigator.clipboard
            .writeText(copyText)
            .then(() => {
                setToast({
                    message: "이메일 주소가 복사되었습니다. (ras301@naver.com)",
                    icon: "mail",
                    time: now,
                });
            })
            .catch((err) => {
                setToast({
                    message:
                        "이메일 주소 복사에 실패하였습니다. (ras301@naver.com)",
                    icon: null,
                    time: now,
                });
            });

        // setIsVisibleFloating(!isVisibleFloating);
        setIsVisibleSideMenu(!isVisibleSideMenu);
    };

    // useEffect(()=>{
    //     return () => {

    //     }
    // },[])
    return (
        <>
            <button
                id="floating"
                className={`${isVisibleSideMenu ? "off" : ""} ${
                    isVisibleFloating ? "active" : ""
                } `}
                onClick={onClickFloating}
            >
                <span className="bar b1"></span>
                <span className="bar b2"></span>
                <span className="bar b3"></span>
            </button>

            <div
                id="side-menu"
                className={isVisibleSideMenu ? "on" : undefined}
            >
                <div className="menu-list">
                    {MENU.map((menu, i) => (
                        <button key={i} data-index={i} onClick={onClickMenu}>
                            {menu.title}
                        </button>
                    ))}
                </div>

                <ul className="icon-menu">
                    <li>
                        <Link
                            to={`/resume`}
                            className="button"
                            title="자기소개서 보기"
                        >
                            <span className="icon material-symbols-outlined">
                                assignment_ind
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a
                            className="button"
                            href="https://github.com/SangO-Lee/portfolio"
                            target="_blank"
                            rel="noreferrer"
                            title="깃허브 바로가기"
                        >
                            <img
                                src={gitHubLogo}
                                alt="github logo"
                                className="icon github-logo"
                            />
                        </a>
                    </li>
                    <li>
                        <button
                            className="button"
                            onClick={copyMail}
                            title="메일 보내기"
                        >
                            <input
                                type="hidden"
                                name="input-mail"
                                id="input-mail"
                                value="ras301@naver.com"
                            />
                            <span className="icon material-symbols-outlined">
                                mail
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <ToastMessage
                message={toast?.message}
                icon={toast?.icon}
                time={toast?.time}
            />
        </>
    );
}

export default Floating;

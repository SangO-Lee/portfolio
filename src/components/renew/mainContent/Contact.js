import { Link } from "react-router-dom";
import profileImg from "assets/img/2023ver/profile.jpg";
import { useEffect, useState } from "react";
import ToastMessage from "components/renew/ToastMessage";

function Contact() {
    const [toast, setToast] = useState(null);

    const createShootingStar = () => {
        const star = document.createElement("div");
        const container = document.querySelector(".star-container");
        star.classList.add("shooting-star");

        // 랜덤 크기, 위치, 속도 설정
        const size = Math.random() * 2 + 1; // 별똥별 크기
        const startLeft = Math.random() * window.innerWidth + "px";
        const startTop = Math.random() * window.innerHeight * 0.5 + "px";
        const delay = Math.random() * 5 + "s";
        const duration = Math.random() * 1 + 1 + "s"; // 속도 조정
        const blur = Math.random() * 2 + "px"; // 깊이감 표현

        star.style.width = `${size}px`;
        star.style.height = `${size * 50}px`;
        star.style.left = startLeft;
        star.style.top = startTop;
        star.style.animationDelay = delay;
        star.style.animationDuration = duration;
        star.style.filter = `blur(${blur})`;

        if (container) {
            container.appendChild(star);
        }

        // 애니메이션이 끝나면 별똥별 제거
        setTimeout(() => {
            star.remove();
        }, 1000 + parseFloat(delay) * 1000);
    };

    const hoverButton = (e) => {
        const target = e.currentTarget;
        if (target.classList.contains("active")) {
            target.classList.remove("active");
            target.classList.add("out");
        } else {
            target.classList.remove("out");
            target.classList.add("active");
        }
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
    };

    useEffect(() => {
        // 일정 시간마다 별똥별 생성
        setInterval(createShootingStar, 500);

        //gradient shadow
        const targetObject = document.querySelector(".profile-img .aura");
        document.addEventListener("mousemove", function (event) {
            if (targetObject) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
                const translateX = mouseX * -45;
                const translateY = mouseY * 15;
                targetObject.style.transform = `translateX(${translateX}px)  translateY(${translateY}px)`;
            } else {
                console.error("rotatingTargetObject is not initialized.");
            }
        });

        return () => {
            clearInterval(createShootingStar);
        };
    }, []);
    return (
        <section className="se7" id="contact" data-title="Contact">
            <div className="star-container"></div>
            <div className="container">
                <h2 className="main-quote">
                    이런 동료와 <br />
                    <span className="emp">함께 일하고</span>{" "}
                    <br className="visible-xs" />
                    싶으시다면?
                </h2>

                <div className="profile-img">
                    <div className="inner">
                        <img src={profileImg} alt="Sang-O lee profile" />
                    </div>
                    <div className="aura"></div>
                </div>
                <ul className="contact-li">
                    <li>
                        <Link
                            to={`/resume`}
                            onMouseEnter={hoverButton}
                            onMouseLeave={hoverButton}
                            className="button"
                        >
                            <span className="bg"></span>
                            <span className="value">자기소개서 보기</span>
                        </Link>
                    </li>
                    <li>
                        <a
                            className="button"
                            onMouseEnter={hoverButton}
                            onMouseLeave={hoverButton}
                            href="https://github.com/SangO-Lee/portfolio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="bg"></span>
                            <span className="value">깃허브 보러가기</span>
                        </a>
                    </li>
                    <li>
                        <button
                            className="button"
                            onMouseEnter={hoverButton}
                            onMouseLeave={hoverButton}
                            onClick={copyMail}
                            title="ras301@naver.com"
                        >
                            <input
                                type="hidden"
                                name="input-mail"
                                id="input-mail"
                                value="ras301@naver.com"
                            />
                            <span className="bg"></span>
                            <span className="value">이메일 보내기</span>
                        </button>
                    </li>
                </ul>
                <p className="description">
                    이 포트폴리오는 React / SCSS / three.js 를 사용하여
                    제작되었습니다.
                </p>
            </div>
            <ToastMessage
                message={toast?.message}
                icon={toast?.icon}
                time={toast?.time}
            />
        </section>
    );
}

export default Contact;

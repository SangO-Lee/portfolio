import { useEffect, useState } from "react";
import mockup from "assets/img/renew/mockup.png";
import appIcon from "assets/img/renew/app_icon.webp";

function Example() {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const onScroll = () => {
        const mobileWrap = document.querySelector(".mobile-wrap");
        const appScreen = document.querySelector(".app-screen");

        // 섹션의 위치 및 높이를 계산
        const sectionOffset = mobileWrap.offsetTop;
        const scrollDistance =
            ((sectionOffset - 120) / mobileWrap.offsetHeight) * 100;

        const calcWidth = -0.88 * scrollDistance + 100;
        const calcHeight = -0.465 * scrollDistance + 100;
        const calcPositionTop = 0.232 * scrollDistance;
        const calcBoardRadius = 0.3 * scrollDistance;
        if (appScreen) {
            appScreen.style.width = `${calcWidth}%`;
            appScreen.style.height = `${calcHeight}%`;
            appScreen.style.top = `${calcPositionTop}%`;
            appScreen.style.borderRadius = `${calcBoardRadius}px`;
        }

        setProgress(scrollDistance);
    };

    useEffect(() => {
        if (progress >= 100) {
            setProgress(100);
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [progress]);

    useEffect(() => {
        //scroll effect
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section className="se3" id="example" data-title="Major Works">
            <article className="at1">
                <div className="container fluid">
                    <div className="webapp-wrap">
                        <div className={`mobile-wrap   ${isActive && "on"}`}>
                            <div className={`app-screen`}>
                                <div className="screen-img"></div>
                            </div>
                            <div className="img-container">
                                <div className="sample-screen"></div>
                                <div className="camera"></div>
                                <div className="tab-bar"></div>
                                <img
                                    src={mockup}
                                    alt="iphone mockup"
                                    className="mockup-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="at2">
                <div className="container wide">
                    <div className="description-wrap">
                        <h2>Web APP Project.</h2>

                        <dl className="project-info">
                            <dt>개요</dt>
                            <dd>
                                아정당 - 인터넷/가전렌탈 등 자사 서비스 통합
                                플랫폼 개발(Web APP){" "}
                                <a
                                    href="https://www.ajd.co.kr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon material-symbols-outlined">
                                        link
                                    </span>
                                </a>
                            </dd>
                            <dd>Web / iOS / Android</dd>
                            <dt>개발기간 / 팀구성</dt>
                            <dd>2023.05 ~ 2024.01 (9개월)</dd>
                            <dd>
                                기획자 1 / 디자이너 2 / 퍼블리셔 2 / FE개발자 2
                                / BE개발자 3
                            </dd>
                            <dt>주요역할</dt>
                            <dd>
                                PM / 기능 및 정책 기획 / 와이어프레임 제작 /
                                퍼블리싱
                            </dd>
                            <dt>사용기술</dt>
                            <dd>HTML5 / CSS3 / SCSS / Vue.js / Nuxt.js</dd>
                            <dd>Figma / Notion / Google Docs</dd>
                            <dt>성과</dt>
                            <dd>3개월 만에 회원수 1.7만명</dd>
                            <dd>일간 방문자수(GA) 2.6만명</dd>
                            <dd>월 페이지 뷰 293만 달성</dd>
                        </dl>

                        <img
                            src={appIcon}
                            alt="아정당 앱 아이콘"
                            className="app-icon"
                        />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Example;

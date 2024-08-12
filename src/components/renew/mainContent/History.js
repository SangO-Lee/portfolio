import historyImg1 from "assets/img/renew/history1.webp";
import historyImg2 from "assets/img/renew/history2.webp";
import historyImg3 from "assets/img/renew/history3.webp";
import historyImg4 from "assets/img/renew/history4.webp";
import { useEffect } from "react";

function History() {
    useEffect(() => {
        //scroll effect
        document.addEventListener("scroll", function () {
            const historyWrap = document.querySelector("#history_wrap");
            const scrollContent = document.querySelector("#history_content");

            const progressBar = document.querySelector(".progress-value");

            // 섹션의 위치 및 높이를 계산
            const sectionOffset = historyWrap.offsetTop;
            const scrollDistance =
                ((sectionOffset - 120) / historyWrap.offsetHeight) * 100;

            scrollContent.style.left = `-${scrollDistance}%`;
            progressBar.style.width = `${scrollDistance / 2}%`;
        });

        //progress bar
        const rotatingTargetObject = document.querySelector(
            ".history-progress .inner"
        );
        document.addEventListener("mousemove", function (event) {
            if (rotatingTargetObject) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
                const rotateX = mouseY * 25;
                const rotateY = mouseX * 25;
                rotatingTargetObject.style.transform = `rotateX(5deg)  rotateY(${rotateY}deg)`;
            } else {
                console.error("rotatingTargetObject is not initialized.");
            }
        });
    }, []);
    return (
        <section className="se2" id="history" data-title="Work Experience">
            <div className="container wide">
                <div id="history_wrap">
                    <h2>Work Experience.</h2>
                    <div id="history_content">
                        <article id="at1">
                            <h3 className="main_line">
                                {" "}
                                <strong className="text-highlight">
                                    430여 건
                                </strong>
                                의 기업, 대학, 쇼핑몰
                                <br />
                                <strong className="text-highlight">
                                    반응형 웹사이트 구축
                                </strong>
                            </h3>
                            <p className="sub_line">
                                다양한 고객 요구에 맞춘{" "}
                                <br className="hidden" />
                                맞춤형 솔루션 제공
                            </p>
                            <img
                                src={historyImg1}
                                alt="history1"
                                className="history_img"
                            />
                        </article>
                        <article id="at2">
                            <h3 className="main_line">
                                신규 플랫폼 서비스의
                                <br />
                                <strong className="text-highlight">
                                    웹앱 기획 및 런칭 PM/PO 역할
                                </strong>{" "}
                                수행
                            </h3>
                            <p className="sub_line">
                                {" "}
                                기획자, 디자이너, 개발자와의{" "}
                                <br className="hidden" />
                                원활한 커뮤니케이션 가능
                            </p>
                            <img
                                src={historyImg2}
                                alt="history2"
                                className="history_img"
                            />
                        </article>
                        <article id="at3">
                            <h3 className="main_line">
                                <strong className="text-highlight">
                                    월 290만 뷰
                                </strong>
                                를 기록한
                                <br />
                                플랫폼 검색엔진최적화 경험
                            </h3>
                            <p className="sub_line">
                                {" "}
                                웹 표준 및 웹 접근성 준수{" "}
                                <br className="hidden" />
                                온페이지 SEO&middot;유저 행동 분석 전문가
                            </p>
                            <img
                                src={historyImg3}
                                alt="history3"
                                className="history_img"
                            />
                        </article>
                        <article id="at4" data-last="true">
                            <h3 className="main_line">
                                시사저널e '신도시 30년' <br />-{" "}
                                <strong className="text-highlight">
                                    2020 인터넷신문 언론대상
                                </strong>{" "}
                                수상
                            </h3>
                            <p className="sub_line">
                                우수 콘텐츠 품질
                                <br className="hidden" /> 공식 인증 경험
                            </p>
                            <img
                                src={historyImg4}
                                alt="history4"
                                className="history_img"
                            />
                        </article>
                    </div>
                    <div className="history-progress">
                        <div className="inner">
                            <div className="progress-bar">
                                <div className="progress-value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;

import exampleImg1 from "assets/img/2023ver/example1.jpg";
import exampleImg2 from "assets/img/2023ver/example2.jpg";
import exampleImg3 from "assets/img/2023ver/example3.jpg";
import exampleImg4 from "assets/img/2023ver/example4.jpg";

function Example() {
    return (
        <section className="se3" id="example" data-title="Major Works">
            <div className="container wide">
                <h2 className="fade-in">Featured Projects.</h2>
            </div>
            <div className="container wide">
                <div id="major-wrap">
                    <article className="example1">
                        <img
                            src={exampleImg1}
                            alt="시사저널e - '신도시 30년'"
                        />
                        <div className="txt-box">
                            <h5>시사저널e - '신도시 30년'</h5>
                            <p className="period">
                                레이아웃 기획 및 퍼블리싱{" "}
                                <span> / 18 Days</span>
                            </p>
                            <p className="des">
                                시사저널e의 특별기획 프로젝트로{" "}
                                <strong>
                                    '2020 인터넷신문 언론대상을 수상'
                                </strong>
                                했습니다. 전반적으로 매거진과 같은 느낌을
                                주기위해 다양한 레이아웃으로 텍스트를
                                배치하였습니다. 가독성을 놓치지 않으면서 디지털
                                뉴스만의 이점으로 시각화 자료를 쉽게 비교하여 볼
                                수 있도록 작업하였습니다.
                            </p>
                            <a
                                href="http://newtown.sisajournal-e.com/"
                                title="시사저널e - '신도시 30년'"
                                target="_blank"
                                rel="noreferrer"
                                className="more"
                            >
                                사이트 살펴보기
                                <span className="icon material-symbols-outlined">
                                    {" "}
                                    arrow_right{" "}
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="example2 reverse">
                        <img src={exampleImg2} alt="포항공과대학 기계공학과" />
                        <div className="txt-box">
                            <h5>포항공과대학교 기계공학과</h5>
                            <p className="period">
                                레이아웃 기획 및 퍼블리싱, 기능 개발{" "}
                                <span> / 14 Days</span>
                            </p>
                            <p className="des">
                                포항공과대학교 학과 작업 중 첫 번째
                                작업물입니다. 메인페이지에서 학과 관련 정보를
                                쉽게 찾아볼 수 있고,{" "}
                                <strong>다국어 기능</strong>을 지원합니다.
                                고객의 니즈에 따라,{" "}
                                <strong>
                                    기본 빌더 기능을 개선하는 개발 작업
                                </strong>
                                도 함께 진행하였습니다.
                                <br />
                                (* 메인 캘린더 위젯 / 유튜브 게시판 기능 추가)
                            </p>
                            <a
                                href="https://me.postech.ac.kr/"
                                title="포항공과대학 기계공학과"
                                target="_blank"
                                rel="noreferrer"
                                className="more"
                            >
                                사이트 살펴보기
                                <span className="icon material-symbols-outlined">
                                    {" "}
                                    arrow_right{" "}
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="example3">
                        <img src={exampleImg3} alt="한양3D팩토리" />
                        <div className="txt-box">
                            <h5>한양3D팩토리</h5>
                            <p className="period">
                                퍼블리싱 및 반응형 작업 <span> / 6 Days</span>
                            </p>
                            <p className="des">
                                제공받은 PC버전의 시안을 바탕으로 제작된
                                홈페이지 입니다.
                                <strong>
                                    PC버전의 시안의 디자인을 유지하면서
                                    반응형으로 조절
                                </strong>{" "}
                                되도록 작업하는 것에 중점을 맞추었습니다.
                                기본적으로 빌더에서 제공되는 폼이나 게시판
                                형태를 커스터마이징 하여 기능적인 만족도를
                                높였습니다.
                            </p>
                            <a
                                href="http://hanyang3d.kr/"
                                title="한양3D팩토리"
                                target="_blank"
                                rel="noreferrer"
                                className="more"
                            >
                                사이트 살펴보기
                                <span className="icon material-symbols-outlined">
                                    {" "}
                                    arrow_right{" "}
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="example4 reverse">
                        <img src={exampleImg4} alt="오메르데이스파" />
                        <div className="txt-box">
                            <h5>오메르데이스파</h5>
                            <p className="period">
                                레이아웃 기획 및 퍼블리싱 <span> / 5 Days</span>
                            </p>
                            <p className="des">
                                <strong>풀페이지 형태</strong>로 작업된 랜딩
                                페이지입니다. 동적인 요소가 많았으면 한다는
                                요청에 따라 스크롤 이벤트로 동작을 추가하고,{" "}
                                <strong>인트로 페이지를 삽입</strong>
                                하였습니다. 업체의 무드를 강조하기 위해 이미지를
                                적극적으로 이용하여 톤앤매너를 정리했습니다.
                            </p>
                            <a
                                href="http://www.ormerdayspa.com/"
                                title="오메르데이스파"
                                target="_blank"
                                rel="noreferrer"
                                className="more"
                            >
                                사이트 살펴보기
                                <span className="icon material-symbols-outlined">
                                    {" "}
                                    arrow_right{" "}
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
                {/*  모여있다가 흩어지는 이펙트 - 애플 */}
            </div>
        </section>
    );
}

export default Example;

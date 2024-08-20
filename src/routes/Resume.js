import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/resume.scss";
import $ from "jquery";
import ScrollBar from "../components/home/ScrollBar";
import PROJECTS from "data/project";
import COMPETENCY from "data/competency";

function Resume() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        $(".resume").addClass("on");

        //스크롤 버튼
        $('a[data-use="scroll"]').on("click", function (e) {
            e.preventDefault();
            var _target = $(this).attr("href");
            var _targetTop = 0;
            if (_target === "#") {
                _targetTop = 0;
            } else {
                _targetTop = $(_target).offset().top;
            }

            $("body,html").animate(
                {
                    scrollTop: _targetTop,
                },
                1000,
                "easeInOutCubic"
            );

            // return () => {
            //     $(window).off("scroll");
            // };
        });
    }, []);

    return (
        <div className="resume">
            <div id="resume">
                <div className="container">
                    <article className="at1">
                        <h4>프로필</h4>
                        <ul className="li-contact">
                            <li>
                                <span>이름</span>이상오
                            </li>
                            <li>
                                <span>이메일</span>
                                <a href="mailto:ras301@naver.com">
                                    ras301@naver.com
                                </a>
                            </li>
                            <li>
                                <span>연락처</span>
                                <a href="tel:010-2564-2700">010-2564-2700</a>
                            </li>
                            <li>
                                <span>포트폴리오</span>
                                <a href="https://sango-lee.github.io/portfolio/">
                                    https://sango-lee.github.io/portfolio/
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className="at2">
                        <h4>요약</h4>
                        <ul className="li-dash">
                            <li>
                                신규 플랫폼 서비스의 웹앱 기획 및 런칭{" "}
                                <strong>PM/PO</strong>
                                경험 보유
                            </li>
                            <li>
                                월 290만뷰를 끌어낸{" "}
                                <strong>검색엔진최적화(SEO) 전문가</strong>
                            </li>
                            <li>
                                <strong>430여건</strong>의 기업, 대학, 쇼핑몰{" "}
                                <strong>
                                    반응형 홈페이지 구축(웹 표준, 웹 접근성)
                                </strong>
                            </li>
                            <li>
                                시사저널 e '신도시 30년' –{" "}
                                <strong>‘20년 인터넷신문 언론대상 수상</strong>
                            </li>

                            <li>
                                대학교, 병원, 법률 사무소, 제조기업, 협회 등{" "}
                                <strong>다양한 업종 레퍼런스</strong> 보유
                            </li>
                            <li>
                                포항공대, 서울여대, 인하대 등 대학교 작업을 통해{" "}
                                <strong>
                                    웹 표준, 웹 접근성 인증 및 크로스 브라우징
                                </strong>
                            </li>
                            <li>
                                PHP / CodeIgniter를 활용하여{" "}
                                <strong>
                                    자사 빌더 신기능 기획, 기능 추가 및 버그
                                    픽스
                                </strong>
                            </li>
                        </ul>
                    </article>
                    <article className="at3">
                        <h4>
                            경력 <small>(6년 1개월)</small>
                        </h4>
                        <p>
                            <span className="date">2023.04 - 2024.06</span>{" "}
                            (주)아정네트웍스 / UI/UX 디자인팀 / 팀장 (연구원)
                        </p>
                        <p>
                            <span className="date">2017.10 - 2022.09</span>{" "}
                            (주)메일플러그 / 홈페이지 제작팀 / 퍼블리싱 파트장
                            (주임)
                        </p>
                        <h4>학력</h4>
                        <p>
                            <span className="date">2009.03 - 2015.02</span>{" "}
                            경북대학교 영어영문학과 학사
                        </p>
                        <h4>수상 및 자격</h4>
                        <p>
                            <span className="date">2020.11</span> 시사저널e
                            '신도시 30년' - 2020 인터넷신문 언론대상 수상
                        </p>
                        <p>
                            <span className="date">2017.12</span> 웹디자인
                            기능사 취득
                        </p>
                        <p>
                            <span className="date">2017.03</span>{" "}
                            GTQ그래픽자격(1급) / GTQi 일러스트(1급) 취득
                        </p>

                        <h4>교육</h4>
                        <p>
                            <span className="date">2023.06</span>바이럴 김선생 :
                            구글·네이버 검색엔진최적화 세미나
                        </p>
                        <p>
                            <span className="date">2017.02 ~ 2017.06</span>
                            스마트기기 UI/UX 디자인 / 그린컴퓨터 성남
                        </p>
                    </article>
                    <article className="at4">
                        <h4>스킬</h4>
                        <div className="flex-row">
                            {COMPETENCY.map((comp, i) => (
                                <div
                                    className={`col col_${comp.colWidth}`}
                                    key={i}
                                >
                                    <dl className="skill-dl">
                                        <dt>{comp.title}</dt>
                                        {comp.skills.map((skill, i) => (
                                            <dd
                                                key={i}
                                                data-level={skill.level}
                                            >
                                                {skill.name}
                                            </dd>
                                        ))}
                                    </dl>
                                </div>
                            ))}
                        </div>
                        <ul className="level-li">
                            <li>
                                <span className="circle" data-level="3"></span>{" "}
                                무리 없이 단독 작업 가능
                            </li>
                            <li>
                                <span className="circle" data-level="2"></span>{" "}
                                단독 작업 시 상급자의 검수가 필요함
                            </li>
                            <li>
                                <span className="circle" data-level="1"></span>{" "}
                                다른 작업자의 보조 역할 가능
                            </li>
                        </ul>
                    </article>
                    <article className="at5">
                        <h4>주요 프로젝트</h4>
                        <div className="table-responsive">
                            <table className="project-table">
                                <colgroup>
                                    <col width="30%" />
                                    <col width="*" />
                                    <col width="*" />
                                    <col width="10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>프로젝트명</th>
                                        <th>링크</th>
                                        <th>기술스택</th>
                                        <th>기여도</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PROJECTS.map((project, i) => (
                                        <tr key={i}>
                                            <td>{project.name}</td>
                                            <td>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <span className="icon material-symbols-outlined">
                                                        link
                                                    </span>
                                                </a>
                                            </td>
                                            <td>
                                                {project.skills.join(" · ")}
                                            </td>
                                            <td>{project.contribution}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </article>
                    <article className="at6">
                        <h4>포트폴리오</h4>
                        <h5>
                            코드로 협업을 쓰다. (2024)
                            <Link to="/">
                                <span className="icon material-symbols-outlined">
                                    link
                                </span>
                            </Link>
                            <br />
                            <small>
                                작업기간 약 15일 / 기획, 디자인, 퍼블리싱 100%
                            </small>
                        </h5>
                        <p className="des">
                            기존 하드코딩으로 작업했던 포트폴리오를 React Create
                            App을 이용하여 전체 구조를 리팩토링하였습니다.{" "}
                            <br />
                            Three.js를 활용하여 3D 모델링을 구현하는 트렌드를
                            따라가도록 작업하였으며,
                            <br /> 신규 프로젝트와 기존 반응형 프로젝트가
                            자연스러운 흐름으로 이어질 수 있도록 작업하였습니다.
                        </p>
                        <h5>
                            ESG(효율적이고 협업하며 성장하는 - 2023)
                            <Link to="/2023">
                                <span className="icon material-symbols-outlined">
                                    link
                                </span>
                            </Link>
                            <br />
                            <small>
                                작업기간 약 15일 / 기획, 디자인, 퍼블리싱 100%
                            </small>
                        </h5>
                        <p className="des">
                            지속가능한 경영을 위해 Environment, Social,
                            Governance 3가지 핵심 요소를 필요로 하는 것 처럼,
                            <br />
                            뛰어난 팀원이 되기 위해 가장 중요하게 생각하는 3가지
                            가치를 담아 메인 카피라이트로 잡았습니다. <br />
                            불필요한 프로세스를 줄이고, 팀으로서 함께 목표를
                            이루려고 노력하며, 성장하는 퍼블리셔의 모습을
                            보여드리겠습니다.
                        </p>
                    </article>
                </div>

                <button onClick={handleGoBack} id="back_btn">
                    <span className="material-symbols-outlined">undo</span>
                </button>
            </div>
            <ScrollBar />
        </div>
    );
}

export default Resume;

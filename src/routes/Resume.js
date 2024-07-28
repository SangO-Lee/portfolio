import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/resume.scss";
import $ from "jquery";

function Resume() {
    var _windowTop = $(window).scrollTop();
    var _windowHeight = $(window).height();
    // var _baseline = _windowTop + _windowHeight;
    var _pageHeight = $("body").height() - $(window).height();
    // var _bgBaseline = 1000;
    // var _dev = 0; // 1= 인트로 생략 0=인트로 노출

    function scrollBar() {
        _windowTop = $(window).scrollTop();
        _pageHeight = $("body").height() - _windowHeight;
        var _ratio = (_windowTop / _pageHeight) * 100;
        $("#scroll_bar .current_indicator").css("top", _ratio + "%");
    }

    $(window).on("scroll", function () {
        //common
        scrollBar();
    });
    useEffect(() => {
        scrollBar(); //스크롤바
        $("#body-layout").addClass("on");

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

            //네비게이션 초기화
            $("#navi").removeClass("active");
            $("body").removeClass("blur");

            return () => {
                $(window).off("scroll");
            };
        });
    }, []);

    return (
        <div>
            <div id="resume">
                <div className="container">
                    <article className="at1">
                        <h4>프로필</h4>
                        <ul className="li_contact">
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
                        <ul className="li_dash">
                            <li>
                                <strong>반응형 랜딩 페이지 430여건</strong>{" "}
                                레이아웃 기획 및 퍼블리싱
                            </li>
                            <li>
                                기획과 퍼블리싱을 담당한 시사저널e '신도시 30년'
                                - <strong>2020 인터넷신문 언론대상 수상</strong>
                            </li>
                            <li>
                                대학교, 병원, 법률 사무소, 제조기업, 협회 등{" "}
                                <strong>다양한 업종 레퍼런스</strong> 보유
                            </li>
                            <li>
                                <strong>1400여개 실 사용 고객</strong> 유지 보수
                            </li>
                            <li>
                                포항공대, 서울여대, 인하대 등 대학교 작업을 통해{" "}
                                <strong>
                                    웹 표준, 웹 접근성 인증 및 크로스 브라우징
                                </strong>
                            </li>
                            <li>
                                <strong>Git</strong>을 통한 버전 관리
                            </li>
                            <li>
                                효율적인 퍼블리싱 작업 환경 개선을 위한{" "}
                                <strong>공용 코드 컴포넌트 개발</strong>
                            </li>
                            <li>
                                다양한 직군과 협업 진행 및{" "}
                                <strong>원활한 커뮤니케이션</strong>
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
                        <h4>경력</h4>
                        <p>
                            <span className="date">2017.10 - 2022.09</span>{" "}
                            (주)메일플러그 홈페이지 제작 부서 웹 개발 파트장
                            (주임)
                        </p>
                        <h4>학력</h4>
                        <p>
                            <span className="date">2009.03 - 2015.2</span>{" "}
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
                    </article>
                    <article className="at4">
                        <h4>스킬</h4>
                        <div className="flex_row">
                            <div className="col">
                                <dl>
                                    <dt>[개발언어]</dt>
                                    <dd>HTML5</dd>
                                    <dd>CSS3 / Sass</dd>
                                    <dd>Js / Jquery</dd>
                                    <dd>PHP / CodeIgniter</dd>
                                    <dd>Mysql</dd>
                                </dl>
                            </div>
                            <div className="col">
                                <dl>
                                    <dt>[사용하는 툴]</dt>
                                    <dd>Adobe Photoshop</dd>
                                    <dd>Adobe Illustrator</dd>
                                    <dd>
                                        Imweb <small>(아임웹)</small>
                                    </dd>
                                    <dd>Xshell</dd>
                                    <dd>Google Analytics</dd>
                                    <dd>Naver Search Advisor</dd>
                                </dl>
                            </div>
                            <div className="col">
                                <dl>
                                    <dt>[협업 툴]</dt>
                                    <dd>Git</dd>
                                    <dd>Jira / Confluence</dd>
                                    <dd>Notion</dd>
                                    <dd>Zeplin</dd>
                                </dl>
                            </div>
                        </div>
                    </article>
                    <article className="at5">
                        <h4>주요 프로젝트</h4>
                        <div className="table_responsive">
                            <table className="project_table">
                                <colgroup>
                                    <col width="30%" />
                                    <col width="30%" />
                                    <col width="30%" />
                                    <col width="10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>프로젝트명</th>
                                        <th>링크</th>
                                        <th>기여</th>
                                        <th>기여도</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>시사저널e - '신도시 30년'</td>
                                        <td>
                                            <a
                                                href="http://newtown.sisajournal-e.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://newtown.sisajournal-e.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>포항공과대학교 기계공학과</td>
                                        <td>
                                            <a
                                                href="https://me.postech.ac.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                https://me.postech.ac.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>서울여자대학교 교직지원센터</td>
                                        <td>
                                            <a
                                                href="http://sweet.swu.ac.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://sweet.swu.ac.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>아주대학교 융합인재양성사업단 </td>
                                        <td>
                                            <a
                                                href="http://aimed.ajou.ac.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://aimed.ajou.ac.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>웨스턴동물의료센터</td>
                                        <td>
                                            <a
                                                href="http://westernamc.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://westernamc.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>선진병원</td>
                                        <td>
                                            <a
                                                href="http://www.sunjin.or.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://www.sunjin.or.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>피츠인솔 공식스토어</td>
                                        <td>
                                            <a
                                                href="http://phits.co.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://phits.co.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>오메르데이스파</td>
                                        <td>
                                            <a
                                                href="http://www.ormerdayspa.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://www.ormerdayspa.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>한양3D팩토리</td>
                                        <td>
                                            <a
                                                href="http://hanyang3d.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://hanyang3d.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>에치와이 프레시 매니저 채용</td>
                                        <td>
                                            <a
                                                href="https://fmrecruit.hy.co.kr/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                https://fmrecruit.hy.co.kr/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>예건건축 </td>
                                        <td>
                                            <a
                                                href="http://yekun-arc.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://yekun-arc.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>빅펀치 엔터테인먼트 </td>
                                        <td>
                                            <a
                                                href="http://bigpunchent.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://bigpunchent.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>아셈노인인권정책센터</td>
                                        <td>
                                            <a
                                                href="http://www.asemgac.org/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://www.asemgac.org/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>법무법인 혜암</td>
                                        <td>
                                            <a
                                                href="http://www.gyeyanglaw.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://www.gyeyanglaw.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>관세법인 한주</td>
                                        <td>
                                            <a
                                                href="http://www.hjcustoms.co.kr"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://www.hjcustoms.co.kr
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>형사전문로펌 온강</td>
                                        <td>
                                            <a
                                                href="https://www.xn--939a100aw6drqg7pcjx7a.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                https://형사전문온강.com/
                                            </a>
                                        </td>
                                        <td>
                                            홈페이지 레이아웃 기획 및 퍼블리싱
                                        </td>
                                        <td>50%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                    <article className="at6">
                        <h4>포트폴리오</h4>
                        <h5>
                            ESG(효율적이고 협업하며 성장하는) <br />
                            <small>
                                작업기간 약 15일 / 기획, 디자인, 퍼블리싱 100%
                            </small>
                        </h5>
                        <p className="des">
                            지속가능한 경영을 위해 Environment, Social,
                            Governance 3가지 핵심 요소를 필요로 하는 것 처럼,
                            <br />
                            뛰어난 팀원이 되기 위해 가장 중요하게 생각하는 3가치
                            가치를 담아 메인 카피라이트로 잡았습니다. <br />
                            불필요한 프로세스를 줄이고, 팀으로서 함께 목표를
                            이루려고 노력하며, 성장하는 퍼블리셔의 모습을
                            보여드리겠습니다.
                        </p>
                    </article>
                </div>

                <Link to={`/`} id="back_btn">
                    <span className="material-symbols-outlined">undo</span>
                </Link>
            </div>
            <aside id="nav_scroll">
                <div id="scroll_bar">
                    <div className="inner">
                        <span className="current_indicator"></span>
                    </div>
                </div>
                <button
                    data-use="scroll"
                    title="사이트 최상단 바로가기"
                    id="scroll_top"
                >
                    {" "}
                </button>
            </aside>
            {/* <!-- //nav_scroll --> */}
        </div>
    );
}

export default Resume;

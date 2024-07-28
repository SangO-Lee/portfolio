import "../assets/css/home.scss";
import $ from "jquery";
import "jquery-easing";
import mainBgImg from "assets/img/main_bg.mp4";
import projectImg1 from "../assets/img/project1.jpg";
import projectImg2 from "../assets/img/project2.jpg";
import projectImg3 from "../assets/img/project3.jpg";
import projectImg4 from "../assets/img/project4.jpg";
import projectImg5 from "../assets/img/project5.jpg";
import projectImg6 from "../assets/img/project6.jpg";
import projectImg7 from "../assets/img/project7.jpg";
import projectImg8 from "../assets/img/project8.jpg";
import projectImg9 from "../assets/img/project9.jpg";
import projectImg10 from "../assets/img/project10.jpg";
import projectImg11 from "../assets/img/project11.jpg";
import projectImg12 from "../assets/img/project12.jpg";
import projectImg13 from "../assets/img/project13.jpg";
import projectImg14 from "../assets/img/project14.jpg";
import projectImg15 from "../assets/img/project15.jpg";
import exampleImg1 from "../assets/img/example1.jpg";
import exampleImg2 from "../assets/img/example2.jpg";
import exampleImg3 from "../assets/img/example3.jpg";
import exampleImg4 from "../assets/img/example4.jpg";
import profileImg from "../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    var _windowTop = $(window).scrollTop();
    var _windowHeight = $(window).height();
    var _baseline = _windowTop + _windowHeight;
    var _pageHeight = $("body").height() - $(window).height();
    var _bgBaseline = 1000;
    var _personalityActived = -1;
    var _dev = 0; // 1= 인트로 생략 0=인트로 노출

    //로딩 세션스토리지 정의
    var introOpened = sessionStorage.getItem("introOpen");
    if (!introOpened) {
        introOpened = "0";
    }

    function windowInit(error) {
        var _error = error;
        $("body,html").scrollTop(0);
        console.log("windowInit", _error);
    }

    function loading() {
        //로딩페이지
        var _time = 0;
        var _l1Width = 0; //phase1의 .l1 가로값
        var _loadingTimer = setInterval(() => {
            _time += 100;
            if (_time > 1000 && _time < 2500) {
                //phase1
                _l1Width = $("#loading #phase1 .l1").width();
                $("#loading #phase1").addClass("active");
                $("#loading #phase1 .l1").addClass("active");
                $("#loading #phase1 .l2").css("margin-left", _l1Width);
            }
            if (_time > 2500 && _time < 3000) {
                $("#loading #phase1 .l1").css({
                    "margin-left": _l1Width * -1,
                    opacity: "0",
                });
                $("#loading #phase1 .l2")
                    .css("margin-left", "-30px")
                    .addClass("active");
            }
            if (_time > 3000 && _time < 3800) {
                $("#loading #phase1 .l2").css("margin-left", "0");
            }
            if (_time > 3800 && _time < 4100) {
                //phase2
                $("#loading #phase2")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
                $("#loading_close").addClass("active");
            }
            if (_time > 4100 && _time < 5100) {
                $("#loading #phase2 .main_text").addClass("active");
            }
            if (_time > 5100 && _time < 5400) {
                //phase3
                $("#loading #phase3")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
            }
            if (_time > 5400 && _time < 6400) {
                $("#loading #phase3 .main_text").addClass("active");
            }
            if (_time > 6400 && _time < 6700) {
                //phase4
                $("#loading #phase4")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
            }
            if (_time > 6700 && _time < 7700) {
                $("#loading #phase4 .main_text").addClass("active");
            }
            if (_time > 7700 && _time < 9200) {
                //phase5
                $("#loading #phase5")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
                $("#loading #phase5 .l1").addClass("active");
                setTimeout(() => {
                    $("#loading_close").removeClass("active");
                }, 1000);
            }
            if (_time > 9200 && _time < 10700) {
                $("#loading #phase5 .l1 span").css({
                    "margin-top": "-1.1em",
                    "transition-delay": "0s",
                    opacity: "0",
                });
            }
            if (_time > 10700 && _time < 12700) {
                $("#loading #phase5 .l2").addClass("active");
            }
            if (_time > 12700 && _time < 14000) {
                //loading 종료
                $("#loading").fadeOut(1000);
            }
            if (_time > 14000) {
                clearInterval(_loadingTimer);
                setTimeout(() => {
                    //일정 시간이 지나면 네비와 스크롤바 노출
                    windowInit("interval error");
                    $("body").addClass("on");
                }, 300);
            }
        }, 100);
        windowInit("loading error"); //스크롤 초기화
        // _loadingTimer();

        //loading close
        $("#loading_close").on("click", function (e) {
            e.preventDefault();
            clearInterval(_loadingTimer);
            $("#loading").fadeOut(1000);
            $("body").addClass("on");
            console.log("close clicked");
        });
    }

    function scrollBar() {
        _windowTop = $(window).scrollTop();
        _pageHeight = $("body").height() - _windowHeight;
        var _ratio = (_windowTop / _pageHeight) * 100;
        $("#scroll_bar .current_indicator").css("top", _ratio + "%");
    }

    function scrollFadein(tgt, sectionId) {
        _baseline = _windowTop + _windowHeight;
        var _target = tgt; //섹션에 해당하는 엘리멘트
        var _sectionId = sectionId; //특정 섹션 구분자

        //타겟 기준 비율 설정
        var _targetTop = _target.offset().top;
        var _targetHeight = _target.outerHeight();
        var _scrollProgress = (_baseline - _targetTop) / _targetHeight;
        var _progessPercent = _scrollProgress * 100;

        if (_targetTop - _baseline > 0) return false; //해당 위치 오기 전까지 실행금지

        if (_sectionId === "history") {
            //css 요소 정의
            var _opacityValue = _scrollProgress;
            var _bgSize = _progessPercent + 20;
            var _grayscale = 1 - _scrollProgress;

            //최대값
            if (_opacityValue > 1) {
                _opacityValue = 1;
            }
            if (_grayscale < 0) {
                _grayscale = 0;
            }
            if (_bgSize > 100) {
                _bgSize = "100";
            }

            //실행
            if (_progessPercent < 115) {
                $(_target).css({
                    opacity: _opacityValue,
                    filter: "grayscale(" + _grayscale + ")",
                    "background-size": _bgSize + "%",
                });
            } else {
                //최대값 이후
                if (_target.attr("data-last") !== "true") {
                    _progessPercent -= 100;
                    _opacityValue = 1 - _progessPercent / 40;
                    $(_target).css({
                        opacity: _opacityValue,
                    });
                } else if (_target.attr("data-last") === "true") {
                    //마지막 요소일 경우 최대값 지정
                    $(_target).css({
                        opacity: 1,
                        filter: "grayscale(0)",
                    });
                }
            }
            //history section
        } else if (_sectionId === "example") {
            //포지션 가로축
            var _minPositionLeft = $(_target).css("left").slice(0, -2);
            var _fixedPostionLeft = $(_target).attr("data-hori"); //최초 x축 값 보존
            if (!_fixedPostionLeft) {
                $(_target).attr("data-hori", _minPositionLeft);
            }
            var _positionLeft = 0;
            if (_fixedPostionLeft > 0) {
                //최초 x축 값이 양수인경우
                _positionLeft = (1 - _scrollProgress) * _fixedPostionLeft;
            } else {
                _positionLeft = (1 - _scrollProgress) * _fixedPostionLeft;
            }

            //밝기값
            var _minBrightness = 0.2; //밝기 최소값
            var _brightness = _minBrightness + _scrollProgress;

            //최대값
            if (_fixedPostionLeft > 0 && _positionLeft < 0) {
                _positionLeft = "0";
            }
            if (_fixedPostionLeft < 0 && _positionLeft > 0) {
                _positionLeft = "0";
            }
            if (_brightness > 1) {
                _brightness = 1;
            }

            //실행
            $(_target).css({
                left: _positionLeft,
                filter: "brightness(" + _brightness + ")",
            });

            //부모요소 활성화
            if (_scrollProgress >= 0.8) {
                $(_target).parent().addClass("active");
            } else {
                $(_target).parent().removeClass("active");
            }
            //example section
        }
    }

    function scrollClassing(target, siblingClass, menuChange) {
        var _targetBase = _windowTop + _windowHeight / 2;
        var _target = target; //섹션에 해당하는 엘리멘트
        var _count = _target.length; // 총 엘리멘트 갯수
        var _lastIdx = _count - 1; //마지막 엘리멘트
        var _siblingClass = siblingClass;
        var _menuChange = menuChange;
        var _menuName;

        for (var i = 0; i < _count; i++) {
            var _cond1 = _target.eq(i).offset().top; //조건1 타겟의 오프셋 값
            var _cond2;
            if (_target.eq(i).next().length) {
                _cond2 = _target.eq(i).next().offset().top; //조건2 다음 타겟의 오프셋 값
            }

            if (i !== _lastIdx) {
                if (_targetBase > _cond1 && _targetBase < _cond2) {
                    _target.eq(i).addClass("active");
                    if (_siblingClass === "true") {
                        //true일때 형제노드 active 클래스 삭제
                        _target.eq(i).siblings().removeClass("active");
                    }

                    //네비게이션 메뉴명 전환
                    if (_menuChange === "true") {
                        _menuName = _target.eq(i).attr("data-title");
                        $("#menu_name .curr_name").text(_menuName);
                    }
                }
            } else {
                if (_targetBase > _cond1) {
                    //마지막 엘리멘트 이후는 항상 마지막 엘리멘트에 active 추가
                    _target.eq(i).addClass("active");
                    if (_siblingClass === "true") {
                        _target.eq(i).siblings().removeClass("active");
                    }

                    //네비게이션 메뉴명 전환
                    if (_menuChange === "true") {
                        _menuName = _target.eq(i).attr("data-title");
                        $("#menu_name .curr_name").text(_menuName);
                    }
                }
            }
        }

        var _activeIdx = $("#history_content .active").index();
        if (_activeIdx < 0) _activeIdx = 0; //history 이전 화면에서는 첫번째 요소를 활성화
        $("#history_wrap .main_line span")
            .eq(_activeIdx)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $("#history_wrap .sub_line span")
            .eq(_activeIdx)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }

    $(window).on("scroll", function () {
        //common
        scrollBar();
        if (_windowTop === 0) {
            //windowInit
            $(".main_content section").removeClass("active");
        }

        //main_content
        scrollClassing($(".main_content section"), "false", "true");

        //main_bg
        _windowTop < _bgBaseline ? $("#main_bg").show() : $("#main_bg").hide();

        //history
        scrollFadein($("#history_content > #at1"), "history");
        scrollFadein($("#history_content > #at2"), "history");
        scrollFadein($("#history_content > #at3"), "history");
        scrollFadein($("#history_content > #at4"), "history");
        scrollClassing($("#history_content > article"), "true");

        //personality
        if ($("#personality").hasClass("active")) _personalityActived = 1;

        //example
        scrollFadein($("#major_wrap > .example1 img"), "example");
        scrollFadein($("#major_wrap > .example2 img"), "example");
        scrollFadein($("#major_wrap > .example3 img"), "example");
        scrollFadein($("#major_wrap > .example4 img"), "example");
    });
    useEffect(() => {
        //common
        _bgBaseline = $("#history").offset().top; //main_bg 토글 baseline

        //로딩페이지 세션스토리지
        if (introOpened == 0) {
            loading();
            sessionStorage.setItem("introOpen", "1");
            console.log("loading start..");
        } else if (introOpened == 1 || _dev == 1) {
            $("#loading").hide();
            $("body").addClass("on");
            console.log("loading skip..");
        }

        scrollClassing($(".main_content section"), "false");
        scrollBar(); //스크롤바

        //네비게이션
        $("#menu_name .curr_name").on("click", function () {
            $("body").toggleClass("blur");
            $("#navi").toggleClass("active");
        });

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

            return false;
        });

        //personality
        var _personalityLength = $(".personality_li li").length - 1;
        var _iconIdx = 0;
        var _personalityLoop = setInterval(() => {
            if (_personalityActived === 1) {
                _iconIdx !== _personalityLength ? _iconIdx++ : (_iconIdx = 0);
                $(".personality_li li")
                    .eq(_iconIdx)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
                $(".personality_icon li")
                    .eq(_iconIdx)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            }
        }, 2000);

        //project
        $(".project_li li").on("mouseover", function () {
            var _projectName = $(this).attr("data-img");
            if (_projectName !== 0) {
                $(this).addClass("active").siblings().removeClass("active");
                $(this)
                    .siblings(".bg")
                    .children("." + _projectName)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            }
        });

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            $(window).off("scroll");
            clearInterval(_personalityLoop);
        };
    }, []);

    return (
        <div>
            <div id="loading">
                <div id="phase1" className="dark">
                    <p className="l1">
                        <span className="t1">Hi.</span>{" "}
                        <span className="t2">My</span>{" "}
                        <span className="t3">Name</span>{" "}
                        <span className="t4">is</span>
                    </p>
                    <p className="l2">
                        <span className="t4">Sang-o Lee.</span>
                    </p>
                </div>
                <div id="phase2" className="trait light">
                    <p className="main_text">
                        <small className="sup_text">효율적으로일하고</small>
                        <span className="text_c">Efficient</span>
                        <span className="text_m">Efficient</span>
                        <span className="text_y">Efficient</span>
                    </p>
                </div>
                <div id="phase3" className="trait light">
                    <p className="main_text">
                        <small className="sup_text">협업을생각하며</small>
                        <span className="text_c">Supportive</span>
                        <span className="text_m">Supportive</span>
                        <span className="text_y">Supportive</span>
                    </p>
                </div>
                <div id="phase4" className="trait light">
                    <p className="main_text">
                        <small className="sup_text">성장하는</small>
                        <span className="text_c">Growing</span>
                        <span className="text_m">Growing</span>
                        <span className="text_y">Growing</span>
                    </p>
                </div>
                <div id="phase5" className="dark">
                    <p className="l1">
                        <span className="t1">웹퍼블리셔</span>
                        <span className="t2">이상오</span>
                        <span className="t3">입니다.</span>
                    </p>
                    <p className="l2">
                        <span className="t1">Efficient</span>
                        <span className="t2">Supportive</span>
                        <span className="t3">Growing</span>
                    </p>
                </div>
                <button id="loading_close">SKIP</button>
            </div>
            <nav id="navi">
                <div className="container">
                    <div className="flex_row">
                        <div className="col">
                            <div id="menu_name">
                                <span className="curr_name">
                                    Sang-O's Portfolio
                                </span>
                                <span className="icon material-symbols-outlined">
                                    expand_more
                                </span>
                                <ul className="menu_list">
                                    <li>
                                        <a data-use="scroll" href="#main_view">
                                            Main
                                        </a>
                                    </li>
                                    <li>
                                        <a data-use="scroll" href="#intro">
                                            Introduce
                                        </a>
                                    </li>
                                    <li>
                                        <a data-use="scroll" href="#history">
                                            Work Experience
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-use="scroll"
                                            href="#personality"
                                        >
                                            Personality
                                        </a>
                                    </li>
                                    <li>
                                        <a data-use="scroll" href="#project">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a data-use="scroll" href="#example">
                                            Major Works
                                        </a>
                                    </li>
                                    <li>
                                        <a data-use="scroll" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <ul className="top_link">
                                <li className="resume">
                                    <Link to={`/resume`}>자기소개서 보기</Link>
                                </li>
                                <li className="email">
                                    <a href="mailto:ras301@naver.com">
                                        이메일 보내기
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="main_content">
                <section
                    className="se1"
                    id="main_view"
                    data-title="Sang-O's Portfolio"
                >
                    <video autoPlay muted loop playsInline id="main_bg">
                        <source src={mainBgImg} type="video/mp4" />
                    </video>
                    <div className="container wide">
                        <h3 className="middle_title">
                            <span className="t1">Efficient</span>
                            <span className="t2">Supportive</span>
                            <span className="t3">Growing</span>
                        </h3>
                        {/*  마우스 위치에 따라 변화하는 요소 추가 */}
                    </div>
                </section>
                {/* //main_view*/}
                <section className="se2" id="intro" data-title="Introduce">
                    <div className="container">
                        <h3 className="main_title">
                            단 <span className="emp">한 페이지</span>로 <br />
                            보여드립니다
                        </h3>
                        <div className="summary_wrap">
                            <div className="flex_row">
                                <div className="col col_8">
                                    <dl data-acive="fadeup" data-active-idx="1">
                                        <dt>경력</dt>
                                        <dd>
                                            메일플러그 홈페이지 제작부
                                            파트장(17.10~22.08)
                                            <ul className="li_dot">
                                                <li>
                                                    대학교 홈페이지 웹표준,
                                                    웹접근성 테스트 통과 경험
                                                </li>
                                                <li>
                                                    시멘틱 마크업을 준수하는
                                                    반응형 홈페이지 개발
                                                </li>
                                                <li>
                                                    크로스 브라우징{" "}
                                                    <small>
                                                        (Chrome / Safari / MS
                                                        Edge / Firefox)
                                                    </small>{" "}
                                                    검수 진행
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="col col_4">
                                    <dl data-acive="fadeup" data-active-idx="1">
                                        <dt>학력</dt>
                                        <dd>경북대학교 영어영문학과 학사</dd>
                                        <dt>자격증</dt>
                                        <dd>
                                            웹디자인 기능사 / GTQ 1급 / GTQi 1급
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="flex_row">
                                <div className="col">
                                    <dl
                                        className="skill_dl"
                                        data-acive="fadeup"
                                        data-active-idx="2"
                                    >
                                        <dt>개발언어</dt>
                                        <dd>
                                            <span>HTML5</span>
                                        </dd>
                                        <dd>
                                            <span>CSS3 / Sass</span>
                                        </dd>
                                        <dd>
                                            <span>Js / Jquery</span>
                                        </dd>
                                        <dd>
                                            <span>PHP / CodeIgniter</span>
                                        </dd>
                                        <dd>
                                            <span>Mysql</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="col">
                                    <dl
                                        className="skill_dl"
                                        data-acive="fadeup"
                                        data-active-idx="2"
                                    >
                                        <dt>사용하는 툴</dt>
                                        <dd>
                                            <span>Adobe Photoshop</span>
                                        </dd>
                                        <dd>
                                            <span>Adobe Illustrator</span>
                                        </dd>
                                        <dd>
                                            <span>
                                                Imweb <small>(아임웹)</small>
                                            </span>
                                        </dd>
                                        <dd>
                                            <span>Xshell</span>
                                        </dd>
                                        <dd>
                                            <span>
                                                Google <br />
                                                Analytics
                                            </span>
                                        </dd>
                                        <dd>
                                            <span>
                                                Naver Search <br />
                                                Advisor
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="col">
                                    <dl
                                        className="skill_dl"
                                        data-acive="fadeup"
                                        data-active-idx="2"
                                    >
                                        <dt>협업 툴</dt>
                                        <dd>
                                            <span>Git</span>
                                        </dd>
                                        <dd>
                                            <span>Jira / Confluence</span>
                                        </dd>
                                        <dd>
                                            <span>Notion</span>
                                        </dd>
                                        <dd>
                                            <span>Zeplin</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //intro*/}
                <section
                    className="se3"
                    id="history"
                    data-title="Work Experience"
                >
                    <div className="container">
                        <div id="history_wrap">
                            <div className="txt_box">
                                <h3 className="main_line">
                                    <span className="t1 active">
                                        모든 것이 새롭고{" "}
                                        <br className="visible_xs" />
                                        서툴렀던 신입에서{" "}
                                    </span>
                                    <span className="t2">
                                        작업물이 수상하는{" "}
                                        <br className="visible_xs" />
                                        기쁨을 맛보기도 하고{" "}
                                    </span>
                                    <span className="t3">
                                        파트장이라는 직책을 통해{" "}
                                        <br className="visible_xs" />
                                        다양한 경험을 쌓으며{" "}
                                    </span>
                                    <span className="t4">
                                        퍼블리싱을 너머 빌더{" "}
                                        <br className="visible_xs" />
                                        개발작업까지 해왔습니다
                                    </span>
                                </h3>
                                <p className="sub_line">
                                    <span className="t1 active">
                                        기업 랜딩페이지, 대학교, 쇼핑몰 등{" "}
                                        <br className="visible_xs" />
                                        <strong>430여개 홈페이지</strong>를 제작
                                    </span>
                                    <span className="t2">
                                        시사저널e '신도시 30년'{" "}
                                        <br className="visible_xs" />-{" "}
                                        <strong>
                                            2020 인터넷신문 언론대상 수상
                                        </strong>
                                    </span>
                                    <span className="t3">
                                        신입사원 교육 / 제작 프로세스 개선 /{" "}
                                        <br className="visible_xs" />
                                        공용 컴포넌트 개발 등
                                    </span>
                                    <span className="t4">
                                        PHP/Codeigniter를 활용한{" "}
                                        <br className="visible_xs" />
                                        <strong>
                                            자사 빌더 기능개선 기획 및 개발
                                        </strong>
                                    </span>
                                </p>
                            </div>
                            <div id="history_content">
                                <article id="at1">
                                    <h4 className="hidden">사무실 이미지</h4>
                                    {/*  <img src="../img/history.png" alt="history1" className="history_img"> */}
                                </article>
                                <article id="at2">
                                    <h4 className="hidden">트로피 이미지</h4>
                                    {/*  <img src="../img/history2.png" alt="history2" className="history_img"> */}
                                </article>
                                <article id="at3">
                                    <h4 className="hidden">노트북 이미지</h4>
                                    {/*  <img src="../img/history.png" alt="history3" className="history_img"> */}
                                </article>
                                <article id="at4" data-last="true">
                                    <h4 className="hidden">코딩화면 이미지</h4>
                                    {/*  <img src="../img/history.png" alt="history4" className="history_img"> */}
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //history*/}
                <section
                    className="se4"
                    id="personality"
                    data-title="Personality"
                >
                    <div className="container wide">
                        <div className="flex_row personality_wrap">
                            <div className="col col_8 txt_box">
                                <h3 className="main_title">
                                    <span className="emp">차분하고</span>{" "}
                                    <br className="visible_xs" />
                                    <span className="emp">
                                        책임감
                                    </span> 있으며 <br className="hidden_xs" />
                                    <span className="emp">
                                        팀으로 일하는 것
                                    </span>
                                    을 <br />
                                    중요하게 생각합니다
                                </h3>
                                <ul
                                    className="personality_li"
                                    data-acive="fadeleft"
                                    data-active-idx="1"
                                >
                                    <li className="active">
                                        {" "}
                                        모든 업무는 정해진 기간에{" "}
                                        <br className="visible_xs" />
                                        맞춰 정확히 마무리 합니다.
                                    </li>
                                    <li>
                                        {" "}
                                        불필요한 작업을 최소화하여{" "}
                                        <br className="visible_xs" />
                                        효율적인 작업환경을 구축합니다.
                                    </li>
                                    <li>
                                        {" "}
                                        홈페이지는 함께 완성해 나가는{" "}
                                        <br className="visible_xs" />
                                        작업임을 인지하고 협력합니다.
                                    </li>
                                    <li>
                                        {" "}
                                        늘 같은 위치에 머무르지 않고{" "}
                                        <br className="visible_xs" />
                                        새로운 것들을 배웁니다.
                                    </li>
                                </ul>
                            </div>
                            <div className="col col_4 icon_box">
                                <ul className="personality_icon">
                                    <li className="active">
                                        {" "}
                                        <span className="clock material-symbols-outlined">
                                            {" "}
                                            alarm_on{" "}
                                        </span>{" "}
                                    </li>
                                    <li className="">
                                        {" "}
                                        <span className="process material-symbols-outlined">
                                            {" "}
                                            rebase_edit{" "}
                                        </span>{" "}
                                    </li>
                                    <li className="">
                                        {" "}
                                        <span className="handshake material-symbols-outlined">
                                            {" "}
                                            handshake{" "}
                                        </span>{" "}
                                    </li>
                                    <li className="">
                                        {" "}
                                        <span className="book material-symbols-outlined">
                                            {" "}
                                            local_library{" "}
                                        </span>{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*  한줄씩 차례대로 강조되는 효과와 함께 관련 이미지 등장하는 애니메이션 */}
                    </div>
                </section>
                {/* //personality*/}
                <section className="se5" id="project" data-title="Projects">
                    <div className="container">
                        <h3 className="main_title">
                            브랜드, 브랜드 <br className="visible_xs" />
                            그리고 <span className="emp">브랜드</span>
                        </h3>
                        <p className="sub_title">
                            <strong>브랜드의 정체성</strong>은 살리고,{" "}
                            <br className="visible_xs" />
                            <strong>가독성이 좋은 UX/UI</strong>를 고민합니다
                        </p>
                        <div className="flex_row project_wrap">
                            <div className="col">
                                <ul
                                    className="project_li"
                                    data-acive="fadeup"
                                    data-active-idx="1"
                                >
                                    <li data-img="project1" className="active">
                                        <a
                                            href="https://me.postech.ac.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            포항공과대학교 기계공학과
                                        </a>
                                    </li>
                                    <li data-img="project2">
                                        <a
                                            href="http://sweet.swu.ac.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            서울여자대학교 교직지원센터
                                        </a>
                                    </li>
                                    <li data-img="project3">
                                        <a
                                            href="http://aimed.ajou.ac.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            아주대학교 융합인재양성사업단{" "}
                                        </a>
                                    </li>
                                    <li data-img="project4">
                                        <a
                                            href="http://westernamc.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            웨스턴동물의료센터
                                        </a>
                                    </li>
                                    <li data-img="project5">
                                        <a
                                            href="http://www.sunjin.or.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            선진병원
                                        </a>
                                    </li>
                                    <li data-img="project6">
                                        <a
                                            href="http://phits.co.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            피츠인솔 공식스토어
                                        </a>
                                    </li>
                                    <li data-img="project7">
                                        <a
                                            href="http://www.ormerdayspa.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            오메르데이스파
                                        </a>
                                    </li>
                                    <li data-img="project8">
                                        <a
                                            href="http://hanyang3d.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            한양3D팩토리
                                        </a>
                                    </li>
                                    <li data-img="0" className="bg">
                                        <img
                                            src={projectImg1}
                                            className="img project1 active"
                                            alt="포항공과대학교 기계공학과"
                                        />
                                        <img
                                            src={projectImg2}
                                            className="img project2"
                                            alt="서울여자대학교 교직지원센터"
                                        />
                                        <img
                                            src={projectImg3}
                                            className="img project3"
                                            alt="아주대학교 융합인재양성사업단 "
                                        />
                                        <img
                                            src={projectImg4}
                                            className="img project4"
                                            alt="웨스턴동물의료센터"
                                        />
                                        <img
                                            src={projectImg5}
                                            className="img project5"
                                            alt="선진병원"
                                        />
                                        <img
                                            src={projectImg6}
                                            className="img project6"
                                            alt="피츠인솔 공식스토어"
                                        />
                                        <img
                                            src={projectImg7}
                                            className="img project7"
                                            alt="오메르데이스파"
                                        />
                                        <img
                                            src={projectImg8}
                                            className="img project8"
                                            alt="한양3D팩토리"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul
                                    className="project_li"
                                    data-acive="fadeup"
                                    data-active-idx="1"
                                >
                                    <li data-img="project9" className="active">
                                        <a
                                            href="https://fmrecruit.hy.co.kr/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            에치와이 프레시 매니저 채용
                                        </a>
                                    </li>
                                    <li data-img="project10">
                                        <a
                                            href="http://yekun-arc.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            예건건축
                                        </a>
                                    </li>
                                    <li data-img="project11">
                                        <a
                                            href="http://bigpunchent.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            빅펀치 엔터테인먼트
                                        </a>
                                    </li>
                                    <li data-img="project12">
                                        <a
                                            href="http://www.asemgac.org/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            아셈노인인권정책센터
                                        </a>
                                    </li>
                                    <li data-img="project13">
                                        <a
                                            href="http://www.gyeyanglaw.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            법무법인 혜암
                                        </a>
                                    </li>
                                    <li data-img="project14">
                                        <a
                                            href="http://www.hjcustoms.co.kr"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            관세법인 한주
                                        </a>
                                    </li>
                                    <li data-img="project15">
                                        <a
                                            href="https://www.xn--939a100aw6drqg7pcjx7a.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            형사전문로펌 온강
                                        </a>
                                    </li>
                                    <li data-img="0">
                                        - 이외 430여개 사이트 제작
                                    </li>
                                    <li data-img="0" className="bg">
                                        <img
                                            src={projectImg9}
                                            className="img project9 active"
                                            alt="에치와이 프레시 매니저 채용"
                                        />
                                        <img
                                            src={projectImg10}
                                            className="img project10"
                                            alt="예건건축 "
                                        />
                                        <img
                                            src={projectImg11}
                                            className="img project11"
                                            alt="빅펀치 엔터테인먼트 "
                                        />
                                        <img
                                            src={projectImg12}
                                            className="img project12"
                                            alt="아셈노인인권정책센터"
                                        />
                                        <img
                                            src={projectImg13}
                                            className="img project13"
                                            alt="법무법인 혜암"
                                        />
                                        <img
                                            src={projectImg14}
                                            className="img project14"
                                            alt="관세법인 한주"
                                        />
                                        <img
                                            src={projectImg15}
                                            className="img project15"
                                            alt="형사전문로펌 온강"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="info_text">
                            * 텍스트 자료를 기반으로{" "}
                            <br className="visible_xs" />
                            레이아웃 구성 및 퍼블리싱 작업 기여
                        </p>
                    </div>
                </section>
                {/* //project*/}
                <section className="se6" id="example" data-title="Major Works">
                    <div className="container">
                        <h3 className="main_title">
                            <span className="emp">주요 프로젝트</span>가<br />
                            궁금하시다면
                        </h3>
                    </div>
                    <div className="container wide">
                        <div id="major_wrap">
                            <article className="example1">
                                <img
                                    src={exampleImg1}
                                    alt="시사저널e - '신도시 30년'"
                                />
                                <div className="txt_box">
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
                                        했습니다. 전반적으로 매거진과 같은
                                        느낌을 주기위해 다양한 레이아웃으로
                                        텍스트를 배치하였습니다. 가독성을 놓치지
                                        않으면서 디지털 뉴스만의 이점으로 시각화
                                        자료를 쉽게 비교하여 볼 수 있도록
                                        작업하였습니다.
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
                                <img
                                    src={exampleImg2}
                                    alt="포항공과대학 기계공학과"
                                />
                                <div className="txt_box">
                                    <h5>포항공과대학교 기계공학과</h5>
                                    <p className="period">
                                        레이아웃 기획 및 퍼블리싱, 기능 개발{" "}
                                        <span> / 14 Days</span>
                                    </p>
                                    <p className="des">
                                        포항공과대학교 학과 작업 중 첫 번째
                                        작업물입니다. 메인페이지에서 학과 관련
                                        정보를 쉽게 찾아볼 수 있고,{" "}
                                        <strong>다국어 기능</strong>을
                                        지원합니다. 고객의 니즈에 따라,{" "}
                                        <strong>
                                            기본 빌더 기능을 개선하는 개발 작업
                                        </strong>
                                        도 함께 진행하였습니다.
                                        <br />
                                        (* 메인 캘린더 위젯 / 유튜브 게시판 기능
                                        추가)
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
                                <div className="txt_box">
                                    <h5>한양3D팩토리</h5>
                                    <p className="period">
                                        퍼블리싱 및 반응형 작업{" "}
                                        <span> / 6 Days</span>
                                    </p>
                                    <p className="des">
                                        제공받은 PC버전의 시안을 바탕으로 제작된
                                        홈페이지 입니다.
                                        <strong>
                                            PC버전의 시안의 디자인을 유지하면서
                                            반응형으로 조절
                                        </strong>{" "}
                                        되도록 작업하는 것에 중점을
                                        맞추었습니다. 기본적으로 빌더에서
                                        제공되는 폼이나 게시판 형태를
                                        커스터마이징 하여 기능적인 만족도를
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
                                <div className="txt_box">
                                    <h5>오메르데이스파</h5>
                                    <p className="period">
                                        레이아웃 기획 및 퍼블리싱{" "}
                                        <span> / 5 Days</span>
                                    </p>
                                    <p className="des">
                                        <strong>풀페이지 형태</strong>로 작업된
                                        랜딩 페이지입니다. 동적인 요소가
                                        많았으면 한다는 요청에 따라 스크롤
                                        이벤트로 동작을 추가하고,{" "}
                                        <strong>인트로 페이지를 삽입</strong>
                                        하였습니다. 업체의 무드를 강조하기 위해
                                        이미지를 적극적으로 이용하여 톤앤매너를
                                        정리했습니다.
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
                {/* //example*/}
                <section className="se7" id="contact" data-title="Contact">
                    <div className="container">
                        <h3 className="main_title">
                            이런 동료와 <br />
                            <span className="emp">함께 일하고</span>{" "}
                            <br className="visible_xs" />
                            싶으시다면?
                        </h3>
                        <ul className="contact_li">
                            <li>
                                <Link to="/resume">
                                    자기소개서 보기
                                    <span className="icon material-symbols-outlined">
                                        {" "}
                                        arrow_right{" "}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:ras301@naver.com"
                                    title="ras301@naver.com"
                                >
                                    이메일 보내기
                                    <span className="icon material-symbols-outlined">
                                        {" "}
                                        arrow_right{" "}
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="profile_img">
                            <img src={profileImg} alt="Sang-O lee profile" />
                        </div>
                    </div>
                </section>
                {/* //contact*/}
            </div>
            {/*  //main_content */}
            <footer id="footer">
                <div className="container">
                    <div className="flex_row">
                        <div className="col">
                            <p className="des">
                                이 웹사이트는 포트폴리오를 목적으로
                                제작되었습니다.{" "}
                            </p>
                        </div>
                        <div className="col">
                            <p className="copy">&copy; All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* //footer*/}
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
            {/*  //nav_scroll */}
        </div>
    );
}

export default Home;

//legacy
import $ from "jquery";
import "jquery-easing";
import { useEffect, useState } from "react";

//components
import Loading from "components/renew/Loading";
import KeyVisual from "components/renew/KeyVisual";
import Core from "components/renew/mainContent/Core";
import History from "components/renew/mainContent/History";
import Personality from "components/renew/mainContent/Personality";
import Project from "components/renew/mainContent/Project";
import Example from "components/renew/mainContent/Example";
import Contact from "components/renew/mainContent/Contact";
import Footer from "components/renew/Footer";
import Floating from "components/renew/mainContent/Floating";

import "assets/css/renew.scss";

function Renew() {
    const [bgBaseline, setBgBaseline] = useState(1000);
    const [isVisibleFloating, setIsVisibleFloating] = useState(false);
    const [windowTop, setWindowTop] = useState(0);
    const [isOverflow, setIsOverflow] = useState(true);

    var _dev = 1; // 1= 인트로 생략 0=인트로 노출

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
                $("#loading-close").addClass("active");
            }
            if (_time > 4100 && _time < 5100) {
                $("#loading #phase2 .main-text").addClass("active");
            }
            if (_time > 5100 && _time < 5400) {
                //phase3
                $("#loading #phase3")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
            }
            if (_time > 5400 && _time < 6400) {
                $("#loading #phase3 .main-text").addClass("active");
            }
            if (_time > 6400 && _time < 6700) {
                //phase4
                $("#loading #phase4")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
            }
            if (_time > 6700 && _time < 7700) {
                $("#loading #phase4 .main-text").addClass("active");
            }
            if (_time > 7700 && _time < 9200) {
                //phase5
                $("#loading #phase5")
                    .addClass("active")
                    .prev()
                    .removeClass("active");
                $("#loading #phase5 .l1").addClass("active");
                setTimeout(() => {
                    $("#loading-close").removeClass("active");
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
                    setIsOverflow(false);
                }, 300);
            }
        }, 100);
        windowInit("loading error"); //스크롤 초기화

        //loading close
        $("#loading-close").on("click", function (e) {
            e.preventDefault();
            clearInterval(_loadingTimer);
            $("#loading").fadeOut(1000);
            setIsOverflow(false);
            console.log("close clicked");
        });
    }

    //scroll section active
    useEffect(() => {
        const observeScroll = windowTop + window.innerHeight / 2;
        const sections = document.querySelectorAll(".main-content section");
        const sectionsTop = [];
        sections.forEach((section, i) => {
            sectionsTop.push(section.offsetTop);
        });
        for (let i = 0; i < sectionsTop.length; i++) {
            if (i + 1 < sectionsTop.length) {
                if (
                    observeScroll > sectionsTop[i] &&
                    observeScroll <= sectionsTop[i + 1]
                ) {
                    document
                        .querySelector(`#${sections[i].getAttribute("id")}`)
                        .classList.add("active");
                }
            } else {
                if (observeScroll > sectionsTop[i]) {
                    document
                        .querySelector(`#${sections[i].getAttribute("id")}`)
                        .classList.add("active");
                }
            }
        }
        if (windowTop === 0) {
            sections.forEach((section) => {
                section.classList.remove("active");
            });
        }

        //key visual
        setBgBaseline(sectionsTop[2]);
        windowTop < bgBaseline
            ? (document.querySelector("#canvas").style.display = "block")
            : (document.querySelector("#canvas").style.display = "none");

        //active floating btn
        if (windowTop > sectionsTop[1]) {
            setIsVisibleFloating(true);
        } else {
            setIsVisibleFloating(false);
        }
    }, [windowTop]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setWindowTop(window.scrollY);
        });

        //로딩페이지 세션스토리지
        if (introOpened == 0) {
            loading();
            sessionStorage.setItem("introOpen", "1");
            console.log("loading start..");
        } else if (introOpened == 1 || _dev == 1) {
            $("#loading").hide();
            setIsOverflow(false);
            console.log("loading skip..");
        }
    }, []);

    return (
        <div className={`renew ${isOverflow ? "" : "on"}`}>
            {/* <Loading /> */}
            <div className="main-content">
                <KeyVisual />
                <History />
                <Example />
                <Project />
                <Core />
                <Personality />
                <Contact />
            </div>
            <Footer />

            <Floating isVisibleFloating={isVisibleFloating} />
        </div>
    );
}

export default Renew;

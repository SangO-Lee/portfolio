import { useEffect } from "react";
import $ from "jquery";

function ScrollBar() {
    function scrollBar(sts) {
        var _windowTop = $(window).scrollTop();
        var _windowHeight = window.innerHeight;
        var _pageHeight =
            document.querySelector(".resume").clientHeight - _windowHeight;

        var _ratio = (_windowTop / _pageHeight) * 100;
        $("#scroll-bar .current-indicator").css("top", _ratio + "%");
    }

    useEffect(() => {
        $(window).on("scroll", function () {
            //common
            scrollBar("scroll bar - scrolling");
        });
        scrollBar("scroll bar - start"); //스크롤바
    });
    return (
        <aside id="nav-scroll">
            <div id="scroll-bar">
                <div className="inner">
                    <span className="current-indicator"></span>
                </div>
            </div>
            <a
                data-use="scroll"
                title="사이트 최상단 바로가기"
                id="scroll-top"
                href="#body-layout"
            >
                {" "}
            </a>
        </aside>
    );
}

export default ScrollBar;

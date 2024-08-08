import { Link } from "react-router-dom";

function Nav() {
    return (
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
                                    <a data-use="scroll" href="#key_visual">
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
                                    <a data-use="scroll" href="#personality">
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
    );
}

export default Nav;

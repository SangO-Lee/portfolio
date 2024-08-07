function Intro() {
    return (
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
                                            대학교 홈페이지 웹표준, 웹접근성
                                            테스트 통과 경험
                                        </li>
                                        <li>
                                            시멘틱 마크업을 준수하는 반응형
                                            홈페이지 개발
                                        </li>
                                        <li>
                                            크로스 브라우징{" "}
                                            <small>
                                                (Chrome / Safari / MS Edge /
                                                Firefox)
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
                                <dd>웹디자인 기능사 / GTQ 1급 / GTQi 1급</dd>
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
    );
}

export default Intro;

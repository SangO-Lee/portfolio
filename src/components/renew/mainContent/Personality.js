function Personality() {
    return (
        <section className="se4" id="personality" data-title="Personality">
            <div className="container wide">
                <div className="flex_row personality_wrap">
                    <div className="col col_8 txt_box">
                        <h3 className="main_title">
                            <span className="emp">차분하고</span>{" "}
                            <br className="visible_xs" />
                            <span className="emp">책임감</span> 있으며{" "}
                            <br className="hidden_xs" />
                            <span className="emp">팀으로 일하는 것</span>
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
    );
}

export default Personality;

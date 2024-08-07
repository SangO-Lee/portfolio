import mainBgImg from "assets/img/2023ver/main_bg.mp4";

function MainView() {
    return (
        <section className="se1" id="main_view" data-title="Sang-O's Portfolio">
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
    );
}

export default MainView;

import { Link } from "react-router-dom";
import profileImg from "assets/img/2023ver/profile.jpg";

function Contact() {
    return (
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
                        <Link to={`/resume`}>
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
    );
}

export default Contact;

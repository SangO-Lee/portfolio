import { useEffect, useState } from "react";
import PROJECTS from "data/project";
import MENU from "data/menu";

function Project() {
    const [activeProject, setActiveProject] = useState(PROJECTS[0]);

    //changeInfo
    const changeInfo = () => {
        const target = document.querySelector(".project_li .active");
        const lists = document.querySelectorAll(".project_li li");
        const index = Array.from(lists).indexOf(target);
        setActiveProject(PROJECTS[index]);
    };

    //click effect
    const onClick = (e) => {
        const target = e.currentTarget;
        const projectName = target.getAttribute("data-img");
        const container = document.querySelector(".project-wrap .bg");
        const lists = document.querySelectorAll(".project_li li");
        const img = document.querySelector("#" + projectName);
        const imgHeight = img.clientHeight;
        const index = Array.from(lists).indexOf(target);
        const topPadding = (container.clientHeight - imgHeight) / 2;
        const elementTop = imgHeight * index - topPadding;

        if (img) {
            requestAnimationFrame(() => {
                container.scrollTop = elementTop;
            });
        }
    };

    useEffect(() => {
        changeInfo();

        //scroll effect
        function onScroll() {
            const images = document.querySelectorAll(".project-wrap .bg a");
            let closestImage = null;
            let closestDistance = Infinity;

            images.forEach((img) => {
                const rect = img.getBoundingClientRect();
                const imgCenter = rect.top + rect.height / 2;
                const windowCenter = window.innerHeight / 2;
                const distance = Math.abs(windowCenter - imgCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestImage = img;
                }
            });

            if (closestImage) {
                images.forEach((img) => img.classList.remove("active"));
                closestImage.classList.add("active");

                const imgId = closestImage.getAttribute("id");
                const listItems = document.querySelectorAll(".project_li li");

                listItems.forEach((item) => {
                    item.classList.toggle(
                        "active",
                        item.getAttribute("data-img") === imgId
                    );
                });
            }

            changeInfo();
        }

        document
            .querySelector(".project-wrap .bg")
            .addEventListener("scroll", onScroll);
    }, []);
    return (
        <section className="se4" id={MENU[3].id}>
            <div className="container wide">
                <h2>Other Projects.</h2>
                <p className="sub-title">
                    <strong>브랜드의 정체성</strong>은 살리고,{" "}
                    <strong>가독성이 좋은 UX/UI</strong>를 고민합니다
                </p>
                <div className=" project-wrap">
                    <div className="inner">
                        <ul
                            className="project_li"
                            data-active="fadeup"
                            data-active-idx="1"
                        >
                            {PROJECTS.map((pj, i) => (
                                <li
                                    key={i}
                                    className={i === 0 ? "active" : ""}
                                    data-img={`project${i}`}
                                    onClick={onClick}
                                >
                                    {pj.name}
                                    <a
                                        href={pj.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="icon material-symbols-outlined">
                                            link
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="bg">
                            {PROJECTS.map((pj, i) => (
                                <a
                                    key={i}
                                    href={pj.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    id={`project${i}`}
                                    className={`${i === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={pj.imgSrc}
                                        className={`img  `}
                                        alt={pj.name}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="info-text">
                    {activeProject ? (
                        <>
                            <p className="name">{activeProject.name}</p>
                            <p className="sub_info">
                                <span className="type">
                                    {activeProject.type}
                                </span>{" "}
                                /{" "}
                                <span className="duration">
                                    반응형 웹 / {activeProject.duration} Days
                                </span>
                            </p>
                            <p className="skills">
                                {activeProject.skills.join(" · ")}
                            </p>
                            <p className="caption">
                                * 텍스트 자료를 기반으로 와이어프레이밍 및
                                퍼블리싱 작업 기여
                            </p>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default Project;

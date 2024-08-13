function Core() {
    const competency = [
        {
            title: "Web Publishing & Front-End Development",
            skills: [
                {
                    name: "HTML5",
                    level: 3,
                },
                {
                    name: "CSS3",
                    level: 3,
                },
                {
                    name: "SCSS",
                    level: 3,
                },
                {
                    name: "JavaScript",
                    level: 3,
                },
                {
                    name: "jQuery",
                    level: 3,
                },
                {
                    name: "Bootstrap",
                    level: 3,
                },
                {
                    name: "Vue.js",
                    level: 2,
                },
                {
                    name: "Nuxt.js",
                    level: 2,
                },
                {
                    name: "React",
                    level: 2,
                },
            ],
            colWidth: 6,
        },
        {
            title: "Design & Collaboration Tools",
            skills: [
                {
                    name: "Figma",
                    level: 2,
                },
                {
                    name: "Photoshop",
                    level: 1,
                },
                {
                    name: "Illustrator",
                    level: 1,
                },
                {
                    name: "Zeplin",
                    level: 1,
                },
                {
                    name: "Notion",
                    level: 3,
                },
                {
                    name: "Slack",
                    level: 3,
                },
                {
                    name: "Git",
                    level: 3,
                },
                {
                    name: "Jira",
                    level: 2,
                },
                {
                    name: "Confluence",
                    level: 2,
                },
            ],
            colWidth: 6,
        },
        {
            title: " Web Analytics & SEO Tools",
            skills: [
                {
                    name: "Google Analytics",
                    level: 2,
                },
                {
                    name: "Naver Search Advisor",
                    level: 2,
                },
                {
                    name: "Microsoft Clarity",
                    level: 2,
                },
            ],
            colWidth: 4,
        },
        {
            title: "Back-End & Data Management",
            skills: [
                {
                    name: "PHP",
                    level: 1,
                },
                {
                    name: "MySQL",
                    level: 1,
                },
                {
                    name: "CodeIgniter",
                    level: 1,
                },
            ],
            colWidth: 4,
        },
        {
            title: "Web Builder Platform",
            skills: [
                {
                    name: "Imweb",
                    level: 3,
                },
            ],
            colWidth: 4,
        },
    ];
    return (
        <section className="se4" id="core" data-title="Introduce">
            <div className="container wide">
                <h2 className="fade-in">Core Competencies.</h2>
                <div className="summary_wrap">
                    <div className="flex_row">
                        {competency.map((comp, index) => {
                            return (
                                <div
                                    className={`col col_${comp.colWidth}`}
                                    key={index}
                                >
                                    <dl className="skill_dl">
                                        <dt>{comp.title}</dt>
                                        {comp.skills.map((skill, i) => (
                                            <dd
                                                key={i}
                                                data-level={skill.level}
                                            >
                                                <span>{skill.name}</span>
                                            </dd>
                                        ))}
                                    </dl>
                                </div>
                            );
                        })}
                    </div>
                    <ul className="level-li">
                        <li>
                            <span className="circle" data-level="3"></span> 무리
                            없이 단독 작업 가능
                        </li>
                        <li>
                            <span className="circle" data-level="2"></span> 단독
                            작업 시 상급자의 검수가 필요함
                        </li>
                        <li>
                            <span className="circle" data-level="1"></span> 다른
                            작업자의 보조 역할 가능
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Core;

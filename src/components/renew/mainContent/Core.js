import COMPETENCY from "data/competency";

function Core() {
    return (
        <section className="se4" id="core" data-title="Introduce">
            <div className="container wide">
                <h2 className="fade-in">Core Competencies.</h2>
                <div className="summary-wrap">
                    <div className="flex-row">
                        {COMPETENCY.map((comp, index) => {
                            return (
                                <div
                                    className={`col col_${comp.colWidth}`}
                                    key={index}
                                >
                                    <dl className="skill-dl">
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

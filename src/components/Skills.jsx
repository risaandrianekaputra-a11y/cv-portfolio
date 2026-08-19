import { usePortfolio } from "../context/PortfolioContext";

function Skills() {
  const { data } = usePortfolio();

  return (
    <section
      id="skills"
      className="section section-dark"
    >
      <div className="container">

        <div className="section-header">

          <p>SKILLS</p>

          <h2>
            My Expertise
          </h2>

        </div>

        <div className="skills-grid">

          {data.skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.id}
            >

              <div className="skill-top">

                <h3>
                  {skill.name}
                </h3>

                <span>
                  {skill.level}%
                </span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{
                    width: `${skill.level}%`
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
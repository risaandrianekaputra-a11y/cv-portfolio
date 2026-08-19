import { usePortfolio } from "../context/PortfolioContext";

function Experience() {
  const { data } = usePortfolio();

  return (
    <section
      id="experience"
      className="section"
    >

      <div className="container">

        <div className="section-header">

          <p>EXPERIENCE</p>

          <h2>
            Work Experience
          </h2>

        </div>

        <div className="timeline">

          {data.experience.map((item) => (

            <div
              className="timeline-item"
              key={item.id}
            >

              <span className="timeline-period">
                {item.period}
              </span>

              <h3>
                {item.position}
              </h3>

              <h4>
                {item.company}
              </h4>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
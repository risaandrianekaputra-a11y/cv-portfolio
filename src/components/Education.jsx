import { usePortfolio } from "../context/PortfolioContext";

function Education() {
  const { data } = usePortfolio();

  return (
    <section className="section section-dark">

      <div className="container">

        <div className="section-header">

          <p>EDUCATION</p>

          <h2>
            Educational Background
          </h2>

        </div>

        <div className="education-grid">

          {data.education.map((item) => (

            <div
              className="education-card"
              key={item.id}
            >

              <span>
                {item.period}
              </span>

              <h3>
                {item.degree}
              </h3>

              <h4>
                {item.school}
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

export default Education;
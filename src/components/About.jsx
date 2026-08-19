import { usePortfolio } from "../context/PortfolioContext";

function About() {
  const { data } = usePortfolio();

  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="section-header">

          <p>ABOUT ME</p>

          <h2>
            Professional Profile
          </h2>

        </div>

        <div className="about-card">

          <p>
            {data.profile.description}
          </p>

          <div className="about-info">

            <div>
              <span>Email</span>

              <strong>
                {data.profile.email}
              </strong>
            </div>

            <div>
              <span>Phone</span>

              <strong>
                {data.profile.phone}
              </strong>
            </div>

            <div>
              <span>Location</span>

              <strong>
                {data.profile.location}
              </strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
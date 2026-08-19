import {
  GithubIcon,
  ExternalLink,
  Linkedin,
  Mail
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Portfolio() {
  const { data } = usePortfolio();

  return (
    <section
      id="portfolio"
      className="section"
    >

      <div className="container">

        <div className="section-header">

          <p>PORTFOLIO</p>

          <h2>
            Featured Projects
          </h2>

        </div>

        <div className="portfolio-grid">

          {data.portfolio.map((project) => (

            <div
              className="portfolio-card"
              key={project.id}
            >

              <div className="portfolio-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-placeholder">
                    {project.title.charAt(0)}
                  </div>
                )}

              </div>

              <div className="portfolio-content">

                <span>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="portfolio-links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;
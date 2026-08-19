import {
  ArrowDown
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Hero() {
  const { data } = usePortfolio();

  const { profile, social } = data;

  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1>
            {profile.name}
          </h1>

          <h2>
            {profile.title}
          </h2>

          <p className="hero-description">
            {profile.description}
          </p>

          <div className="hero-buttons">

            <a
              href="#portfolio"
              className="btn btn-primary"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Contact Me
            </a>

          </div>

          <div className="social-links">

            {social.github && (
              <a
                href={social.github}
                target="_blank"
              >
                <Github size={20} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
            )}

          </div>

        </div>

        <div className="hero-visual">

          <div className="profile-card">

            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
              />
            ) : (
              <div className="profile-placeholder">
                {profile.name.charAt(0)}
              </div>
            )}

          </div>

        </div>

      </div>

      <a
        href="#about"
        className="scroll-down"
      >
        <ArrowDown size={22} />
      </a>

    </section>
  );
}

export default Hero;
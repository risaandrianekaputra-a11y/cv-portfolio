import { Mail, Phone, MapPin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Contact() {
  const { data } = usePortfolio();

  return (
    <section
      id="contact"
      className="section section-dark"
    >

      <div className="container">

        <div className="section-header">

          <p>CONTACT</p>

          <h2>
            Let's Work Together
          </h2>

        </div>

        <div className="contact-grid">

          <div className="contact-item">
            <Mail />

            <div>
              <span>Email</span>

              <p>
                {data.profile.email}
              </p>
            </div>
          </div>

          <div className="contact-item">
            <Phone />

            <div>
              <span>Phone</span>

              <p>
                {data.profile.phone}
              </p>
            </div>
          </div>

          <div className="contact-item">
            <MapPin />

            <div>
              <span>Location</span>

              <p>
                {data.profile.location}
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
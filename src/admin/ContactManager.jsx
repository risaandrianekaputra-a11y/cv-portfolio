import {
  Save,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import toast from "react-hot-toast";
import { useState } from "react";

import { usePortfolio } from "../context/PortfolioContext";

function ContactManager() {
  const {
    data,
    updateProfile,
    updateSocial,
  } = usePortfolio();

  const [profileData, setProfileData] = useState({
    email: data.profile?.email || "",
    phone: data.profile?.phone || "",
    location: data.profile?.location || "",
  });

  const [socialData, setSocialData] = useState({
    github: data.social?.github || "",
    linkedin: data.social?.linkedin || "",
    instagram: data.social?.instagram || "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;

    setSocialData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile({
      ...data.profile,
      ...profileData,
    });

    updateSocial({
      ...data.social,
      ...socialData,
    });

    toast.success(
      "Contact dan Social Media berhasil diperbarui"
    );
  };

  return (
    <div>

      {/* HEADER */}

      <div className="manager-header">
        <div>
          <p>MANAGEMENT</p>

          <h1>
            Contact & Social Media
          </h1>
        </div>
      </div>


      <form onSubmit={handleSubmit}>

        {/* CONTACT */}

        <div className="manager-card">

          <h2>
            Contact Information
          </h2>

          <div className="form-grid">

            {/* EMAIL */}

            <div className="form-group">

              <label>
                <Mail size={16} />
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                placeholder="email@example.com"
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                <Phone size={16} />
                Nomor Telepon
              </label>

              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
                placeholder="081234567890"
              />

            </div>


            {/* LOCATION */}

            <div className="form-group">

              <label>
                <MapPin size={16} />
                Lokasi
              </label>

              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleProfileChange}
                placeholder="Indonesia"
              />

            </div>

          </div>

        </div>


        {/* SOCIAL MEDIA */}

        <div className="manager-card">

          <h2>
            Social Media
          </h2>

          <div className="form-grid">

            {/* GITHUB */}

            <div className="form-group">

              <label>
                <FaGithub size={16} />
                GitHub
              </label>

              <input
                type="url"
                name="github"
                value={socialData.github}
                onChange={handleSocialChange}
                placeholder="https://github.com/username"
              />

            </div>


            {/* LINKEDIN */}

            <div className="form-group">

              <label>
                <FaLinkedin size={16} />
                LinkedIn
              </label>

              <input
                type="url"
                name="linkedin"
                value={socialData.linkedin}
                onChange={handleSocialChange}
                placeholder="https://linkedin.com/in/username"
              />

            </div>


            {/* INSTAGRAM */}

            <div className="form-group">

              <label>
                <FaInstagram size={16} />
                Instagram
              </label>

              <input
                type="url"
                name="instagram"
                value={socialData.instagram}
                onChange={handleSocialChange}
                placeholder="https://instagram.com/username"
              />

            </div>

          </div>


          {/* SOCIAL PREVIEW */}

          <div className="social-links">

            {socialData.github && (
              <a
                href={socialData.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}

            {socialData.linkedin && (
              <a
                href={socialData.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            )}

            {socialData.instagram && (
              <a
                href={socialData.instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            )}

          </div>

        </div>


        {/* SAVE */}

        <button
          type="submit"
          className="btn btn-primary"
        >
          <Save size={18} />

          Simpan Perubahan
        </button>

      </form>

    </div>
  );
}

export default ContactManager;
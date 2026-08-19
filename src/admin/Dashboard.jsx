import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import ProfileManager from "./ProfileManager";
import SkillsManager from "./SkillsManager";
import ExperienceManager from "./ExperienceManager";
import EducationManager from "./EducationManager";
import PortfolioManager from "./PortfolioManager";
import ContactManager from "./ContactManager";

import {
  Brain,
  Briefcase,
  GraduationCap,
  FolderKanban
} from "lucide-react";

import { usePortfolio } from "../context/PortfolioContext";

function Dashboard() {
  const navigate = useNavigate();

  const { data } = usePortfolio();

  const [activeMenu, setActiveMenu] =
    useState("dashboard");

  useEffect(() => {
    const isAdmin =
      localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");

    navigate("/admin");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "profile":
        return <ProfileManager />;

      case "skills":
        return <SkillsManager />;

      case "experience":
        return <ExperienceManager />;

      case "education":
        return <EducationManager />;

      case "portfolio":
        return <PortfolioManager />;

      case "contact":
        return <ContactManager />;

      default:
        return (
          <>
            <div className="dashboard-header">

              <div>
                <p>WELCOME BACK</p>

                <h1>
                  Dashboard
                </h1>
              </div>

            </div>

            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon">
                  <Brain />
                </div>

                <div>
                  <span>Total Skills</span>

                  <h2>
                    {data.skills.length}
                  </h2>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon">
                  <Briefcase />
                </div>

                <div>
                  <span>Experience</span>

                  <h2>
                    {data.experience.length}
                  </h2>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon">
                  <GraduationCap />
                </div>

                <div>
                  <span>Education</span>

                  <h2>
                    {data.education.length}
                  </h2>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon">
                  <FolderKanban />
                </div>

                <div>
                  <span>Projects</span>

                  <h2>
                    {data.portfolio.length}
                  </h2>
                </div>

              </div>

            </div>

            <div className="dashboard-welcome">

              <h2>
                Selamat Datang, Admin 👋
              </h2>

              <p>
                Gunakan menu di sebelah kiri
                untuk mengelola informasi
                CV dan portfolio Anda.
              </p>

            </div>
          </>
        );
    }
  };

  return (
    <div className="admin-layout">

      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        handleLogout={handleLogout}
      />

      <main className="admin-content">

        {renderContent()}

      </main>

    </div>
  );
}

export default Dashboard;
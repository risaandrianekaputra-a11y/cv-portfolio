import { Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";

function Navbar() {
  const { data } = usePortfolio();

  return (
    <nav className="navbar">
      <div className="container nav-container">

        <Link
          to="/"
          className="logo"
        >
          {data.profile.name}
        </Link>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <Link
          to="/admin"
          className="admin-button"
        >
          Admin
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
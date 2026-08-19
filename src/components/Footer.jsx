import { usePortfolio } from "../context/PortfolioContext";

function Footer() {
  const { data } = usePortfolio();

  return (
    <footer className="footer">

      <div className="container">

        <p>
          © {new Date().getFullYear()}{" "}
          {data.profile.name}.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
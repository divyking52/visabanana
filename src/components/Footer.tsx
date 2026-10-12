import { destinations } from "../data/destinations";

const popular = ["ae", "vn", "tr", "jp"].map((code) => destinations.find((d) => d.code === code)!);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/visabanana-logo.png" alt="VisaBanana" className="footer-logo" />
          <p className="muted">
            Apply for tourist visas online to the USA, UAE, Schengen, Japan, Vietnam, China and 50+ countries.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#why-us">Why us</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Popular visas</h4>
          <ul>
            {popular.map((d) => (
              <li key={d.code}>
                <a href="#destinations">{d.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            <li>
              <a href="https://www.visabanana.com/">Sign up / Log in</a>
            </li>
            <li>
              <a href="https://www.visabanana.com/">Start application</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="muted small">© {new Date().getFullYear()} VisaBanana. All rights reserved.</p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";

const links = [
  { href: "#destinations", label: "Destinations" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-us", label: "Why us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-bar">
        <a href="#top" className="brand" aria-label="VisaBanana home">
          <img src="https://cdn.storebox.ai/media/08a90ad3-d492-4026-9b81-4124cb68e5fe/a4b3c724-6f83-4c50-a61a-80ff8411a781/visabanana-logo.png" alt="VisaBanana" />
        </a>

        <nav className="desktop-nav" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="https://www.visabanana.com/" className="btn btn-primary btn-sm desktop-only">
            Sign up / Log in
          </a>
          <button
            type="button"
            className={`menu-toggle${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="mobile-link" onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="https://www.visabanana.com/" className="btn btn-primary" onClick={close}>
          Sign up / Log in
        </a>
      </div>
    </header>
  );
}

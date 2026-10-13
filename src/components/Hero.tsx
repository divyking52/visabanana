import { FormEvent, useState } from "react";
import { destinations, findDestination } from "../data/destinations";

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
};

const polaroids = [
  { code: "ch", label: "Switzerland", tilt: -6, speed: -0.06 },
  { code: "ke", label: "Kenya", tilt: 2, speed: 0.1 },
  { code: "sc", label: "Seychelles", tilt: 5, speed: -0.03 },
];

const feedItems = destinations.slice(0, 12);

export default function Hero({ query, onQueryChange }: Props) {
  const [draft, setDraft] = useState(query);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onQueryChange(draft.trim());
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-video" aria-hidden="true">
        <video
          className="hero-video-el"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://cdn.storebox.ai/media/08a90ad3-d492-4026-9b81-4124cb68e5fe/f1f3a775-660b-4902-8b21-2cf43f227bb8/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-shade" />
      </div>
      <div className="hero-blob hero-blob-a" data-parallax="-0.15" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" data-parallax="0.2" aria-hidden="true" />
      <div className="container hero-grid" data-hero-exit>
        <div className="hero-copy">
          <span className="chip chip-on-media">Trusted by 50,000+ travelers · 4.9★ on Google</span>
          <h1>
            Your visa, <em>Sorted!!!</em>
          </h1>
          <p className="lead">
            Apply your visas in minutes — we handle the paperwork while you pack.
          </p>

          <form className="search" onSubmit={submit} role="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                onQueryChange(e.target.value);
              }}
              placeholder="Where to? Try France, Dubai ..."
              aria-label="Search destinations"
            />
            <button type="submit" className="btn btn-primary">
              Find visas →
            </button>
          </form>

          <ul className="checks">
            <li>No hidden fees</li>
            <li>Free resubmission assistance</li>
            <li>Expert review</li>
          </ul>

          <div className="hero-actions">
            <a href="#destinations" className="btn btn-primary">
              Start application →
            </a>
            <a href="#how-it-works" className="btn btn-ghost">
              How it works
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="polaroids">
            {polaroids.map((p) => {
              const d = findDestination(p.code);
              return (
                <figure
                  key={p.code}
                  className="polaroid"
                  data-parallax={p.speed}
                  style={{ transform: `rotate(${p.tilt}deg)` }}
                >
                  <img src={d.image} alt={`Tourist visa to ${d.name}`} loading="eager" />
                  <figcaption>{p.label}</figcaption>
                </figure>
              );
            })}
          </div>

          <div className="feed-card">
            <div className="feed-head">
              <div>
                <p className="feed-kicker">Fresh off the shelf</p>
                <p className="feed-title">
                  <strong>50,247</strong> travelers · <strong>12,438</strong> reviews
                </p>
              </div>
              <span className="live-dot">Live</span>
            </div>
            <div className="feed-window">
              <ul className="feed-track">
                {[...feedItems, ...feedItems].map((d, i) => (
                  <li key={`${d.code}-${i}`} className="feed-row">
                    <img src={d.flag} alt="" />
                    <div>
                      <p className="feed-name">{d.name}</p>
                      <p className="feed-sub">{d.note}</p>
                    </div>
                    <span className="feed-count">{d.processed} visas processed</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

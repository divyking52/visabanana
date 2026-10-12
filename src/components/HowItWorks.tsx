import { useEffect, useRef, useState, type CSSProperties } from "react";
import { destinations } from "../data/destinations";

const steps = [
  {
    title: "Choose Destination",
    text: "Pick from 50+ destinations. Filter by visa type and find exactly the right option for your trip.",
    meta: `Browse ${destinations.length} countries`,
    art: "destination" as const,
  },
  {
    title: "Upload Your Documents",
    text: "Send your documents through our secure portal. Everything is protected with AES-256 encryption.",
    meta: "Secure upload",
    art: "upload" as const,
  },
  {
    title: "Secure Payment",
    text: "Pay with confidence. Every transfer is secured end-to-end with TLS 1.3 + AES-256 encryption.",
    meta: "No hidden fees",
    art: "payment" as const,
  },
  {
    title: "Receive Your Visa",
    text: "Your visa is issued and sent to you. If an embassy rejects your documents, we refile at zero extra cost.",
    meta: "Free resubmission",
    art: "visa" as const,
  },
];

const ART_MS = 4500;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(Math.max(n, min), max);
}

/** Scrub CSS keyframes by freezing the timeline at `progress` (0–1). */
function scrubStyle(progress: number): CSSProperties {
  return {
    animationPlayState: "paused",
    animationDelay: `${(-(clamp(progress) * ART_MS) / 1000).toFixed(3)}s`,
  };
}

function StepArtwork({ kind, progress }: { kind: (typeof steps)[number]["art"]; progress: number }) {
  const s = scrubStyle(progress);

  if (kind === "destination") {
    return (
      <svg className="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">
        <circle className="art-orbit" cx="140" cy="82" r="54" style={s} />
        <circle className="art-globe" cx="140" cy="82" r="40" style={s} />
        <path
          className="art-meridian"
          d="M140 42c14 12 22 28 22 40s-8 28-22 40c-14-12-22-28-22-40s8-28 22-40Z"
          style={s}
        />
        <path className="art-lat" d="M102 70h76M100 82h80M104 96h72" style={s} />
        <g className="art-pin" style={s}>
          <path d="M188 48c0-8.3 6.7-15 15-15s15 6.7 15 15c0 11-15 24-15 24S188 59 188 48Z" />
          <circle cx="203" cy="48" r="5.5" fill="#fff" />
        </g>
        <path className="art-trail" d="M92 118c28 10 68 14 108 4" style={s} />
        <circle className="art-dot" cx="92" cy="118" r="4" style={s} />
        <circle className="art-dot art-dot-b" cx="200" cy="122" r="4" style={s} />
      </svg>
    );
  }

  if (kind === "upload") {
    return (
      <svg className="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">
        <rect className="art-tray" x="78" y="96" width="124" height="28" rx="10" style={s} />
        <g className="art-doc art-doc-a" style={s}>
          <rect x="108" y="38" width="64" height="78" rx="8" />
          <path d="M120 58h40M120 70h34M120 82h28" />
        </g>
        <g className="art-doc art-doc-b" style={s}>
          <rect x="128" y="28" width="64" height="78" rx="8" />
          <path d="M140 48h40M140 60h34M140 72h28" />
        </g>
        <path className="art-arrow" d="M140 118v-22m0 0-8 8m8-8 8 8" style={s} />
        <circle className="art-pulse" cx="140" cy="118" r="10" style={s} />
      </svg>
    );
  }

  if (kind === "payment") {
    return (
      <svg className="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">
        <rect className="art-card" x="78" y="44" width="124" height="78" rx="14" style={s} />
        <rect className="art-stripe" x="78" y="64" width="124" height="16" style={s} />
        <rect className="art-chip" x="94" y="92" width="28" height="20" rx="4" style={s} />
        <path className="art-card-line" d="M140 100h46M140 110h32" style={s} />
        <g className="art-lock" style={s}>
          <rect x="188" y="36" width="36" height="28" rx="8" />
          <path d="M196 36v-8a10 10 0 0 1 20 0v8" />
          <circle cx="206" cy="50" r="3.5" fill="#fff" />
        </g>
        <path className="art-check" d="M98 128l10 10 22-24" style={s} />
      </svg>
    );
  }

  return (
    <svg className="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">
      <rect className="art-passport" x="86" y="34" width="88" height="100" rx="12" style={s} />
      <circle className="art-seal" cx="130" cy="78" r="22" style={s} />
      <path className="art-seal-inner" d="M130 64v28M116 78h28" style={s} />
      <path className="art-pass-lines" d="M102 112h56M102 122h40" style={s} />
      <g className="art-stamp" style={s}>
        <rect x="168" y="52" width="58" height="58" rx="12" />
        <path d="M182 81l10 10 20-22" />
        <circle cx="197" cy="81" r="20" />
      </g>
      <path className="art-confetti art-c1" d="M72 48l6 2-2 6-6-2z" style={s} />
      <path className="art-confetti art-c2" d="M236 40l5 4-4 5-5-4z" style={s} />
      <path className="art-confetti art-c3" d="M248 96l6 1-1 6-6-1z" style={s} />
    </svg>
  );
}

export default function HowItWorks() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [localT, setLocalT] = useState(0);

  useEffect(() => {
    const scrub = scrubRef.current;
    if (!scrub) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const progressFor = () => {
      const rect = scrub.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      return clamp(-rect.top / travel);
    };

    const apply = (p: number) => {
      if (reduceMotion) {
        setActive(steps.length - 1);
        setLocalT(1);
        return;
      }

      const segment = 1 / steps.length;
      const index = Math.min(steps.length - 1, Math.floor(p / segment));
      const t = clamp((p - index * segment) / segment);
      setActive(index);
      setLocalT(t);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      apply(progressFor());
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToStep = (index: number) => {
    const scrub = scrubRef.current;
    if (!scrub) return;
    const vh = window.innerHeight;
    const top = scrub.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(scrub.offsetHeight - vh, 1);
    const segment = 1 / steps.length;
    const target = top + (index * segment + segment * 0.35) * travel;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const current = steps[active];

  return (
    <section className="section how" id="how-it-works">
      <div className="how-scrub" ref={scrubRef}>
        <div className="how-sticky">
          <div className="container">
            <p className="eyebrow" data-reveal>
              How it works
            </p>
            <h2 className="section-title" data-reveal>
              Four steps, <em>from search to stamp.</em>
            </h2>

            <div className="steps-grid">
              <ol className="step-list">
                {steps.map((step, i) => {
                  const fill =
                    i < active ? 100 : i === active ? Math.round(localT * 1000) / 10 : 0;
                  return (
                    <li key={step.title}>
                      <button
                        type="button"
                        className={`step-item${i === active ? " active" : ""}${i < active ? " done" : ""}`}
                        aria-pressed={i === active}
                        onClick={() => scrollToStep(i)}
                      >
                        <span className="step-label">Step - {String(i + 1).padStart(2, "0")}</span>
                        <span className="step-title">{step.title}</span>
                        <span className="step-rail" aria-hidden="true">
                          <span className="step-rail-fill" style={{ width: `${fill}%` }} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="step-panel card">
                <div className="step-art-wrap" key={active}>
                  <StepArtwork kind={current.art} progress={localT} />
                </div>
                <p className="step-count">
                  Step {active + 1} of {steps.length}
                </p>
                <h3 className="step-heading">{current.title}</h3>
                <p className="muted step-text">{current.text}</p>
                <span className="chip chip-soft">{current.meta}</span>
                <div className="progress" aria-hidden="true">
                  <div className="progress-bar" style={{ width: `${Math.round(localT * 1000) / 10}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

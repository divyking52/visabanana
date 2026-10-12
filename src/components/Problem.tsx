import { useEffect, useRef } from "react";

// Labels and percentages mirror the template's layout. The percentages are placeholders
// until VisaBanana supplies its own figures; the labels describe problems its site covers.
const left = [
  { label: "Documents rejected by the embassy", pct: 34 },
  { label: "Incomplete supporting documents", pct: 28 },
  { label: "Missed appointment windows", pct: 19 },
];
const right = [
  { label: "Missed visa policy changes", pct: 14 },
  { label: "Wrong visa type for the trip", pct: 9 },
  { label: "Incorrect application details", pct: 11 },
];

// Pop order: alternate left/right so cards fan out from the 7/10 one by one.
const POP_ORDER = [
  { side: "left" as const, row: 0 },
  { side: "right" as const, row: 0 },
  { side: "left" as const, row: 1 },
  { side: "right" as const, row: 1 },
  { side: "left" as const, row: 2 },
  { side: "right" as const, row: 2 },
];

function clamp(n: number, min = 0, max = 1) {
  return Math.min(Math.max(n, min), max);
}

function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

export default function Problem() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrub = scrubRef.current;
    if (!scrub) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileMq = window.matchMedia("(max-width: 1000px)");
    const items = [...scrub.querySelectorAll<HTMLElement>("[data-pop]")];
    const score = scoreRef.current;

    const apply = (progress: number, isMobile: boolean) => {
      const scoreT = clamp(easeOutBack(clamp(progress / (isMobile ? 0.18 : 0.12))));
      if (score) {
        score.style.opacity = scoreT.toFixed(3);
        score.style.transform = `scale(${(0.68 + 0.32 * scoreT).toFixed(3)})`;
      }

      const cardStart = isMobile ? 0.12 : 0.1;
      const slot = isMobile ? 0.12 : 0.13;
      const popDuration = isMobile ? 0.14 : 0.1;
      // Mobile stacks vertically — pop up from the score, not sideways (avoids overflow).
      const fromXAmt = isMobile ? 0 : 220;
      const fromYAmt = isMobile ? 56 : 48;

      for (const el of items) {
        const i = Number(el.dataset.pop);
        const start = cardStart + i * slot;
        const local = clamp((progress - start) / popDuration);
        const raw = easeOutBack(local);
        const t = clamp(raw);
        const bounce = clamp(raw, 0, 1.12);
        const towardCenter = el.dataset.side === "right" ? -1 : 1;
        const row = Number(el.dataset.row) || 0;
        const fromX = towardCenter * fromXAmt;
        const fromY = isMobile ? fromYAmt : (1 - row) * fromYAmt;
        const x = fromX * (1 - bounce);
        const y = fromY * (1 - bounce);
        const scale = 0.2 + 0.8 * bounce;
        el.style.opacity = t.toFixed(3);
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      }
    };

    if (reduceMotion) {
      apply(1, mobileMq.matches);
      return;
    }

    // Scroll-linked in both directions: progress rises going down, reverses going back up.
    const progressFor = (isMobile: boolean) => {
      const rect = scrub.getBoundingClientRect();
      const vh = window.innerHeight;

      if (!isMobile) {
        const travel = Math.max(rect.height - vh, 1);
        return clamp(-rect.top / travel);
      }

      // Mobile (no tall sticky): map section travel through the viewport.
      const start = vh * 0.85;
      const end = vh * 0.2 - rect.height * 0.35;
      return clamp((start - rect.top) / (start - end));
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const isMobile = mobileMq.matches;
      apply(progressFor(isMobile), isMobile);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobileMq.addEventListener?.("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobileMq.removeEventListener?.("change", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section problem" id="problem">
      <div className="problem-scrub" ref={scrubRef}>
        <div className="problem-sticky">
          <div className="container">
            <div className="problem-head">
              <p className="problem-eyebrow">The problem we solve</p>
              <h2 className="problem-title">
                Without specialist <em>guidance</em>, the wrong move costs you months.
              </h2>
            </div>

            <div className="problem-stage">
              <div className="problem-column">
                {left.map((item, row) => {
                  const popIndex = POP_ORDER.findIndex((p) => p.side === "left" && p.row === row);
                  return (
                    <div
                      key={item.label}
                      data-side="left"
                      data-row={row}
                      data-pop={popIndex}
                      className="problem-item"
                    >
                      <p className="problem-label">{item.label}</p>
                      <p className="problem-pct">{item.pct}%</p>
                    </div>
                  );
                })}
              </div>

              <div className="problem-score-wrap" ref={scoreRef}>
                <div className="problem-rings" aria-hidden="true">
                  <span className="problem-ring problem-ring-a" />
                  <span className="problem-ring problem-ring-b" />
                  <span className="problem-ring problem-ring-c" />
                </div>
                <div className="problem-score-card">
                  <p className="problem-score">
                    7<span>/10</span>
                  </p>
                  <p className="problem-score-note">Could be avoided</p>
                </div>
              </div>

              <div className="problem-column">
                {right.map((item, row) => {
                  const popIndex = POP_ORDER.findIndex((p) => p.side === "right" && p.row === row);
                  return (
                    <div
                      key={item.label}
                      data-side="right"
                      data-row={row}
                      data-pop={popIndex}
                      className="problem-item"
                    >
                      <p className="problem-label">{item.label}</p>
                      <p className="problem-pct">{item.pct}%</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="problem-cta" data-scroll-fade>
          <h3>We fix it before it becomes a refusal.</h3>
          <a href="#destinations" className="btn btn-primary">
            Start assessment
          </a>
        </div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { destinations, formatINR, regions, Region } from "../data/destinations";

const PAGE_SIZE = 9;

type Props = {
  query: string;
};

export default function Destinations({ query }: Props) {
  const [region, setRegion] = useState<Region>("All");
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesRegion = region === "All" || d.region === region;
      const matchesQuery =
        q === "" || d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [region, query]);

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const gridKey = `${region}|${query}|${showAll}|${visible.length}`;

  // Scroll in → stagger reveal. Scroll out → reverse (class removed).
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = [...grid.querySelectorAll<HTMLElement>("[data-grid-item]")];

    if (reduceMotion || !("IntersectionObserver" in window)) {
      cards.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("in", entry.isIntersecting);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    cards.forEach((el) => {
      el.classList.remove("in");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [gridKey]);

  return (
    <section className="section" id="destinations">
      <div className="container">
        <p className="eyebrow" data-reveal>
          Pick a destination
        </p>
        <div className="section-head">
          <h2 className="section-title" data-reveal>
            Fresh <em>off the</em> shelf
          </h2>
          <div className="tabs" role="tablist" aria-label="Filter by region">
            {regions.map((r) => (
              <button
                key={r}
                type="button"
                role="tab"
                aria-selected={region === r}
                className={`tab${region === r ? " active" : ""}`}
                onClick={() => {
                  setRegion(r);
                  setShowAll(false);
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <p className="muted result-count">
          {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
          {query.trim() ? ` matching “${query.trim()}”` : ""}
        </p>

        <div ref={gridRef} className="dest-grid">
          {visible.map((d, i) => (
            <article
              key={`${region}-${showAll}-${d.code}`}
              className="card dest-card"
              data-grid-item
              style={{ ["--i" as string]: i % 9 }}
            >
              <div className="dest-media">
                <img src={d.image} alt={`Tourist visa to ${d.name} — ${d.tagline}`} loading="lazy" />
                <span className="badge">{d.processed} visas processed</span>
              </div>
              <div className="dest-body">
                <div className="dest-title">
                  <img className="flag" src={d.flag} alt="" />
                  <div>
                    <h3>{d.name}</h3>
                    <p className="muted">{d.tagline}</p>
                  </div>
                </div>
                <dl className="dest-meta">
                  <div>
                    <dt>From</dt>
                    <dd>{formatINR(d.price)}</dd>
                  </div>
                  <div>
                    <dt>Validity</dt>
                    <dd>{d.validity}</dd>
                  </div>
                  <div>
                    <dt>Entry</dt>
                    <dd>{d.entry}</dd>
                  </div>
                  <div>
                    <dt>Processing</dt>
                    <dd>{d.note}</dd>
                  </div>
                </dl>
                <a href="https://www.visabanana.com/" className="btn btn-primary btn-block">
                  Start application →
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty">No destinations match that search. Try another country or region.</p>
        )}

        {!showAll && filtered.length > PAGE_SIZE && (
          <div className="center">
            <button type="button" className="btn btn-ghost" onClick={() => setShowAll(true)}>
              Show all {filtered.length} destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { useInView } from "../hooks";

const items = [
  {
    kicker: "Security",
    value: "Bank-grade",
    accent: "AES-256",
    text: "Every document and transfer is secured end-to-end with TLS 1.3 + AES-256 encryption.",
  },
  {
    kicker: "Reviews",
    value: "4.9",
    accent: "/ 5",
    text: "Rated by 12,000+ verified travellers on Google, Trustpilot and in-app — no incentivised reviews.",
  },
  {
    kicker: "Guarantee",
    value: "Resubmission",
    accent: "Free",
    text: "If your documents are rejected by the embassy, we refile at zero extra cost — every single time.",
  },
  {
    kicker: "Support",
    value: "24 / 7",
    accent: "",
    text: "Reach our visa experts via live chat, email, or phone. Average first response under 4 minutes.",
  },
];

export default function Trust() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="section" id="why-us">
      <div className="container">
        <p className="eyebrow" data-reveal>Why people actually stick around</p>
        <h2 className="section-title" data-reveal>
          Built for <em>real</em> travellers, not paperwork.
        </h2>

        <div ref={ref} className="trust-grid">
          {items.map((item, i) => (
            <article
              key={item.kicker}
              className={`card trust-card reveal${inView ? " in" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="card-kicker">{item.kicker}</p>
              <p className="trust-value">
                {item.value} {item.accent && <em>{item.accent}</em>}
              </p>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { findDestination, formatINR } from "../data/destinations";
import { useInView } from "../hooks";

const plans = [
  { code: "vn", featured: false },
  { code: "ae", featured: true },
  { code: "gb", featured: false },
];

const perks = ["No hidden fees", "Expert review", "Free resubmission assistance"];

export default function Pricing() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <p className="eyebrow" data-reveal>Pricing</p>
        <h2 className="section-title" data-reveal>
          Transparent fees, <em>no surprises.</em>
        </h2>

        <div ref={ref} className="pricing-grid">
          {plans.map((plan, i) => {
            const d = findDestination(plan.code);
            return (
              <article
                key={plan.code}
                className={`card price-card${plan.featured ? " featured" : ""} reveal${inView ? " in" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="card-kicker">{d.region} · {d.entry}</p>
                <h3 className="price-name">{d.name}</h3>
                <p className="price">
                  <span>{formatINR(d.price)}</span>
                  <small>/ application</small>
                </p>
                <p className="muted">{d.tagline}</p>
                <ul className="check-list">
                  <li>Validity: {d.validity}</li>
                  <li>Processing: {d.note}</li>
                  {perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a
                  href="https://www.visabanana.com/"
                  className={`btn btn-block ${plan.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  Get started
                </a>
              </article>
            );
          })}
        </div>
        <p className="muted small center">
          Prices are per application, in INR, with no hidden fees.
        </p>
      </div>
    </section>
  );
}

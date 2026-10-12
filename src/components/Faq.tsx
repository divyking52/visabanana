import { useState } from "react";

const faqs = [
  {
    q: "Are there any hidden fees?",
    a: "No. Our fees are shown before you apply and there are no hidden charges. Government fees are listed on each destination so you know the full cost up front.",
  },
  {
    q: "What if my documents are rejected by the embassy?",
    a: "We refile at zero extra cost, every single time. Free resubmission assistance is part of the service.",
  },
  {
    q: "Who checks my application?",
    a: "Every application goes through expert review before it is submitted, so mistakes are caught early.",
  },
  {
    q: "Is my personal data safe?",
    a: "Every document and transfer is secured end-to-end with TLS 1.3 + AES-256 encryption.",
  },
  {
    q: "How quickly can I get help?",
    a: "Our visa experts are available 24/7 by live chat, email or phone, with an average first response under 4 minutes.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <p className="eyebrow" data-reveal>FAQ</p>
        <h2 className="section-title" data-reveal>
          Things you might <em>be wondering.</em>
        </h2>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq-item${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className="faq-a"
                >
                  <div>
                    <p className="muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="center muted faq-foot">
          Still not sure? <a href="#destinations" className="text-link">Browse destinations</a> to compare fees and processing times.
        </p>
      </div>
    </section>
  );
}

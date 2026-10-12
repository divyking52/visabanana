import { PointerEvent, useEffect, useRef } from "react";

export default function GlobeCta() {
  const globeRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const drag = useRef<{ startX: number; startOffset: number } | null>(null);
  const autoRotate = useRef(true);

  // The texture is 230% of the globe width and repeats horizontally, so the
  // offset is kept in pixels and wrapped modulo one texture width for a seamless spin.
  const textureWidth = (el: HTMLDivElement) => el.clientWidth * 2.3 || 1;

  // Continuously rotate the globe texture while the user is not dragging it.
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const el = globeRef.current;
      if (el) {
        if (autoRotate.current && !drag.current) {
          offset.current = (offset.current + 0.4) % textureWidth(el);
        }
        el.style.backgroundPosition = `${-offset.current}px 50%`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = { startX: e.clientX, startOffset: offset.current };
    autoRotate.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const el = e.currentTarget;
    const delta = e.clientX - drag.current.startX;
    offset.current = (((drag.current.startOffset - delta) % textureWidth(el)) + textureWidth(el)) % textureWidth(el);
  };

  const endDrag = () => {
    drag.current = null;
    autoRotate.current = true;
  };

  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-copy">
            <p className="eyebrow light">Get started</p>
            <h2 className="section-title light">
              Your visa, <em>sorted!!!</em>
            </h2>
            <p className="cta-lead">
              Apply your visas in minutes — we handle the paperwork while you pack. Pick a destination and start your
              application today.
            </p>
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-primary">
                Find visas →
              </a>
              <a href="#faq" className="btn btn-light">
                Read the FAQ
              </a>
            </div>
            <ul className="checks light">
              <li>Expert review</li>
              <li>No hidden fees</li>
              <li>Free resubmission assistance</li>
            </ul>
          </div>

          <div
            ref={globeRef}
            className="globe"
            data-parallax="0.08"
            role="img"
            aria-label="Drag to spin the globe"
            style={{ backgroundImage: "url(/images/globe.jpg)" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          />
        </div>
      </div>
    </section>
  );
}

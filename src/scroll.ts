import { useEffect } from "react";

function clamp(n: number, min = 0, max = 1) {
  return Math.min(Math.max(n, min), max);
}

// Scroll-triggered reveals and parallax layers for the whole page.
// - [data-reveal] gains the `in` class once it enters the viewport.
// - [data-parallax="<speed>"] is translated vertically vs viewport centre.
// - [data-scroll-fade] fades/rises with scroll as it enters (and softens on exit).
// - [data-hero-exit] on the hero stage: scales, fades and drifts as you leave the hero.
export function useScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const parallax = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    const heroExit = document.querySelector<HTMLElement>("[data-hero-exit]");
    const heroSection = document.querySelector<HTMLElement>(".hero");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      if (heroExit) {
        heroExit.style.opacity = "1";
        heroExit.style.transform = "none";
      }
      document.querySelectorAll<HTMLElement>("[data-scroll-fade]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      if (reduceMotion) return;
    }

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      const narrow = window.matchMedia("(max-width: 1000px)").matches;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          }
        },
        {
          threshold: narrow ? 0.08 : 0.15,
          rootMargin: narrow ? "0px 0px -4% 0px" : "0px 0px -8% 0px",
        },
      );
      reveals.forEach((el) => observer?.observe(el));
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      // Hero → next section: content drifts up, softens and scales as you leave.
      if (heroExit && heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const travel = Math.max(rect.height * 0.7, 1);
        const p = clamp(-rect.top / travel);
        const opacity = 1 - p * 0.85;
        const y = p * -72;
        const scale = 1 - p * 0.06;
        heroExit.style.opacity = opacity.toFixed(3);
        heroExit.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        heroSection.style.setProperty("--hero-exit", p.toFixed(3));
      }

      // Re-query so late-mounted nodes (and HMR) stay wired.
      for (const el of document.querySelectorAll<HTMLElement>("[data-scroll-fade]")) {
        const rect = el.getBoundingClientRect();
        // Rise + fade in as it enters. Hold while on screen. Soft fade only when fully past.
        const enter = clamp((vh * 0.88 - rect.top) / (vh * 0.4));
        const leave = rect.bottom < 0 ? clamp(1 + rect.bottom / (vh * 0.25)) : 1;
        const p = Math.min(enter, leave);
        el.style.opacity = p.toFixed(3);
        el.style.transform = `translate3d(0, ${((1 - enter) * 64).toFixed(1)}px, 0) scale(${(0.94 + 0.06 * enter).toFixed(3)})`;
      }

      for (const el of parallax) {
        const speed = Number(el.dataset.parallax) || 0;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > vh + 300) continue;
        const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
        el.style.setProperty("translate", `0 ${offset.toFixed(1)}px`);
      }
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

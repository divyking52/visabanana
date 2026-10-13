import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const cssPath = path.join(root, "src", "styles.css");
const outPath = path.join(root, "visabanana.html");

let css = fs.readFileSync(cssPath, "utf8");
// Point absolute public assets at ./public so the file works from the repo root
css = css.replace(/url\(\/(?!\/)/g, "url(./public/");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VisaBanana — Apply for Visa Online | Fast, Hassle-Free Visa Services for Indians</title>
  <meta name="description" content="Apply for tourist visa online to USA, UAE, Schengen, Japan, Vietnam, China and 50+ countries. Expert-reviewed applications, transparent pricing, no hidden fees. Trusted by 50,000+ Indian travelers." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Libre+Caslon+Condensed:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap" rel="stylesheet" />
  <link rel="icon" href="./public/visabanana-logo.png" />
  <style>
${css}
  </style>
</head>
<body>
  <header class="site-header" id="site-header">
    <div class="header-bar">
      <a href="#top" class="brand" aria-label="VisaBanana home">
        <img src="./public/visabanana-logo.png" alt="VisaBanana" />
      </a>
      <nav class="desktop-nav" aria-label="Main">
        <a href="#destinations" class="nav-link">Destinations</a>
        <a href="#how-it-works" class="nav-link">How it works</a>
        <a href="#why-us" class="nav-link">Why us</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>
      <div class="header-actions">
        <a href="https://www.visabanana.com/" class="btn btn-primary btn-sm desktop-only">Sign up / Log in</a>
        <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <a href="#destinations" class="mobile-link">Destinations</a>
      <a href="#how-it-works" class="mobile-link">How it works</a>
      <a href="#why-us" class="mobile-link">Why us</a>
      <a href="#pricing" class="mobile-link">Pricing</a>
      <a href="#faq" class="mobile-link">FAQ</a>
      <a href="https://www.visabanana.com/" class="btn btn-primary">Sign up / Log in</a>
    </div>
  </header>

  <main>
    <section class="hero" id="top">
      <div class="hero-video" aria-hidden="true">
        <video class="hero-video-el" autoplay muted loop playsinline preload="metadata">
          <source src="./public/hero-bg.mp4" type="video/mp4" />
        </video>
        <div class="hero-video-shade"></div>
      </div>
      <div class="hero-blob hero-blob-a" data-parallax="-0.15" aria-hidden="true"></div>
      <div class="hero-blob hero-blob-b" data-parallax="0.2" aria-hidden="true"></div>
      <div class="container hero-grid" data-hero-exit>
        <div class="hero-copy">
          <span class="chip chip-on-media">Trusted by 50,000+ travelers · 4.9★ on Google</span>
          <h1>Your visa, <em>Sorted!!!</em></h1>
          <p class="lead">Apply your visas in minutes — we handle the paperwork while you pack.</p>
          <form class="search" id="hero-search" role="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"></circle>
              <path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <input id="search-input" type="search" placeholder="Where to? Try France, Dubai ..." aria-label="Search destinations" />
            <button type="submit" class="btn btn-primary">Find visas →</button>
          </form>
          <ul class="checks">
            <li>No hidden fees</li>
            <li>Free resubmission assistance</li>
            <li>Expert review</li>
          </ul>
          <div class="hero-actions">
            <a href="#destinations" class="btn btn-primary">Start application →</a>
            <a href="#how-it-works" class="btn btn-ghost">How it works</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="polaroids" id="polaroids"></div>
          <div class="feed-card">
            <div class="feed-head">
              <div>
                <p class="feed-kicker">Fresh off the shelf</p>
                <p class="feed-title"><strong>50,247</strong> travelers · <strong>12,438</strong> reviews</p>
              </div>
              <span class="live-dot">Live</span>
            </div>
            <div class="feed-window">
              <ul class="feed-track" id="feed-track"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section problem" id="problem">
      <div class="problem-scrub" id="problem-scrub">
        <div class="problem-sticky">
          <div class="container">
            <div class="problem-head">
              <p class="problem-eyebrow">The problem we solve</p>
              <h2 class="problem-title">Without specialist <em>guidance</em>, the wrong move costs you months.</h2>
            </div>
            <div class="problem-stage">
              <div class="problem-column" id="problem-left"></div>
              <div class="problem-score-wrap" id="problem-score">
                <div class="problem-rings" aria-hidden="true">
                  <span class="problem-ring problem-ring-a"></span>
                  <span class="problem-ring problem-ring-b"></span>
                  <span class="problem-ring problem-ring-c"></span>
                </div>
                <div class="problem-score-card">
                  <p class="problem-score">7<span>/10</span></p>
                  <p class="problem-score-note">Could be avoided</p>
                </div>
              </div>
              <div class="problem-column" id="problem-right"></div>
            </div>
            <div class="problem-cta" data-scroll-fade id="problem-cta">
              <h3>We fix it before it becomes a refusal.</h3>
              <a href="#destinations" class="btn btn-primary">Start assessment</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="why-us">
      <div class="container">
        <p class="eyebrow" data-reveal>Why people actually stick around</p>
        <h2 class="section-title" data-reveal>Built for <em>real</em> travellers, not paperwork.</h2>
        <div class="trust-grid" id="trust-grid"></div>
      </div>
    </section>

    <section class="section" id="destinations">
      <div class="container">
        <p class="eyebrow" data-reveal>Pick a destination</p>
        <div class="section-head">
          <h2 class="section-title" data-reveal>Fresh <em>off the</em> shelf</h2>
          <div class="tabs" role="tablist" aria-label="Filter by region" id="region-tabs"></div>
        </div>
        <p class="muted result-count" id="result-count"></p>
        <div class="dest-grid" id="dest-grid"></div>
        <p class="empty" id="dest-empty" hidden>No destinations match that search. Try another country or region.</p>
        <div class="center" id="show-all-wrap" hidden>
          <button type="button" class="btn btn-ghost" id="show-all-btn">Show all destinations</button>
        </div>
      </div>
    </section>

    <section class="section how" id="how-it-works">
      <div class="how-scrub" id="how-scrub">
        <div class="how-sticky">
          <div class="container">
            <p class="eyebrow" data-reveal>How it works</p>
            <h2 class="section-title" data-reveal>Four steps, <em>from search to stamp.</em></h2>
            <div class="steps-grid">
              <ol class="step-list" id="step-list"></ol>
              <div class="step-panel card" id="step-panel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid" id="stats-grid"></div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="container">
        <p class="eyebrow" data-reveal>Pricing</p>
        <h2 class="section-title" data-reveal>Transparent fees, <em>no surprises.</em></h2>
        <div class="pricing-grid" id="pricing-grid"></div>
        <p class="muted small center">Prices are per application, in INR, with no hidden fees.</p>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container narrow">
        <p class="eyebrow" data-reveal>FAQ</p>
        <h2 class="section-title" data-reveal>Things you might <em>be wondering.</em></h2>
        <div class="faq-list" id="faq-list"></div>
        <p class="center muted faq-foot">Still not sure? <a href="#destinations" class="text-link">Browse destinations</a> to compare fees and processing times.</p>
      </div>
    </section>

    <section class="section alerts-section">
      <div class="container">
        <div class="card alerts-card">
          <div>
            <span class="chip chip-soft">Visa policy alerts · weekly</span>
            <h2 class="section-title small-title">Never miss a policy change for the country you're <em>flying to.</em></h2>
            <p class="muted">Embassies update visa rules with no warning. Subscribe and we'll email you the moment something changes for a destination you've applied to or saved.</p>
          </div>
          <div id="alerts-mount"></div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-copy">
            <p class="eyebrow light">Get started</p>
            <h2 class="section-title light">Your visa, <em>sorted!!!</em></h2>
            <p class="cta-lead">Apply your visas in minutes — we handle the paperwork while you pack. Pick a destination and start your application today.</p>
            <div class="hero-actions">
              <a href="#destinations" class="btn btn-primary">Find visas →</a>
              <a href="#faq" class="btn btn-light">Read the FAQ</a>
            </div>
            <ul class="checks light">
              <li>Expert review</li>
              <li>No hidden fees</li>
              <li>Free resubmission assistance</li>
            </ul>
          </div>
          <div class="globe" id="globe" role="img" aria-label="Drag to spin the globe" style="background-image:url(./public/images/globe.jpg)"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <img src="./public/visabanana-logo.png" alt="VisaBanana" class="footer-logo" />
        <p class="muted">Apply for tourist visas online to the USA, UAE, Schengen, Japan, Vietnam, China and 50+ countries.</p>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#why-us">Why us</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Popular visas</h4>
        <ul id="footer-popular"></ul>
      </div>
      <div>
        <h4>Account</h4>
        <ul>
          <li><a href="https://www.visabanana.com/">Sign up / Log in</a></li>
          <li><a href="https://www.visabanana.com/">Start application</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <p class="muted small">© <span id="year"></span> VisaBanana. All rights reserved.</p>
    </div>
  </footer>

  <script>
(function () {
  "use strict";

  var ASSET = "./public";
  var PAGE_SIZE = 9;
  var ART_MS = 4500;

  var rows = [
    ["ae","Dubai (UAE)","Where Luxury Meets Desert","Middle East",7600,"30 Days","Single Entry","Fast processing","18.4k"],
    ["vn","Vietnam","Timeless Beauty","Asia",4074,"90 days","Single Entry","Fast processing","14.2k"],
    ["tr","Turkey","Where East Meets West","Middle East",6500,"30 Days","Single Entry","Fast processing","11.7k"],
    ["id","Indonesia","Bali & Beyond","Asia",4000,"30 Days","Single Entry","Fast processing","9.8k"],
    ["my","Malaysia","Petronas Towers & Street Food","Asia",500,"30 Days","Single Entry","Fast processing","8.6k"],
    ["lk","Sri Lanka","The Pearl of the Indian Ocean","Asia",1500,"30 Days","Single Entry","Fast processing","7.4k"],
    ["za","South Africa","Safaris, Cape Town & the Big Five","Africa",2500,"30 Days","Multiple Entry","Fast processing","2.6k"],
    ["hk","Hong Kong","Asia's World City","Asia",500,"30 Days","Single Entry","Fast processing","6.7k"],
    ["eg","Egypt","Pyramids, Pharaohs & the Nile","Africa",4500,"30 Days","Single Entry","Fast processing","4.8k"],
    ["ke","Kenya","Safari Capital of the World","Africa",4400,"90 Days","Single Entry","Fast processing","4.3k"],
    ["om","Oman","Arabia's Hidden Gem","Middle East",2800,"10 Days","Single Entry","Fast processing","5.1k"],
    ["uz","Uzbekistan","Silk Road Splendour","Asia",2800,"30 Days","Single Entry","Fast processing","3.1k"],
    ["ru","Russia","Palaces, Tundra & the Trans-Siberian","Europe",6400,"30 Days","Single Entry","Fast processing","3.4k"],
    ["az","Azerbaijan","The Land of Fire","Asia",3500,"30 Days","Single Entry","Fast processing","2.3k"],
    ["kh","Cambodia","Angkor Wat & Ancient Kingdoms","Asia",4100,"30 Days","Single Entry","Fast processing","5.9k"],
    ["bh","Bahrain","Pearl of the Arabian Gulf","Middle East",4000,"14 Days","Single Entry","Fast processing","3.7k"],
    ["qa","Qatar","The Jewel of the Gulf","Middle East",6099,"30 days per visit","Multiple Entry","Fast processing","6.2k"],
    ["us","United States","Land of Opportunity","Americas",40500,"6 Months","Multiple Entry","Earliest Interview Appointment","2.1k"],
    ["sc","Seychelles","Paradise Found in the Indian Ocean","Africa",2050,"30 Days","Single Entry","Fast processing","2.9k"],
    ["fr","France","Eiffel, Escargot & Élégance","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["at","Austria","Alps, Palaces & Waltz","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["be","Belgium","Chocolate, Chateaux & Charm","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["hr","Croatia","Adriatic Coast & Ancient Walls","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["cz","Czechia","Fairytale Spires of Prague","Europe",13200,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["dk","Denmark","Hygge, Harbours & Design","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["ee","Estonia","Medieval Towers, Baltic Charm","Europe",13260,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["fi","Finland","Lakes, Saunas & Northern Lights","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["de","Germany","Autobahns, Beer & Castles","Europe",13300,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["gr","Greece","Islands, Ruins & Aegean Blue","Europe",16700,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["hu","Hungary","Thermal Baths & Danube Views","Europe",13100,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["is","Iceland","Glaciers, Geysers & Fire","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["it","Italy","Pasta, Piazzas & La Dolce Vita","Europe",13450,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["lv","Latvia","Art Nouveau Riga, Baltic Shores","Europe",13210,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["lt","Lithuania","Baroque Vilnius & Amber Coast","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["lu","Luxembourg","Fairytale Castles, Grand Duchy","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["mt","Malta","Sunlit Islands, Ancient Fortresses","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["nl","Netherlands","Canals, Tulips & Windmills","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["no","Norway","Fjords, Peaks & Midnight Sun","Europe",3500,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["pl","Poland","Old Towns & Amber Trails","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["pt","Portugal","Tiled Streets & Atlantic Coast","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["sk","Slovakia","Castles of the Tatras","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["si","Slovenia","Alpine Lakes & Green Capital","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["es","Spain","Flamenco, Fiestas & Sun","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["se","Sweden","Archipelagos & Design Capital","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["ch","Switzerland","Alps, Watches & Chocolate","Europe",13400,"90 days","Single/Multiple Entry","Earliest VFS Appointment","7.3k"],
    ["gb","United Kingdom","Tea, History & The Thames","Europe",23000,"6 months","Multiple Entry","Earliest VFS Appointment","2.1k"],
    ["au","Australia","G'day, Kangaroos & Coral Reefs","Oceania",18000,"3 Months","Multiple Entry","Fast processing","2.1k"],
    ["nz","New Zealand","Hobbit Holes & Fiords","Oceania",28600,"6 Months","Multiple Entry","Fast processing","2.1k"],
    ["ca","Canada","Maple Syrup, Moose & Mountains","Americas",17490,"6 Months","Multiple Entry","Earliest VFS Appointment","5.5k"],
    ["cn","China","Ancient Wonder, Modern Marvel","Asia",10599,"30 Days","Single Entry","Fast processing","2.1k"],
    ["jp","Japan","Tradition Meets Tomorrow","Asia",3300,"30 Days","Single Entry","Earliest VFS Appointment","2.1k"]
  ];

  var pngCodes = { az:1, bh:1, qa:1 };
  var destinations = rows.map(function (r) {
    var code = r[0];
    return {
      code: code,
      name: r[1],
      tagline: r[2],
      region: r[3],
      price: r[4],
      validity: r[5],
      entry: r[6],
      note: r[7],
      processed: r[8],
      image: ASSET + "/images/destinations/" + code + (pngCodes[code] ? ".png" : ".jpg"),
      flag: ASSET + "/flags/" + code + ".png"
    };
  });

  var regions = ["All","Asia","Europe","Middle East","Africa","Americas","Oceania"];
  function formatINR(n) { return "₹" + n.toLocaleString("en-IN"); }
  function findDestination(code) {
    for (var i = 0; i < destinations.length; i++) if (destinations[i].code === code) return destinations[i];
    return destinations[0];
  }
  function clamp(n, min, max) {
    if (min == null) min = 0;
    if (max == null) max = 1;
    return Math.min(Math.max(n, min), max);
  }
  function easeOutBack(t) {
    var c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }
  function esc(s) {
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  /* ---------- Header ---------- */
  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  function setScrolled() { header.classList.toggle("scrolled", window.scrollY > 16); }
  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });
  menuToggle.addEventListener("click", function () {
    var open = !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", open);
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Hero ---------- */
  var polaroids = [
    { code: "ch", label: "Switzerland", tilt: -6, speed: -0.06 },
    { code: "ke", label: "Kenya", tilt: 2, speed: 0.1 },
    { code: "sc", label: "Seychelles", tilt: 5, speed: -0.03 }
  ];
  document.getElementById("polaroids").innerHTML = polaroids.map(function (p) {
    var d = findDestination(p.code);
    return '<figure class="polaroid" data-parallax="' + p.speed + '" style="transform:rotate(' + p.tilt + 'deg)">' +
      '<img src="' + d.image + '" alt="Tourist visa to ' + esc(d.name) + '" loading="eager" />' +
      "<figcaption>" + esc(p.label) + "</figcaption></figure>";
  }).join("");

  var feedItems = destinations.slice(0, 12);
  var feedHtml = feedItems.concat(feedItems).map(function (d) {
    return '<li class="feed-row"><img src="' + d.flag + '" alt="" /><div>' +
      '<p class="feed-name">' + esc(d.name) + '</p><p class="feed-sub">' + esc(d.note) + "</p></div>" +
      '<span class="feed-count">' + esc(d.processed) + " visas processed</span></li>";
  }).join("");
  document.getElementById("feed-track").innerHTML = feedHtml;

  var query = "";
  var searchInput = document.getElementById("search-input");
  document.getElementById("hero-search").addEventListener("submit", function (e) {
    e.preventDefault();
    query = searchInput.value.trim();
    renderDestinations();
    document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
  });
  searchInput.addEventListener("input", function () {
    query = searchInput.value;
    renderDestinations();
  });

  /* ---------- Problem scrub ---------- */
  var leftProblems = [
    { label: "Documents rejected by the embassy", pct: 34 },
    { label: "Incomplete supporting documents", pct: 28 },
    { label: "Missed appointment windows", pct: 19 }
  ];
  var rightProblems = [
    { label: "Missed visa policy changes", pct: 14 },
    { label: "Wrong visa type for the trip", pct: 9 },
    { label: "Incorrect application details", pct: 11 }
  ];
  var POP_ORDER = [
    { side: "left", row: 0 }, { side: "right", row: 0 },
    { side: "left", row: 1 }, { side: "right", row: 1 },
    { side: "left", row: 2 }, { side: "right", row: 2 }
  ];
  function popIndex(side, row) {
    for (var i = 0; i < POP_ORDER.length; i++) {
      if (POP_ORDER[i].side === side && POP_ORDER[i].row === row) return i;
    }
    return 0;
  }
  function renderProblemCol(el, items, side) {
    el.innerHTML = items.map(function (item, row) {
      return '<div class="problem-item" data-side="' + side + '" data-row="' + row + '" data-pop="' + popIndex(side, row) + '">' +
        '<p class="problem-label">' + esc(item.label) + '</p><p class="problem-pct">' + item.pct + "%</p></div>";
    }).join("");
  }
  renderProblemCol(document.getElementById("problem-left"), leftProblems, "left");
  renderProblemCol(document.getElementById("problem-right"), rightProblems, "right");

  (function initProblem() {
    var scrub = document.getElementById("problem-scrub");
    var score = document.getElementById("problem-score");
    var items = scrub.querySelectorAll("[data-pop]");
    var narrowMq = window.matchMedia("(max-width: 1000px)");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function apply(progress, narrow) {
      var scoreT = clamp(easeOutBack(clamp(progress / (narrow ? 0.14 : 0.12))));
      score.style.opacity = scoreT.toFixed(3);
      score.style.transform = "scale(" + (0.68 + 0.32 * scoreT).toFixed(3) + ")";
      var cardStart = 0.1;
      var slot = narrow ? 0.12 : 0.13;
      var popDuration = narrow ? 0.12 : 0.1;
      var fromXAmt = narrow ? 110 : 220;
      var fromYAmt = narrow ? 28 : 48;
      for (var i = 0; i < items.length; i++) {
        var el = items[i];
        var idx = Number(el.getAttribute("data-pop"));
        var start = cardStart + idx * slot;
        var local = clamp((progress - start) / popDuration);
        var raw = easeOutBack(local);
        var t = clamp(raw);
        var bounce = clamp(raw, 0, 1.12);
        var towardCenter = el.getAttribute("data-side") === "right" ? -1 : 1;
        var row = Number(el.getAttribute("data-row")) || 0;
        var x = towardCenter * fromXAmt * (1 - bounce);
        var y = (1 - row) * fromYAmt * (1 - bounce);
        var scale = 0.2 + 0.8 * bounce;
        el.style.opacity = t.toFixed(3);
        el.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0) scale(" + scale.toFixed(3) + ")";
      }
    }
    function progressFor() {
      var rect = scrub.getBoundingClientRect();
      return clamp(-rect.top / Math.max(rect.height - window.innerHeight, 1));
    }
    if (reduceMotion) { apply(1, narrowMq.matches); return; }
    var frame = 0;
    function update() { frame = 0; apply(progressFor(), narrowMq.matches); }
    function onScroll() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  })();

  /* ---------- Trust ---------- */
  var trustItems = [
    { kicker: "Security", value: "Bank-grade", accent: "AES-256", text: "Every document and transfer is secured end-to-end with TLS 1.3 + AES-256 encryption." },
    { kicker: "Reviews", value: "4.9", accent: "/ 5", text: "Rated by 12,000+ verified travellers on Google, Trustpilot and in-app — no incentivised reviews." },
    { kicker: "Guarantee", value: "Resubmission", accent: "Free", text: "If your documents are rejected by the embassy, we refile at zero extra cost — every single time." },
    { kicker: "Support", value: "24 / 7", accent: "", text: "Reach our visa experts via live chat, email, or phone. Average first response under 4 minutes." }
  ];
  document.getElementById("trust-grid").innerHTML = trustItems.map(function (item, i) {
    return '<article class="card trust-card reveal" style="transition-delay:' + (i * 90) + 'ms">' +
      '<p class="card-kicker">' + esc(item.kicker) + '</p>' +
      '<p class="trust-value">' + esc(item.value) + (item.accent ? " <em>" + esc(item.accent) + "</em>" : "") + "</p>" +
      '<p class="muted">' + esc(item.text) + "</p></article>";
  }).join("");

  /* ---------- Destinations ---------- */
  var region = "All";
  var showAll = false;
  var tabsEl = document.getElementById("region-tabs");
  tabsEl.innerHTML = regions.map(function (r) {
    return '<button type="button" role="tab" class="tab' + (r === "All" ? " active" : "") + '" data-region="' + r + '" aria-selected="' + (r === "All") + '">' + r + "</button>";
  }).join("");
  tabsEl.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-region]");
    if (!btn) return;
    region = btn.getAttribute("data-region");
    showAll = false;
    tabsEl.querySelectorAll(".tab").forEach(function (t) {
      var on = t.getAttribute("data-region") === region;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    renderDestinations();
  });
  document.getElementById("show-all-btn").addEventListener("click", function () {
    showAll = true;
    renderDestinations();
  });

  function filteredDestinations() {
    var q = query.trim().toLowerCase();
    return destinations.filter(function (d) {
      var matchRegion = region === "All" || d.region === region;
      var matchQuery = !q || d.name.toLowerCase().indexOf(q) !== -1 || d.tagline.toLowerCase().indexOf(q) !== -1;
      return matchRegion && matchQuery;
    });
  }

  function observeDestCards(grid) {
    var cards = grid.querySelectorAll("[data-grid-item]");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      cards.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var narrow = window.matchMedia("(max-width: 1000px)").matches;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("in", entry.isIntersecting);
      });
    }, { threshold: narrow ? 0.06 : 0.1, rootMargin: narrow ? "0px 0px -8% 0px" : "0px 0px -40px 0px" });
    cards.forEach(function (el) { el.classList.remove("in"); observer.observe(el); });
  }

  function renderDestinations() {
    var filtered = filteredDestinations();
    var visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
    var grid = document.getElementById("dest-grid");
    var count = document.getElementById("result-count");
    var empty = document.getElementById("dest-empty");
    var showWrap = document.getElementById("show-all-wrap");
    count.textContent = filtered.length + " " + (filtered.length === 1 ? "destination" : "destinations") +
      (query.trim() ? ' matching "' + query.trim() + '"' : "");
    empty.hidden = filtered.length !== 0;
    showWrap.hidden = !( !showAll && filtered.length > PAGE_SIZE );
    document.getElementById("show-all-btn").textContent = "Show all " + filtered.length + " destinations";
    grid.innerHTML = visible.map(function (d, i) {
      return '<article class="card dest-card" data-grid-item style="--i:' + (i % 9) + '">' +
        '<div class="dest-media"><img src="' + d.image + '" alt="Tourist visa to ' + esc(d.name) + ' — ' + esc(d.tagline) + '" loading="lazy" />' +
        '<span class="badge">' + esc(d.processed) + " visas processed</span></div>" +
        '<div class="dest-body"><div class="dest-title"><img class="flag" src="' + d.flag + '" alt="" /><div>' +
        "<h3>" + esc(d.name) + '</h3><p class="muted">' + esc(d.tagline) + "</p></div></div>" +
        '<dl class="dest-meta"><div><dt>From</dt><dd>' + formatINR(d.price) + "</dd></div>" +
        "<div><dt>Validity</dt><dd>" + esc(d.validity) + "</dd></div>" +
        "<div><dt>Entry</dt><dd>" + esc(d.entry) + "</dd></div>" +
        "<div><dt>Processing</dt><dd>" + esc(d.note) + "</dd></div></dl>" +
        '<a href="https://www.visabanana.com/" class="btn btn-primary btn-block">Start application →</a></div></article>';
    }).join("");
    observeDestCards(grid);
  }
  renderDestinations();

  /* ---------- How it works ---------- */
  var steps = [
    { title: "Choose Destination", text: "Pick from 50+ destinations. Filter by visa type and find exactly the right option for your trip.", meta: "Browse " + destinations.length + " countries", art: "destination" },
    { title: "Upload Your Documents", text: "Send your documents through our secure portal. Everything is protected with AES-256 encryption.", meta: "Secure upload", art: "upload" },
    { title: "Secure Payment", text: "Pay with confidence. Every transfer is secured end-to-end with TLS 1.3 + AES-256 encryption.", meta: "No hidden fees", art: "payment" },
    { title: "Receive Your Visa", text: "Your visa is issued and sent to you. If an embassy rejects your documents, we refile at zero extra cost.", meta: "Free resubmission", art: "visa" }
  ];

  function scrubStyle(progress) {
    return "animation-play-state:paused;animation-delay:" + (-(clamp(progress) * ART_MS) / 1000).toFixed(3) + "s";
  }

  function artworkHtml(kind, progress) {
    var s = scrubStyle(progress);
    if (kind === "destination") {
      return '<svg class="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">' +
        '<circle class="art-orbit" cx="140" cy="82" r="54" style="' + s + '"></circle>' +
        '<circle class="art-globe" cx="140" cy="82" r="40" style="' + s + '"></circle>' +
        '<path class="art-meridian" d="M140 42c14 12 22 28 22 40s-8 28-22 40c-14-12-22-28-22-40s8-28 22-40Z" style="' + s + '"></path>' +
        '<path class="art-lat" d="M102 70h76M100 82h80M104 96h72" style="' + s + '"></path>' +
        '<g class="art-pin" style="' + s + '"><path d="M188 48c0-8.3 6.7-15 15-15s15 6.7 15 15c0 11-15 24-15 24S188 59 188 48Z"></path><circle cx="203" cy="48" r="5.5" fill="#fff"></circle></g>' +
        '<path class="art-trail" d="M92 118c28 10 68 14 108 4" style="' + s + '"></path>' +
        '<circle class="art-dot" cx="92" cy="118" r="4" style="' + s + '"></circle>' +
        '<circle class="art-dot art-dot-b" cx="200" cy="122" r="4" style="' + s + '"></circle></svg>';
    }
    if (kind === "upload") {
      return '<svg class="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">' +
        '<rect class="art-tray" x="78" y="96" width="124" height="28" rx="10" style="' + s + '"></rect>' +
        '<g class="art-doc art-doc-a" style="' + s + '"><rect x="108" y="38" width="64" height="78" rx="8"></rect><path d="M120 58h40M120 70h34M120 82h28"></path></g>' +
        '<g class="art-doc art-doc-b" style="' + s + '"><rect x="128" y="28" width="64" height="78" rx="8"></rect><path d="M140 48h40M140 60h34M140 72h28"></path></g>' +
        '<path class="art-arrow" d="M140 118v-22m0 0-8 8m8-8 8 8" style="' + s + '"></path>' +
        '<circle class="art-pulse" cx="140" cy="118" r="10" style="' + s + '"></circle></svg>';
    }
    if (kind === "payment") {
      return '<svg class="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">' +
        '<rect class="art-card" x="78" y="44" width="124" height="78" rx="14" style="' + s + '"></rect>' +
        '<rect class="art-stripe" x="78" y="64" width="124" height="16" style="' + s + '"></rect>' +
        '<rect class="art-chip" x="94" y="92" width="28" height="20" rx="4" style="' + s + '"></rect>' +
        '<path class="art-card-line" d="M140 100h46M140 110h32" style="' + s + '"></path>' +
        '<g class="art-lock" style="' + s + '"><rect x="188" y="36" width="36" height="28" rx="8"></rect><path d="M196 36v-8a10 10 0 0 1 20 0v8"></path><circle cx="206" cy="50" r="3.5" fill="#fff"></circle></g>' +
        '<path class="art-check" d="M98 128l10 10 22-24" style="' + s + '"></path></svg>';
    }
    return '<svg class="step-art" viewBox="0 0 280 160" fill="none" aria-hidden="true">' +
      '<rect class="art-passport" x="86" y="34" width="88" height="100" rx="12" style="' + s + '"></rect>' +
      '<circle class="art-seal" cx="130" cy="78" r="22" style="' + s + '"></circle>' +
      '<path class="art-seal-inner" d="M130 64v28M116 78h28" style="' + s + '"></path>' +
      '<path class="art-pass-lines" d="M102 112h56M102 122h40" style="' + s + '"></path>' +
      '<g class="art-stamp" style="' + s + '"><rect x="168" y="52" width="58" height="58" rx="12"></rect><path d="M182 81l10 10 20-22"></path><circle cx="197" cy="81" r="20"></circle></g>' +
      '<path class="art-confetti art-c1" d="M72 48l6 2-2 6-6-2z" style="' + s + '"></path>' +
      '<path class="art-confetti art-c2" d="M236 40l5 4-4 5-5-4z" style="' + s + '"></path>' +
      '<path class="art-confetti art-c3" d="M248 96l6 1-1 6-6-1z" style="' + s + '"></path></svg>';
  }

  var howActive = 0;
  var howLocalT = 0;
  var stepList = document.getElementById("step-list");
  var stepPanel = document.getElementById("step-panel");

  function renderHow() {
    stepList.innerHTML = steps.map(function (step, i) {
      var fill = i < howActive ? 100 : i === howActive ? Math.round(howLocalT * 1000) / 10 : 0;
      return "<li><button type=\\"button\\" class=\\"step-item" + (i === howActive ? " active" : "") + (i < howActive ? " done" : "") +
        '" data-step="' + i + '" aria-pressed="' + (i === howActive) + '">' +
        '<span class="step-label">Step - ' + String(i + 1).padStart(2, "0") + "</span>" +
        '<span class="step-title">' + esc(step.title) + "</span>" +
        '<span class="step-rail" aria-hidden="true"><span class="step-rail-fill" style="width:' + fill + '%"></span></span>' +
        "</button></li>";
    }).join("");
    var current = steps[howActive];
    var fill = Math.round(howLocalT * 1000) / 10;
    stepPanel.innerHTML =
      '<div class="step-art-wrap">' + artworkHtml(current.art, howLocalT) + "</div>" +
      '<p class="step-count">Step ' + (howActive + 1) + " of " + steps.length + "</p>" +
      '<h3 class="step-heading">' + esc(current.title) + "</h3>" +
      '<p class="muted step-text">' + esc(current.text) + "</p>" +
      '<span class="chip chip-soft">' + esc(current.meta) + "</span>" +
      '<div class="progress" aria-hidden="true"><div class="progress-bar" style="width:' + fill + '%"></div></div>';
  }
  renderHow();

  stepList.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-step]");
    if (!btn) return;
    var index = Number(btn.getAttribute("data-step"));
    var scrub = document.getElementById("how-scrub");
    var top = scrub.getBoundingClientRect().top + window.scrollY;
    var travel = Math.max(scrub.offsetHeight - window.innerHeight, 1);
    var segment = 1 / steps.length;
    window.scrollTo({ top: top + (index * segment + segment * 0.35) * travel, behavior: "smooth" });
  });

  (function initHow() {
    var scrub = document.getElementById("how-scrub");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var lastActive = -1, lastT = -1;
    function progressFor() {
      var rect = scrub.getBoundingClientRect();
      return clamp(-rect.top / Math.max(rect.height - window.innerHeight, 1));
    }
    function apply(p) {
      if (reduceMotion) { howActive = steps.length - 1; howLocalT = 1; }
      else {
        var segment = 1 / steps.length;
        howActive = Math.min(steps.length - 1, Math.floor(p / segment));
        howLocalT = clamp((p - howActive * segment) / segment);
      }
      if (howActive !== lastActive || Math.abs(howLocalT - lastT) > 0.01) {
        lastActive = howActive;
        lastT = howLocalT;
        renderHow();
      }
    }
    var frame = 0;
    function update() { frame = 0; apply(progressFor()); }
    function onScroll() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  })();

  /* ---------- Stats ---------- */
  var stats = [
    { label: "Travelers served", target: 50247, decimals: 0, suffix: "+", locale: true },
    { label: "Verified reviews", target: 12438, decimals: 0, suffix: "", locale: true },
    { label: "Destinations", target: destinations.length, decimals: 0, suffix: "", locale: false },
    { label: "Rating on Google", target: 4.9, decimals: 1, suffix: "★", locale: false }
  ];
  document.getElementById("stats-grid").innerHTML = stats.map(function (s, i) {
    return '<div class="stat" data-stat="' + i + '"><p class="stat-value"><span class="stat-num">0</span>' +
      (s.suffix ? "<em>" + s.suffix + "</em>" : "") + '</p><p class="muted">' + esc(s.label) + "</p></div>";
  }).join("");

  (function initStats() {
    var grid = document.getElementById("stats-grid");
    var started = false;
    function run() {
      if (started) return;
      started = true;
      stats.forEach(function (stat, i) {
        var el = grid.querySelector('[data-stat="' + i + '"] .stat-num');
        var start = performance.now();
        function tick(now) {
          var progress = Math.min((now - start) / 1400, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var value = stat.target * eased;
          el.textContent = stat.locale
            ? Math.round(value).toLocaleString("en-IN")
            : (stat.decimals ? value.toFixed(stat.decimals) : String(Math.round(value)));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
    if (!("IntersectionObserver" in window)) { run(); return; }
    var obs = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { run(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(grid);
  })();

  /* ---------- Pricing ---------- */
  var plans = [
    { code: "vn", featured: false },
    { code: "ae", featured: true },
    { code: "gb", featured: false }
  ];
  var perks = ["No hidden fees", "Expert review", "Free resubmission assistance"];
  document.getElementById("pricing-grid").innerHTML = plans.map(function (plan, i) {
    var d = findDestination(plan.code);
    return '<article class="card price-card' + (plan.featured ? " featured" : "") + ' reveal" style="transition-delay:' + (i * 100) + 'ms">' +
      '<p class="card-kicker">' + esc(d.region) + " · " + esc(d.entry) + "</p>" +
      '<h3 class="price-name">' + esc(d.name) + "</h3>" +
      '<p class="price"><span>' + formatINR(d.price) + "</span><small>/ application</small></p>" +
      '<p class="muted">' + esc(d.tagline) + "</p>" +
      '<ul class="check-list"><li>Validity: ' + esc(d.validity) + "</li><li>Processing: " + esc(d.note) + "</li>" +
      perks.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
      '<a href="https://www.visabanana.com/" class="btn btn-block ' + (plan.featured ? "btn-primary" : "btn-ghost") + '">Get started</a></article>';
  }).join("");

  /* ---------- FAQ ---------- */
  var faqs = [
    { q: "Are there any hidden fees?", a: "No. Our fees are shown before you apply and there are no hidden charges. Government fees are listed on each destination so you know the full cost up front." },
    { q: "What if my documents are rejected by the embassy?", a: "We refile at zero extra cost, every single time. Free resubmission assistance is part of the service." },
    { q: "Who checks my application?", a: "Every application goes through expert review before it is submitted, so mistakes are caught early." },
    { q: "Is my personal data safe?", a: "Every document and transfer is secured end-to-end with TLS 1.3 + AES-256 encryption." },
    { q: "How quickly can I get help?", a: "Our visa experts are available 24/7 by live chat, email or phone, with an average first response under 4 minutes." }
  ];
  var faqOpen = 0;
  var faqList = document.getElementById("faq-list");
  function renderFaq() {
    faqList.innerHTML = faqs.map(function (item, i) {
      var isOpen = faqOpen === i;
      return '<div class="faq-item' + (isOpen ? " open" : "") + '">' +
        '<button type="button" class="faq-q" aria-expanded="' + isOpen + '" data-faq="' + i + '">' +
        "<span>" + esc(item.q) + '</span><span class="faq-icon" aria-hidden="true"></span></button>' +
        '<div class="faq-a" role="region"><div><p class="muted">' + esc(item.a) + "</p></div></div></div>";
    }).join("");
  }
  renderFaq();
  faqList.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-faq]");
    if (!btn) return;
    var i = Number(btn.getAttribute("data-faq"));
    faqOpen = faqOpen === i ? null : i;
    renderFaq();
  });

  /* ---------- Alerts ---------- */
  var EMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  var alertsMount = document.getElementById("alerts-mount");
  function renderAlerts(done, error, email) {
    if (done) {
      alertsMount.innerHTML = '<p class="success" role="status">Thanks — you\\'re subscribed. We\\'ll be in touch when rules change.</p>';
      return;
    }
    alertsMount.innerHTML =
      '<form class="alerts-form" id="alerts-form" novalidate>' +
      '<label for="alert-email" class="sr-only">Email address</label>' +
      '<input id="alert-email" type="email" placeholder="Email address" value="' + esc(email || "") + '" ' +
      (error ? 'aria-invalid="true" aria-describedby="alert-error"' : 'aria-describedby="alert-help"') + " />" +
      '<button type="submit" class="btn btn-primary">Subscribe →</button>' +
      (error
        ? '<p id="alert-error" class="error" role="alert">' + esc(error) + "</p>"
        : '<p id="alert-help" class="muted small">No spam. Unsubscribe any time.</p>') +
      "</form>";
    document.getElementById("alerts-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var val = document.getElementById("alert-email").value.trim();
      if (!EMAIL.test(val)) renderAlerts(false, "Please enter a valid email address.", val);
      else renderAlerts(true);
    });
  }
  renderAlerts(false, "", "");

  /* ---------- Globe ---------- */
  (function initGlobe() {
    var el = document.getElementById("globe");
    var offset = 0;
    var drag = null;
    var autoRotate = true;
    function textureWidth() { return el.clientWidth * 2.3 || 1; }
    function tick() {
      if (autoRotate && !drag) offset = (offset + 0.4) % textureWidth();
      el.style.backgroundPosition = -offset + "px 50%";
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    el.addEventListener("pointerdown", function (e) {
      drag = { startX: e.clientX, startOffset: offset };
      autoRotate = false;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var tw = textureWidth();
      var delta = e.clientX - drag.startX;
      offset = (((drag.startOffset - delta) % tw) + tw) % tw;
    });
    function endDrag() { drag = null; autoRotate = true; }
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
  })();

  /* ---------- Footer popular ---------- */
  document.getElementById("footer-popular").innerHTML = ["ae","vn","tr","jp"].map(function (code) {
    var d = findDestination(code);
    return "<li><a href=\\"#destinations\\">" + esc(d.name) + "</a></li>";
  }).join("");

  /* ---------- Scroll reveals / parallax / hero exit ---------- */
  (function initScrollEffects() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var parallax = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    var heroExit = document.querySelector("[data-hero-exit]");
    var heroSection = document.querySelector(".hero");

    document.querySelectorAll(".reveal").forEach(function (el) {
      if (!("IntersectionObserver" in window) || reduceMotion) el.classList.add("in");
      else {
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); }
          });
        }, { threshold: 0.15 });
        obs.observe(el);
      }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
      if (heroExit) { heroExit.style.opacity = "1"; heroExit.style.transform = "none"; }
      document.querySelectorAll("[data-scroll-fade]").forEach(function (el) {
        el.style.opacity = "1"; el.style.transform = "none";
      });
      if (reduceMotion) return;
    }

    if ("IntersectionObserver" in window) {
      var narrow = window.matchMedia("(max-width: 1000px)").matches;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); }
        });
      }, { threshold: narrow ? 0.08 : 0.15, rootMargin: narrow ? "0px 0px -4% 0px" : "0px 0px -8% 0px" });
      reveals.forEach(function (el) { observer.observe(el); });
    }

    var frame = 0;
    function update() {
      frame = 0;
      var vh = window.innerHeight;
      if (heroExit && heroSection) {
        var rect = heroSection.getBoundingClientRect();
        var travel = Math.max(rect.height * 0.7, 1);
        var p = clamp(-rect.top / travel);
        heroExit.style.opacity = (1 - p * 0.85).toFixed(3);
        heroExit.style.transform = "translate3d(0," + (p * -72).toFixed(1) + "px,0) scale(" + (1 - p * 0.06).toFixed(3) + ")";
        heroSection.style.setProperty("--hero-exit", p.toFixed(3));
      }
      document.querySelectorAll("[data-scroll-fade]").forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var enter = clamp((vh * 0.88 - rect.top) / (vh * 0.4));
        var leave = rect.bottom < 0 ? clamp(1 + rect.bottom / (vh * 0.25)) : 1;
        var p = Math.min(enter, leave);
        el.style.opacity = p.toFixed(3);
        el.style.transform = "translate3d(0," + ((1 - enter) * 64).toFixed(1) + "px,0) scale(" + (0.94 + 0.06 * enter).toFixed(3) + ")";
      });
      parallax.forEach(function (el) {
        var speed = Number(el.getAttribute("data-parallax")) || 0;
        var rect = el.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > vh + 300) return;
        var offset = (rect.top + rect.height / 2 - vh / 2) * speed;
        el.style.setProperty("translate", "0 " + offset.toFixed(1) + "px");
      });
    }
    function requestUpdate() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  })();
})();
  </script>
</body>
</html>
`;

fs.writeFileSync(outPath, html);
console.log("Wrote", outPath, "(" + Math.round(fs.statSync(outPath).size / 1024) + " KB)");

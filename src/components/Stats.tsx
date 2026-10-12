import { destinations } from "../data/destinations";
import { useCountUp, useInView } from "../hooks";

type Stat = { label: string; target: number; format: (n: number) => string; suffix?: string };

const stats: Stat[] = [
  { label: "Travelers served", target: 50247, format: (n) => Math.round(n).toLocaleString("en-IN"), suffix: "+" },
  { label: "Verified reviews", target: 12438, format: (n) => Math.round(n).toLocaleString("en-IN") },
  { label: "Destinations", target: destinations.length, format: (n) => Math.round(n).toString() },
  { label: "Rating on Google", target: 4.9, format: (n) => n.toFixed(1), suffix: "★" },
];

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.target, active);
  return (
    <div className="stat">
      <p className="stat-value">
        {stat.format(value)}
        {stat.suffix && <em>{stat.suffix}</em>}
      </p>
      <p className="muted">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="section stats-section">
      <div className="container">
        <div ref={ref} className="stats-grid">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

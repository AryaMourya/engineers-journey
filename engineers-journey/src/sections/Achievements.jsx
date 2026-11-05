import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/achievements";

export default function Achievements({ onVisit }) {
  return (
    <section id="achievements" className="section content-section tinted-section" onMouseEnter={onVisit}>
      <SectionHeading eyebrow="ZONE 04 · TROPHY CASTLE" title="Milestones collected" description="A few milestones from learning, building and participating in the developer community." />
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="achievement-card" key={item.title}>
            <span className="achievement-icon">{item.icon}</span>
            <div><span className="card-kicker">{item.date}</span><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

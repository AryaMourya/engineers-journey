import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills({ onVisit }) {
  return (
    <section id="skills" className="section content-section tinted-section" onMouseEnter={onVisit}>
      <SectionHeading eyebrow="ZONE 02 · SKILL FOREST" title="Abilities & tools" description="A growing toolkit. Select a skill group to see the technologies I work with." />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-icon">{group.icon}</span><h3>{group.title}</h3>
            <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
      <p className="section-footnote">Skills reflect my current learning and project experience; I'm continuously improving.</p>
    </section>
  );
}

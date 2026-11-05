import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects({ onOpenProject }) {
  const [selected, setSelected] = useState(null);

  function openProject(project) {
    setSelected(project);
    onOpenProject();
  }

  return (
    <section id="projects" className="section content-section" >
      <SectionHeading eyebrow="ZONE 03 · PROJECT DUNGEON" title="Missions I've built" description="Each project is a quest: a problem explored, skills practised and lessons learned." />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-topline"><span>{project.number}</span><span className="status-label">{project.status}</span></div>
            <div className="project-emblem">✦</div>
            <h3>{project.name}</h3><p>{project.description}</p>
            <div className="skill-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <button className="text-button" onClick={() => openProject(project)}>View quest details <ExternalLink size={15} /></button>
          </article>
        ))}
      </div>
      {selected && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title">
            <button className="icon-button modal-close" onClick={() => setSelected(null)} aria-label="Close"><X /></button>
            <p className="eyebrow">{selected.number} · {selected.status}</p>
            <h2 id="project-title">{selected.name}</h2><p>{selected.description}</p>
            <div className="skill-tags">{selected.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="modal-links">
              <a className="primary-button" href={selected.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a>
              {selected.demo !== "#" && <a className="secondary-button" href={selected.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>}
            </div>
            <p className="section-footnote">Update this project entry with verified repository links, your contribution and a working demo where available.</p>
          </div>
        </div>
      )}
    </section>
  );
}

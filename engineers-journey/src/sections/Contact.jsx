import { Mail, Github, Linkedin, FileDown, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

export default function Contact({ onVisit }) {
  return (
    <section id="contact" className="section content-section contact-section" onMouseEnter={onVisit}>
      <SectionHeading eyebrow="ZONE 05 · NEXT HORIZON" title="Your next quest starts here" description="Every journey is better with good people. Have an opportunity, project or idea? Let's connect." />
      <div className="contact-panel">
        <a href={`mailto:${profile.email}`} className="contact-link"><Mail /> Email me</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link"><Github /> GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin /> LinkedIn</a>
        <a href={profile.resume} className="contact-link" download><FileDown /> Download resume</a>
      </div>
      <a className="primary-button contact-cta" href={`mailto:${profile.email}`}>Send a message <Send size={16} /></a>
      <p className="section-footnote">Before publishing, replace the placeholder email, LinkedIn URL and resume file.</p>
    </section>
  );
}

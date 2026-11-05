import SectionHeading from "../components/SectionHeading";
import { BookOpen, Code2, Telescope } from "lucide-react";

export default function About({ onVisit }) {
  return (
    <section id="about" className="section content-section" onMouseEnter={onVisit}>
      <SectionHeading eyebrow="ZONE 01 · ORIGIN VILLAGE" title="The story so far" description="Every builder starts somewhere. Here's a little about my journey." />
      <div className="story-grid">
        <article className="story-card"><BookOpen /><span className="card-kicker">CHAPTER 01</span><h3>The beginning</h3><p>I'm pursuing a B.Tech in Computer Science with a specialization in AI/ML. Curiosity about how software works led me to start building and experimenting.</p></article>
        <article className="story-card"><Code2 /><span className="card-kicker">CHAPTER 02</span><h3>The present</h3><p>I'm strengthening my Java, Python, DSA and web development foundations while learning through projects, hackathons and collaborative work.</p></article>
        <article className="story-card"><Telescope /><span className="card-kicker">CHAPTER 03</span><h3>The destination</h3><p>I want to become a strong software engineer who can turn complex problems into useful, reliable products and explore intelligent systems.</p></article>
      </div>
    </section>
  );
}

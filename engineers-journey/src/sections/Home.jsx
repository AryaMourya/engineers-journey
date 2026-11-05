import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, BookOpen } from "lucide-react";
import { profile } from "../data/profile";

export default function Home({ onStart, onGitHubVisit, totalXP }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="online-dot" /> PLAYER 001 · DEVELOPER REALM</p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          Welcome,<br /><span>Explorer!</span>
        </motion.h1>
        <h2>I'm {profile.name}.</h2>
        <p className="hero-description">{profile.introduction}</p>
        <div className="hero-tags"><span>JAVA</span><span>PYTHON</span><span>WEB DEV</span><span>AI/ML</span></div>
        <div className="hero-actions">
          <button className="primary-button" onClick={onStart}>Start adventure <ArrowDown size={17} /></button>
          <a className="secondary-button" href="#projects">View projects</a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" onClick={onGitHubVisit}><Github size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <span className="hero-xp"><BookOpen size={16} /> {totalXP} XP earned</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Pixel-art inspired night sky and adventure landscape">
        <div className="pixel-sun" />
        <div className="pixel-cloud cloud-one" /><div className="pixel-cloud cloud-two" />
        <div className="mountain mountain-back" /><div className="mountain mountain-front" />
        <div className="pixel-castle">♜</div>
        <div className="pixel-avatar"><span>◉</span><b>ARYA</b></div>
        <div className="art-caption">THE DEVELOPER REALM</div>
      </div>
      <a className="scroll-cue" href="#world-map">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}

import { useState } from "react";
import Navbar from "./components/Navbar";
import QuestJournal from "./components/QuestJournal";
import QuestToast from "./components/QuestToast";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useQuests } from "./hooks/useQuests";

export default function App() {
  const questState = useQuests();
  const [journalOpen, setJournalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  function completeQuest(id) {
    const result = questState.completeQuest(id);
    if (result?.awarded) {
      setToast({ message: result.message, reward: result.reward });
      window.setTimeout(() => setToast(null), 2600);
    }
  }

  function startAdventure() {
    document.getElementById("world-map")?.scrollIntoView({ behavior: "smooth" });
    completeQuest("start");
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar
        totalXP={questState.totalXP}
        onOpenJournal={() => setJournalOpen(true)}
      />
      <main id="main">
        <Home onStart={startAdventure} onGitHubVisit={() => completeQuest("github")} totalXP={questState.totalXP} />
        <section id="world-map" className="section world-section">
          <div className="section-heading">
            <p className="eyebrow">CHOOSE YOUR DESTINATION</p>
            <h2>Explore the realm</h2>
            <p>Every location reveals another part of my engineering journey.</p>
          </div>
          <div className="world-map">
            {[
              ["about", "01", "Origin Village", "My story", "🏡"],
              ["skills", "02", "Skill Forest", "Technical abilities", "🌲"],
              ["projects", "03", "Project Dungeon", "Builds and experiments", "⚔️"],
              ["achievements", "04", "Trophy Castle", "Milestones", "🏰"],
              ["contact", "05", "Next Horizon", "Connect with me", "🌅"]
            ].map(([id, number, title, description, emoji]) => (
              <a className="location-card" href={`#${id}`} key={id}>
                <span className="location-number">ZONE {number}</span>
                <span className="location-art" aria-hidden="true">{emoji}</span>
                <strong>{title}</strong>
                <span>{description}</span>
                <span className="location-enter">ENTER LOCATION ↗</span>
              </a>
            ))}
          </div>
          <p className="map-hint">✦ Hint: Visit locations and complete quests to unlock rewards. Open your Quest Journal anytime.</p>
        </section>
        <About onVisit={() => completeQuest("about")} />
        <Skills onVisit={() => completeQuest("skills")} />
        <Projects onOpenProject={() => completeQuest("projects")} />
        <Achievements onVisit={() => completeQuest("achievements")} />
        <Contact onVisit={() => completeQuest("contact")} />
      </main>
      <Footer />
      <QuestJournal
        open={journalOpen}
        onClose={() => setJournalOpen(false)}
        questState={questState}
        onReset={questState.resetQuests}
      />
      <QuestToast toast={toast} />
    </>
  );
}

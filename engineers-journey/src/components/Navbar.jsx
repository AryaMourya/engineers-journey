import { useState } from "react";
import { BookOpen, Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ totalXP, onOpenJournal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["World Map", "#world-map"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#home"><span className="brand-mark">A</span> ARYA<span className="brand-dot">.EXE</span></a>
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <span className="xp-pill"><Sparkles size={15} /> {totalXP} XP</span>
        <button className="journal-button" onClick={onOpenJournal}><BookOpen size={16} /> Quest Log</button>
      </div>
    </header>
  );
}

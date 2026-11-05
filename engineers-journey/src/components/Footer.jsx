import { Github, Linkedin, Heart } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Arya Mourya · Engineer's Journey</span>
      <span className="footer-note">Built with curiosity <Heart size={13} /> and code.</span>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
      </div>
    </footer>
  );
}

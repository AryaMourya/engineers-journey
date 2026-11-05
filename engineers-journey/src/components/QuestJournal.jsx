import { X, ScrollText, RotateCcw, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { completionBonus } from "../data/quests";

export default function QuestJournal({ open, onClose, questState, onReset }) {
  if (!open) return null;
  const { quests, completedQuests, totalXP, allQuestsCompleted } = questState;
  const percentage = Math.round((completedQuests.length / quests.length) * 100);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="quest-drawer" role="dialog" aria-modal="true" aria-labelledby="journal-title">
        <div className="drawer-header">
          <div><p className="eyebrow">DEVELOPER REALM</p><h2 id="journal-title"><ScrollText size={22} /> Quest Journal</h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Close quest journal"><X /></button>
        </div>
        <div className="journal-summary">
          <div className="summary-line"><strong>{totalXP} XP</strong><span>{completedQuests.length}/{quests.length} quests</span></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${percentage}%` }} /></div>
          <p>{percentage}% of the realm explored</p>
        </div>
        <div className="quest-list">
          {quests.map((quest) => {
            const done = completedQuests.includes(quest.id);
            return (
              <div className={`quest-row ${done ? "done" : ""}`} key={quest.id}>
                {done ? <CheckCircle2 className="quest-check" /> : <Circle className="quest-check" />}
                <div className="quest-copy"><strong>{quest.title}</strong><span>{quest.description}</span></div>
                <b>+{quest.reward} XP</b>
              </div>
            );
          })}
        </div>
        <div className={`bonus-card ${allQuestsCompleted ? "unlocked" : ""}`}>
          <Sparkles />
          <div><strong>{allQuestsCompleted ? "Realm Explorer unlocked!" : "Realm Explorer bonus"}</strong><span>Complete every main quest for +{completionBonus} XP.</span></div>
        </div>
        <button className="reset-button" onClick={onReset}><RotateCcw size={15} /> Reset quest progress</button>
        <p className="drawer-note">Progress is saved for this browser tab session. No account is required.</p>
      </aside>
    </div>
  );
}

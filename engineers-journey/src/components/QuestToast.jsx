import { CheckCircle2, Sparkles } from "lucide-react";

export default function QuestToast({ toast }) {
  if (!toast) return null;
  return (
    <div className="quest-toast" role="status" aria-live="polite">
      <CheckCircle2 />
      <div><strong>{toast.message}</strong><span><Sparkles size={13} /> +{toast.reward} XP earned</span></div>
    </div>
  );
}

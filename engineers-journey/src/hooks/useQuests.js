import { useCallback, useEffect, useMemo, useState } from "react";
import { quests, completionBonus } from "../data/quests";

const STORAGE_KEY = "engineers-journey-quest-progress";

function readProgress() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completed: [], bonusAwarded: false };
  } catch {
    return { completed: [], bonusAwarded: false };
  }
}

export function useQuests() {
  const [progress, setProgress] = useState(readProgress);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completedQuests = progress.completed;
  const allQuestsCompleted = quests.every((quest) => completedQuests.includes(quest.id));

  const totalXP = useMemo(() => {
    const earned = quests
      .filter((quest) => completedQuests.includes(quest.id))
      .reduce((sum, quest) => sum + quest.reward, 0);
    return earned + (progress.bonusAwarded ? completionBonus : 0);
  }, [completedQuests, progress.bonusAwarded]);

  const completeQuest = useCallback((id) => {
    const quest = quests.find((item) => item.id === id);
    if (!quest || progress.completed.includes(id)) return { awarded: false };

    const completed = [...progress.completed, id];
    const nowAllComplete = quests.every((item) => completed.includes(item.id));
    const awardBonus = nowAllComplete && !progress.bonusAwarded;

    setProgress({
      completed,
      bonusAwarded: progress.bonusAwarded || awardBonus
    });

    return {
      awarded: true,
      reward: quest.reward + (awardBonus ? completionBonus : 0),
      message: awardBonus ? "Quest complete! The whole realm is explored!" : "Quest completed!"
    };
  }, [progress]);

  const resetQuests = useCallback(() => {
    setProgress({ completed: [], bonusAwarded: false });
  }, []);

  const isQuestCompleted = useCallback(
    (id) => completedQuests.includes(id),
    [completedQuests]
  );

  return {
    quests,
    completedQuests,
    totalXP,
    allQuestsCompleted,
    completeQuest,
    resetQuests,
    isQuestCompleted
  };
}

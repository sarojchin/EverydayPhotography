import type { Lesson } from "@/types/lesson";

export const DAY_02_LESSON: Lesson = {
  id: "control-the-frame",
  day: 2,
  title: "Control the Frame",
  subtitle: "4 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "The Frame Is Everything",
      body: "The camera sees everything.\n\nYou decide what matters.\n\nA strong photo has one clear subject and no distractions.",
      gradient: ["#FFFDE7", "#FFE082", "#FF8F00", "#E65100"],
    },
    {
      kind: "teach",
      title: "Clean vs Messy Frame",
      body: "Take a random photo.\n\nThen improve it by moving your position, adjusting your angle, or removing distractions.",
      gradient: ["#FFF8E1", "#FFCC80", "#EF6C00", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Tight vs Loose Framing",
      body: "Tight framing: your subject fills the frame.\n\nLoose framing: more of the environment shows.",
      gradient: ["#FFF3E0", "#FFAB40", "#E65100", "#4E342E"],
    },
    {
      kind: "teach",
      title: "What Changes",
      body: "Small position changes dramatically change quality.",
      gradient: ["#EFEBE9", "#D7CCC8", "#8D6E63", "#4E342E"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 5 photos of the same subject with different backgrounds. Keep only the best one.",
      shots: [
        "Move your position",
        "Adjust your angle",
        "Remove one distraction",
        "Try tighter framing",
        "Try looser framing",
      ],
    },
  ],
};

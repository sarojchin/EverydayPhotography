import type { Lesson } from "@/types/lesson";

export const DAY_07_LESSON: Lesson = {
  id: "photographing-other-people",
  day: 7,
  title: "Photographing Other People",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Don't Control Too Much",
      body: "People should look natural, not staged.",
      gradient: ["#FFF3E0", "#FFAB40", "#E65100", "#4E342E"],
    },
    {
      kind: "teach",
      title: "Give Simple Direction",
      body: "Keep direction minimal: turn slightly, relax shoulders, change the angle gently.",
      gradient: ["#FBE9E7", "#FFAB91", "#D84315", "#4E342E"],
    },
    {
      kind: "teach",
      title: "Capture Moments",
      body: "Take multiple shots, not single attempts. The best frame usually isn't the first.",
      gradient: ["#FCE4EC", "#F48FB1", "#880E4F", "#4A148C"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 10 photos of another person and select the best candid-looking one.",
      shots: [
        "Ask them to turn slightly",
        "Ask them to relax their shoulders",
        "Change your angle",
        "Zoom in closer",
        "Step back wider",
        "Catch them mid-movement",
        "Catch them mid-laugh",
        "Try a second location",
        "Wait for a quiet moment",
        "Let them forget the camera",
      ],
    },
  ],
};

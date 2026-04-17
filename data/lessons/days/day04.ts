import type { Lesson } from "@/types/lesson";

export const DAY_04_LESSON: Lesson = {
  id: "natural-posing",
  day: 4,
  title: "Natural Posing",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Stop Posing",
      body: "Good photos look unplanned.",
      gradient: ["#FFF8E1", "#FFE0B2", "#FF8F00", "#E65100"],
    },
    {
      kind: "teach",
      title: "Micro Adjustments",
      body: "Small changes make a big difference: head tilt, chin forward or down, shoulder angle, eye direction.",
      gradient: ["#FFF3E0", "#FFCC80", "#EF6C00", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Expression Layer",
      body: "Try different expressions: full smile, neutral, mid-laugh, looking away.",
      gradient: ["#FCE4EC", "#F48FB1", "#AD1457", "#4A148C"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 10 selfies with different micro-adjustments. Pick the 2 most natural.",
      shots: [
        "Head tilt left",
        "Head tilt right",
        "Chin forward + down",
        "Shoulder angled",
        "Eyes looking away",
        "Full smile",
        "Neutral",
        "Mid-laugh",
        "Relaxed and off-guard",
        "Your best natural",
      ],
    },
  ],
};

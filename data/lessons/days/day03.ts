import type { Lesson } from "@/types/lesson";

export const DAY_03_LESSON: Lesson = {
  id: "angles-change-your-face",
  day: 3,
  title: "Angles Change Your Face",
  subtitle: "4 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Same Face, Different Result",
      body: "Angle changes proportions instantly.",
      gradient: ["#FCE4EC", "#F8BBD0", "#C2185B", "#880E4F"],
      image: require("@/assets/lessons/day03/angles.png"),
    },
    {
      kind: "teach",
      title: "Eye Level",
      body: "A neutral, straight-on view. Honest but flat.",
      gradient: ["#FFF3E0", "#FFCC80", "#E65100", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Above Eye Level",
      body: "Camera above eye level is more flattering: larger eyes, cleaner jawline.",
      gradient: ["#FFF8E1", "#FFE082", "#FF8F00", "#E65100"],
    },
    {
      kind: "teach",
      title: "Below Eye Level",
      body: "Camera below eye level creates a stronger presence but is less flattering.",
      gradient: ["#EFEBE9", "#D7CCC8", "#795548", "#3E2723"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 3 selfies from different angles and choose the best.",
      shots: [
        "Eye level — straight on",
        "Above eye level — camera raised",
        "Below eye level — camera lowered",
      ],
    },
  ],
};

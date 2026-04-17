import type { Lesson } from "@/types/lesson";

export const DAY_06_LESSON: Lesson = {
  id: "group-selfies",
  day: 6,
  title: "Group Selfies",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Group Structure",
      body: "Group photos fail when people are unevenly arranged.",
      gradient: ["#FFF3E0", "#FFAB40", "#E65100", "#4E342E"],
    },
    {
      kind: "teach",
      title: "Positioning",
      body: "Place taller people slightly back. Keep faces at different levels. Avoid straight-line rows.",
      gradient: ["#FFF8E1", "#FFE082", "#FF8F00", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Focus Control",
      body: "Make sure everyone is visible and not blocked by anyone else.",
      gradient: ["#EFEBE9", "#D7CCC8", "#8D6E63", "#4E342E"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 3 group selfies with different arrangements and choose the clearest one.",
      shots: [
        "Straight-line row",
        "Staggered heights",
        "Different face levels",
      ],
    },
  ],
};

import type { Lesson } from "@/types/lesson";

export const DAY_09_LESSON: Lesson = {
  id: "indoor-low-light",
  day: 9,
  title: "Indoor Low Light",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Low Light Problem",
      body: "Photos get grainy and soft indoors.",
      gradient: ["#FBE9E7", "#EF9A9A", "#7F0000", "#1A0000"],
    },
    {
      kind: "teach",
      title: "Move to Light Sources",
      body: "Position yourself near windows, lamps, or screens to improve the light.",
      gradient: ["#FFF3E0", "#FFCC80", "#EF6C00", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Stability Matters More",
      body: "In low light, movement blurs everything. Hold your phone steady or rest it on a surface.",
      gradient: ["#EFEBE9", "#D7CCC8", "#6D4C41", "#3E2723"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 5 indoor photos using different light sources.",
      shots: [
        "Window light",
        "Lamp light",
        "Screen light",
        "Two sources combined",
        "Steadied shot in low light",
      ],
    },
  ],
};

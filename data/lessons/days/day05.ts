import type { Lesson } from "@/types/lesson";

export const DAY_05_LESSON: Lesson = {
  id: "sharpness-and-distance",
  day: 5,
  title: "Sharpness + Distance",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Blur Comes From You",
      body: "Not the camera.\n\nMovement and distance matter most.",
      gradient: ["#FFCCBC", "#FF8A65", "#BF360C", "#3E2723"],
    },
    {
      kind: "teach",
      title: "Stability Test",
      body: "Try holding your phone different ways: one hand, two hands, elbows tucked in, resting on a surface.",
      gradient: ["#FBE9E7", "#FFAB91", "#D84315", "#4E342E"],
    },
    {
      kind: "teach",
      title: "Distance Test",
      body: "Close distance distorts. Mid distance looks natural. Far distance looks balanced.",
      gradient: ["#EFEBE9", "#BCAAA4", "#6D4C41", "#3E2723"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 6 photos testing stability and distance. Select the sharpest.",
      shots: [
        "One hand",
        "Two hands",
        "Elbows tucked",
        "Phone resting on surface",
        "Close distance",
        "Mid distance",
      ],
    },
  ],
};

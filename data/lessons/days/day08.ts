import type { Lesson } from "@/types/lesson";

export const DAY_08_LESSON: Lesson = {
  id: "harsh-outdoor-light",
  day: 8,
  title: "Harsh Outdoor Light",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Sunlight Is Unforgiving",
      body: "Direct sun creates strong shadows.",
      gradient: ["#FFFDE7", "#FFF176", "#F9A825", "#E65100"],
    },
    {
      kind: "teach",
      title: "Turn, Don't Fight",
      body: "Turn your face slightly away from direct sun. Use partial shade instead of standing in full shade or full sun.",
      gradient: ["#FFF8DC", "#FFD54F", "#FF8F00", "#E65100"],
    },
    {
      kind: "teach",
      title: "Control Shadows",
      body: "Use angles to reduce harsh contrast across your face.",
      gradient: ["#FBE9E7", "#FFAB91", "#BF360C", "#4E342E"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take 5 outdoor photos and pick the most balanced one.",
      shots: [
        "Direct sun — facing it",
        "Full shade",
        "Partial shade",
        "Angled to the left of the sun",
        "Angled to the right of the sun",
      ],
    },
  ],
};

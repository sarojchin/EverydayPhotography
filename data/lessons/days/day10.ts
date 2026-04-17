import type { Lesson } from "@/types/lesson";

export const DAY_10_LESSON: Lesson = {
  id: "movement-and-story",
  day: 10,
  title: "Movement & Story",
  subtitle: "3 slides · 1 challenge",
  steps: [
    {
      kind: "teach",
      title: "Static Photos Are Limited",
      body: "Movement adds life.",
      gradient: ["#EFEBE9", "#D7CCC8", "#8D6E63", "#4E342E"],
    },
    {
      kind: "teach",
      title: "Capture Action",
      body: "Look for natural movement: walking, turning, laughing, interacting.",
      gradient: ["#FFF3E0", "#FFCC80", "#E65100", "#BF360C"],
    },
    {
      kind: "teach",
      title: "Sequence Thinking",
      body: "Take multiple shots in a sequence, not singles. The best frame is rarely the first.",
      gradient: ["#FCE4EC", "#FF8A65", "#BF360C", "#3E2723"],
    },
    {
      kind: "challenge",
      title: "Your Challenge",
      intro: "Take a 5-photo sequence of one action and pick the strongest frame.",
      shots: [
        "Before the action starts",
        "Action beginning",
        "Peak of the action",
        "Action ending",
        "After the action",
      ],
    },
  ],
};

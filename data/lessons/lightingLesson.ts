import type { Lesson } from "@/types/lesson";

/**
 * Content for the "Light & Angle" lesson.
 *
 * Editing this file is all you need to do to tweak copy, gradients, or the
 * challenge shots. The screen renderer in `screens/LessonScreen/` is generic
 * and reads everything from this object.
 */
export const LIGHTING_LESSON: Lesson = {
  id: "light-and-angle",
  title: "Light & Angle",
  subtitle: "3 quick screens · 2 min",
  steps: [
    {
      kind: "teach",
      title: "Light Comes First",
      body:
        "Light controls how your face looks.\n\nFacing light → smoother, softer features.\nSide light → more depth and contrast.\n\nTurn slightly toward a window. Watch your face improve instantly.",
      // Warm, window-light palette
      gradient: ["#FFD59E", "#FFB066", "#A66A3A", "#4A2F1F"],
    },
    {
      kind: "teach",
      title: "Angle Changes Shape",
      body:
        "Camera angle reshapes your face.\n\nSlightly above eye level → more defined.\nEye level → natural.\nBelow eye level → less flattering.\n\nSame face. Different angle.",
      // Cool, structural palette for contrast with step 1
      gradient: ["#3A5A7A", "#6B8BA8", "#C9D3DE", "#E8EEF3"],
    },
    {
      kind: "challenge",
      title: "5-Minute Practice",
      intro:
        "Stand near a window. Turn slightly toward it. Take 3 shots and compare — one will stand out immediately.",
      shots: [
        "Slightly above eye level",
        "Eye level",
        "Slightly below",
      ],
    },
  ],
};

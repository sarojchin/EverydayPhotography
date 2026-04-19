import type { Lesson } from "@/types/lesson";

export const DAY_01_LESSON: Lesson = {
  id: "selfies-lighting-angles",
  day: 1,
  title: "Selfies: Lighting and Angles",
  subtitle: "4 slides · 5 min",
  steps: [
    {
      kind: "teach",
      title: "Selfies: Lighting and Angles",
      body: "Great selfies come down to two things: where the light comes from, and where you hold your camera. This lesson covers both.",
      gradient: ["#FFD59E", "#FFB066", "#A66A3A", "#4A2F1F"],
    },
    {
      kind: "teach",
      title: "Front Window Light",
      body: "Stand facing a window so the light hits your face directly. Hold your phone slightly above eye level and look toward the camera. Take a few photos without moving much.\n\nThis works because the light covers your whole face evenly. There are no strong shadows, so your skin looks smoother and your eyes look brighter. Everything appears clear and easy to see.\n\nLook at your photos and notice how balanced your face looks. Nothing stands out in a harsh way. This is the most reliable setup—if you're unsure what to do, start here.",
      gradient: ["#FFF3E0", "#FFCC80", "#FF9800", "#E65100"],
      image: require("@/assets/Lessons/day01/front-window-light.png"),
    },
    {
      kind: "teach",
      title: "Side Window Light",
      body: "Now stand so the window is on your left or right side. Turn your face slightly toward the light—not fully, just a little—so both sides of your face are still visible. Take a few photos and adjust your position as you go.\n\nThis works because the light hits one side of your face more than the other. That difference helps your features stand out more—your jawline and cheekbones become more noticeable.\n\nPay attention to the darker side of your face. If it looks too dark, turn a bit more toward the window. Small changes here can quickly improve the photo.",
      gradient: ["#FFB74D", "#EF6C00", "#37474F", "#263238"],
      image: require("@/assets/Lessons/day01/side-window-light.png"),
    },
    {
      kind: "teach",
      title: "Pose",
      body: "Keep your lighting the same, then adjust how you're standing. Don't face the camera straight on—turn your body slightly to the side. Push your chin forward a little, then lower it slightly. Keep your face relaxed.\n\nTake several photos while making small changes—move the phone higher or lower, shift your angle, or slightly change your expression.\n\nThis works because facing the camera straight on can look stiff. Turning a little makes your face look more natural and flattering. Small movements matter more than big ones.\n\nFocus on this order: get the light right first, then adjust your angle, then your pose.",
      gradient: ["#D7CCC8", "#A1887F", "#6D4C41", "#3E2723"],
    },
  ],
};

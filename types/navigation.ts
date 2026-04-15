export type ScreenName = "home" | "gallery" | "lesson" | "lessons";

export type NavigationProps = {
  navigate: (screen: ScreenName) => void;
  /** Open a specific day's lesson. The registry enforces locked/unlocked semantics. */
  openLesson: (day: number) => void;
};

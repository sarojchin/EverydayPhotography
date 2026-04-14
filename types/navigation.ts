export type ScreenName = "home" | "gallery" | "lesson";

export type NavigationProps = {
  navigate: (screen: ScreenName) => void;
};

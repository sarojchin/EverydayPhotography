export type ScreenName = "home" | "gallery";

export type NavigationProps = {
  navigate: (screen: ScreenName) => void;
};

export type GalleryPhoto = {
  id: string;
  day: number;
  category: string;
  uri: string | null;
  gradientColors: [string, string];
  aspectRatio: number;
};

import type { GalleryPhoto } from "@/types/gallery";

export const GALLERY_MOCK_PHOTOS: GalleryPhoto[] = [
  { id: "1", day: 8, category: "Travel",   uri: null, gradientColors: ["#4A7FA5", "#1E4A6F"], aspectRatio: 3 / 4 },
  { id: "2", day: 7, category: "Food",     uri: null, gradientColors: ["#C17F3E", "#7A3D0A"], aspectRatio: 1 },
  { id: "3", day: 6, category: "Portrait", uri: null, gradientColors: ["#2C3E50", "#1A2530"], aspectRatio: 3 / 4 },
  { id: "4", day: 5, category: "Street",   uri: null, gradientColors: ["#8D9DB6", "#4A5568"], aspectRatio: 1 },
  { id: "5", day: 4, category: "Tech",     uri: null, gradientColors: ["#0D7377", "#032D30"], aspectRatio: 1 },
  { id: "6", day: 3, category: "Nature",   uri: null, gradientColors: ["#2D6A4F", "#1B4332"], aspectRatio: 1 },
];

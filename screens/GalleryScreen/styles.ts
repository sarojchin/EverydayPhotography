import { StyleSheet } from "react-native";
import * as tokens from "@/constants/tokens";

export const styles = StyleSheet.create({
  /* ── Gallery heading ── */
  galleryHeading: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 52,
    letterSpacing: -1,
    lineHeight: 54,
    color: tokens.onSurface,
  },
  gallerySubtitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: tokens.onSurfaceMuted,
    marginTop: 6,
  },

  /* ── Masonry grid ── */
  masonryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 20,
    paddingBottom: 20,
  },
  masonryCol: {
    flex: 1,
    gap: 10,
  },

  /* ── Empty state ── */
  galleryEmptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  galleryEmptyHeadline: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 42,
    letterSpacing: -1,
    lineHeight: 44,
    textAlign: "center",
    color: tokens.onSurfaceMuted,
  },

  /* ── Gallery card ── */
  galleryCardWrapper: {
    gap: 7,
  },
  galleryCardImage: {
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: tokens.surfaceHighest,
  },
  galleryCardMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  galleryCardCategory: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: tokens.onSurface,
  },
  galleryCardDay: {
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.9,
    color: tokens.onSurfaceMuted,
  },

  /* ── Avatar ── */
  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: tokens.surfaceHighest,
  },
});

import { StyleSheet } from "react-native";
import * as tokens from "@/constants/tokens";

export const styles = StyleSheet.create({
  closeText: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: tokens.primary,
  },

  heading: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 28,
    letterSpacing: -0.56,
    color: tokens.onSurface,
    marginTop: 4,
  },

  list: {
    gap: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: tokens.surfaceLowest,
  },
  rowLocked: {
    backgroundColor: tokens.surfaceLow,
  },
  rowToday: {
    backgroundColor: tokens.surfaceLowest,
  },

  rowDayBlock: {
    width: 52,
  },
  rowDayLabel: {
    fontFamily: "Manrope_700Bold",
    fontSize: 13,
    letterSpacing: 0.2,
    color: tokens.onSurface,
    textTransform: "uppercase",
  },

  rowBody: {
    flex: 1,
  },
  rowTitle: {
    fontFamily: "Manrope_700Bold",
    fontSize: 16,
    letterSpacing: -0.2,
    color: tokens.onSurface,
  },
  rowSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: tokens.onSurfaceMuted,
    marginTop: 2,
  },

  textMuted: {
    color: tokens.onSurfaceMuted,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: tokens.surfaceHighest,
  },
  badgeCompleted: {
    backgroundColor: tokens.surfaceHighest,
  },
  badgeToday: {
    backgroundColor: tokens.primaryContainer,
  },
  badgeLocked: {
    backgroundColor: tokens.surfaceHighest,
  },
  badgeText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: tokens.onSurfaceMuted,
  },
  badgeTextOnAccent: {
    color: "#ffffff",
  },
});

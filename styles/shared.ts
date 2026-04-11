import { StyleSheet } from "react-native";
import * as tokens from "@/constants/tokens";

export const sharedStyles = StyleSheet.create({
  /* ── Root ── */
  root: {
    flex: 1,
    backgroundColor: tokens.surface,
  },

  /* ── Header ── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontFamily: "Manrope_700Bold",
    fontSize: 17,
    letterSpacing: -0.34,
    color: tokens.onSurface,
  },

  /* ── Scroll ── */
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },

  /* ── Shared section spacing ── */
  section: {
    marginTop: 28,
  },

  /* ── Labels ── */
  label: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.3,
    color: tokens.onSurfaceMuted,
  },

  /* ── Bottom navigation ── */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "rgba(28,27,27,0.35)",
  },
  navLabelActive: {
    color: tokens.primary,
  },
});

import { StyleSheet } from "react-native";
import * as tokens from "@/constants/tokens";

export const styles = StyleSheet.create({
  /* ── Progress pills (header right) ── */
  pillRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pill: {
    width: 24,
    height: 5,
    borderRadius: 3,
    backgroundColor: tokens.surfaceHighest,
    overflow: "hidden",
  },
  pillActive: {
    width: 28,
  },
  pillFill: {
    flex: 1,
    borderRadius: 3,
  },

  /* ── Step heading ── */
  stepTitle: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 28,
    letterSpacing: -0.56,
    color: tokens.onSurface,
    marginTop: 4,
  },
  stepBody: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "rgba(28,27,27,0.75)",
  },

  /* ── Teach: illustration gradient card ── */
  gradientCard: {
    aspectRatio: 4 / 3,
    borderRadius: 24,
    overflow: "hidden",
  },
  imageCard: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    overflow: "hidden",
  },

  /* ── Challenge: shots list card ── */
  challengeIntro: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "rgba(28,27,27,0.75)",
  },
  shotsCard: {
    backgroundColor: tokens.surfaceLowest,
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },
  shotRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  shotNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: tokens.surfaceHighest,
    alignItems: "center",
    justifyContent: "center",
  },
  shotNumberText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 13,
    color: tokens.onSurface,
  },
  shotText: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: tokens.onSurface,
    flex: 1,
  },

  /* ── Sticky footer ── */
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 10,
    backgroundColor: tokens.surface,
  },

  /* ── CTA styles (match HomeScreen exactly so the two flows feel identical) ── */
  primaryBtn: {
    width: "100%",
    borderRadius: 999,
    overflow: "hidden",
  },
  primaryBtnGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 15,
  },
  primaryBtnText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 15,
    color: "#ffffff",
    letterSpacing: -0.15,
  },
  ghostBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
  },
  ghostBtnText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: tokens.primary,
  },
});

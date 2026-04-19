import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import type { TeachStep as TeachStepData } from "@/types/lesson";
import { sharedStyles } from "@/styles/shared";
import { styles } from "../styles";

/**
 * Renders a "teach" step: a 4:3 gradient illustration card + body copy.
 * Pure presentational — receives its data and does nothing else.
 */
export function TeachStep({ step }: { step: TeachStepData }) {
  return (
    <>
      <View style={sharedStyles.section}>
        <View style={styles.gradientCard}>
          <LinearGradient
            colors={step.gradient as unknown as readonly [string, string, ...string[]]}
            locations={[0, 0.35, 0.65, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
          {/* Warm/cool overlay accents for extra depth — same recipe as HomeScreen's photo card */}
          <LinearGradient
            colors={[
              "rgba(255,255,255,0.18)",
              "transparent",
              "rgba(0,0,0,0.12)",
              "transparent",
            ]}
            locations={[0, 0.4, 0.6, 1]}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 0.8, y: 0.8 }}
            style={StyleSheet.absoluteFill}
          />
          {step.image && (
            <Image
              source={step.image}
              style={StyleSheet.absoluteFill}
              resizeMode="cover"
            />
          )}
        </View>
      </View>

      <View style={sharedStyles.section}>
        <Text style={styles.stepBody}>{step.body}</Text>
      </View>
    </>
  );
}

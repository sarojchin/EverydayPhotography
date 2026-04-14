import React from "react";
import { View, Text } from "react-native";

import type { ChallengeStep as ChallengeStepData } from "@/types/lesson";
import { sharedStyles } from "@/styles/shared";
import { styles } from "../styles";

/**
 * Renders a "challenge" step: intro copy + a numbered shots card.
 * CTAs are NOT rendered here — they live in the parent's sticky footer
 * so they don't scroll away. Pure presentational.
 */
export function ChallengeStep({ step }: { step: ChallengeStepData }) {
  return (
    <>
      <View style={sharedStyles.section}>
        <Text style={styles.challengeIntro}>{step.intro}</Text>
      </View>

      <View style={sharedStyles.section}>
        <View style={styles.shotsCard}>
          {step.shots.map((shot, i) => (
            <View key={i} style={styles.shotRow}>
              <View style={styles.shotNumber}>
                <Text style={styles.shotNumberText}>{i + 1}</Text>
              </View>
              <Text style={styles.shotText}>{shot}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

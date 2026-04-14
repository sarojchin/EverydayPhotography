import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Line } from "react-native-svg";

import * as tokens from "@/constants/tokens";
import type { NavigationProps } from "@/types/navigation";
import type { Lesson, LessonStep } from "@/types/lesson";
import type { ChallengeData } from "@/types/challenge";
import { loadChallengeData } from "@/services/challengeStorage";
import { useCapturePhoto } from "@/hooks/useCapturePhoto";
import { CameraIcon, UploadIcon } from "@/components/icons";
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";
import { TeachStep } from "./steps/TeachStep";
import { ChallengeStep } from "./steps/ChallengeStep";

type Props = {
  navigation: NavigationProps;
  lesson: Lesson;
};

/**
 * Generic lesson renderer. Reads everything from the `lesson` prop — change
 * content by editing the data file in `data/lessons/`, not this screen.
 *
 * Adding a new step kind:
 *   1. Extend the `LessonStep` union in `types/lesson.ts`
 *   2. Create a new component under `./steps/`
 *   3. Add one case to `renderStep()` below
 */
export function LessonScreen({ navigation, lesson }: Props) {
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = React.useState(0);
  const [challengeData, setChallengeData] = React.useState<ChallengeData | null>(null);

  React.useEffect(() => {
    loadChallengeData().then(setChallengeData);
  }, []);

  const { takePhoto, uploadFromLibrary } = useCapturePhoto({
    challengeData,
    onChallengeUpdate: setChallengeData,
  });

  const total = lesson.steps.length;
  const step = lesson.steps[stepIndex];
  const isLast = stepIndex === total - 1;

  const goBack = () => {
    if (stepIndex === 0) navigation.navigate("home");
    else setStepIndex(stepIndex - 1);
  };
  const goNext = () => {
    if (!isLast) setStepIndex(stepIndex + 1);
  };

  async function handleTakePhoto() {
    const uri = await takePhoto();
    if (uri) navigation.navigate("home");
  }
  async function handleUpload() {
    const uri = await uploadFromLibrary();
    if (uri) navigation.navigate("home");
  }

  return (
    <View style={[sharedStyles.root, { paddingTop: insets.top }]}>
      {/* ── Header: Close (X) + progress pills ── */}
      <View style={sharedStyles.header}>
        <Pressable
          accessibilityLabel="Close lesson"
          hitSlop={12}
          onPress={() => navigation.navigate("home")}
        >
          <Svg width={22} height={22} viewBox="0 0 22 22">
            <Line
              x1={6}
              y1={6}
              x2={16}
              y2={16}
              stroke={tokens.onSurface}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
            <Line
              x1={16}
              y1={6}
              x2={6}
              y2={16}
              stroke={tokens.onSurface}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>

        <View style={styles.pillRow}>
          {lesson.steps.map((_, i) => (
            <View
              key={i}
              style={[styles.pill, i === stepIndex && styles.pillActive]}
            >
              {i === stepIndex && (
                <LinearGradient
                  colors={[tokens.primary, tokens.primaryContainer]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.pillFill}
                />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* ── Scrollable step body ── */}
      <ScrollView
        style={sharedStyles.scroll}
        contentContainerStyle={[
          sharedStyles.scrollContent,
          { paddingBottom: 180 + insets.bottom }, // leave room for sticky footer
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={sharedStyles.section}>
          <Text style={sharedStyles.label}>
            Step {stepIndex + 1} of {total}
          </Text>
          <Text style={styles.stepTitle}>{step.title}</Text>
        </View>

        {renderStep(step)}
      </ScrollView>

      {/* ── Sticky footer CTAs (adaptive per step kind) ── */}
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {step.kind === "teach" && (
          <>
            <Pressable style={styles.primaryBtn} onPress={goNext} disabled={isLast}>
              <LinearGradient
                colors={[tokens.primary, tokens.primaryContainer]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.primaryBtnGradient}
              >
                <Text style={styles.primaryBtnText}>Next</Text>
              </LinearGradient>
            </Pressable>
            <Pressable style={styles.ghostBtn} onPress={goBack}>
              <Text style={styles.ghostBtnText}>
                {stepIndex === 0 ? "Cancel" : "Back"}
              </Text>
            </Pressable>
          </>
        )}

        {step.kind === "challenge" && (
          <>
            <Pressable style={styles.primaryBtn} onPress={handleTakePhoto}>
              <LinearGradient
                colors={[tokens.primary, tokens.primaryContainer]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.primaryBtnGradient}
              >
                <CameraIcon color="#ffffff" />
                <Text style={styles.primaryBtnText}>Take Photo</Text>
              </LinearGradient>
            </Pressable>
            <Pressable style={styles.ghostBtn} onPress={handleUpload}>
              <UploadIcon />
              <Text style={styles.ghostBtnText}>Upload from Library</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

/**
 * Dispatch per step kind. Add a case here when introducing a new `LessonStep` variant.
 * The `never` default ensures the compiler flags missing cases.
 */
function renderStep(step: LessonStep) {
  switch (step.kind) {
    case "teach":
      return <TeachStep step={step} />;
    case "challenge":
      return <ChallengeStep step={step} />;
    default: {
      const _exhaustive: never = step;
      return _exhaustive;
    }
  }
}

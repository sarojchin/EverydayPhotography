/**
 * Lesson shape. Decoupled from screen rendering so content can be swapped
 * by editing a data module only.
 */

import type { ImageSourcePropType } from "react-native";

export type TeachStep = {
  kind: "teach";
  title: string;
  body: string;
  /** Four-stop gradient used as the illustration card background (shown when no image, or as underlay). */
  gradient: readonly [string, string, string, string];
  /** Optional photo shown inside the illustration card, filling it with resizeMode "cover". */
  image?: ImageSourcePropType;
};

export type ChallengeStep = {
  kind: "challenge";
  title: string;
  intro: string;
  shots: string[];
};

export type LessonStep = TeachStep | ChallengeStep;

export type Lesson = {
  id: string;
  /** 1..30 — position within the 30-day challenge. Indexes the lesson registry. */
  day: number;
  title: string;
  subtitle: string;
  /** Representative photo used for the HomeScreen hero and LessonsScreen thumbnail. */
  coverImage?: ImageSourcePropType;
  steps: LessonStep[];
};

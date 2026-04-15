/**
 * Lesson shape. Decoupled from screen rendering so content can be swapped
 * by editing a data module only.
 */

export type TeachStep = {
  kind: "teach";
  title: string;
  body: string;
  /** Four-stop gradient used for the illustration card (same recipe as HomeScreen's photo card). */
  gradient: readonly [string, string, string, string];
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
  steps: LessonStep[];
};

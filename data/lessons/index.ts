/**
 * Lesson registry for the 30-day challenge.
 *
 * Lessons are day-indexed (1..30). The registry is sparse — unauthored days
 * have no entry and render as "locked" in the UI. Add a new lesson by:
 *   1. Creating `data/lessons/days/day<NN>.ts` with `day: <N>` set.
 *   2. Importing + adding it to the `LESSONS` array below.
 *
 * The screen layer reads lessons through `getLessonForDay(day)` and enforces
 * access via `isLessonUnlocked(day, currentDay)`.
 */
import type { Lesson } from "@/types/lesson";
import { DAY_01_LESSON } from "./days/day01";

export const TOTAL_DAYS = 30;

/** Ordered registry of authored lessons. */
export const LESSONS: Lesson[] = [DAY_01_LESSON];

const LESSONS_BY_DAY: Record<number, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.day, l]),
);

/** Returns the lesson for `day` (1..30), or null if no content authored yet. */
export function getLessonForDay(day: number): Lesson | null {
  return LESSONS_BY_DAY[day] ?? null;
}

/**
 * A lesson is unlocked when it's on or before the user's current day
 * AND has authored content. Future days (day > currentDay) are always locked.
 */
export function isLessonUnlocked(day: number, currentDay: number): boolean {
  return day <= currentDay && getLessonForDay(day) !== null;
}

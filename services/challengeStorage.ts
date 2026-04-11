import * as FileSystem from "expo-file-system/legacy";
import type { ChallengeData } from "@/types/challenge";

const DATA_FILE = FileSystem.documentDirectory! + "challenge_data.json";

export function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDayNumber(startDate: string): number {
  const start = new Date(startDate + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return Math.min(Math.max(diff + 1, 1), 30);
}

export async function loadChallengeData(): Promise<ChallengeData> {
  try {
    const info = await FileSystem.getInfoAsync(DATA_FILE);
    if (info.exists) {
      const raw = await FileSystem.readAsStringAsync(DATA_FILE);
      return JSON.parse(raw) as ChallengeData;
    }
  } catch {}
  const data: ChallengeData = { startDate: todayStr(), streak: 1, lastPhotoDate: null };
  await FileSystem.writeAsStringAsync(DATA_FILE, JSON.stringify(data));
  return data;
}

export async function recordPhotoForToday(data: ChallengeData): Promise<ChallengeData> {
  const today = todayStr();
  if (data.lastPhotoDate === today) return data;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const newStreak = data.lastPhotoDate === yesterday ? data.streak + 1 : 1;
  const updated: ChallengeData = { ...data, lastPhotoDate: today, streak: newStreak };
  await FileSystem.writeAsStringAsync(DATA_FILE, JSON.stringify(updated));
  return updated;
}

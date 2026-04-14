import React from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import type { ChallengeData } from "@/types/challenge";
import { recordPhotoForToday } from "@/services/challengeStorage";

type Args = {
  challengeData: ChallengeData | null;
  onChallengeUpdate: (data: ChallengeData) => void;
};

type Result = {
  photoUri: string | null;
  takePhoto: () => Promise<string | null>;
  uploadFromLibrary: () => Promise<string | null>;
};

const PICKER_OPTIONS: ImagePicker.ImagePickerOptions = {
  mediaTypes: "images",
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.92,
};

/**
 * Shared camera/library capture flow. Used by HomeScreen's CTAs and the
 * LessonScreen's 5-minute practice step. On success, also records the photo
 * toward today's streak via `recordPhotoForToday`.
 *
 * Returns the captured/selected URI, or null if the user cancelled or denied
 * permission. Callers can use the return value to trigger navigation.
 */
export function useCapturePhoto({ challengeData, onChallengeUpdate }: Args): Result {
  const [photoUri, setPhotoUri] = React.useState<string | null>(null);

  async function handleAsset(uri: string) {
    setPhotoUri(uri);
    if (challengeData) {
      const updated = await recordPhotoForToday(challengeData);
      onChallengeUpdate(updated);
    }
  }

  async function takePhoto(): Promise<string | null> {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera access needed",
        "Allow camera access in Settings to take photos."
      );
      return null;
    }
    const result = await ImagePicker.launchCameraAsync(PICKER_OPTIONS);
    if (result.canceled) return null;
    const uri = result.assets[0].uri;
    await handleAsset(uri);
    return uri;
  }

  async function uploadFromLibrary(): Promise<string | null> {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Photo library access needed",
        "Allow photo library access in Settings to upload photos."
      );
      return null;
    }
    const result = await ImagePicker.launchImageLibraryAsync(PICKER_OPTIONS);
    if (result.canceled) return null;
    const uri = result.assets[0].uri;
    await handleAsset(uri);
    return uri;
  }

  return { photoUri, takePhoto, uploadFromLibrary };
}

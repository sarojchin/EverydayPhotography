import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { GalleryPhoto } from "@/types/gallery";
import { styles } from "./styles";

export function GalleryCard({ photo }: { photo: GalleryPhoto }) {
  return (
    <View style={styles.galleryCardWrapper}>
      <View style={[styles.galleryCardImage, { aspectRatio: photo.aspectRatio }]}>
        {photo.uri ? (
          <Image
            source={{ uri: photo.uri }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
        ) : (
          <LinearGradient
            colors={photo.gradientColors}
            style={StyleSheet.absoluteFill}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        )}
      </View>
      <View style={styles.galleryCardMeta}>
        <Text style={styles.galleryCardCategory}>{photo.category}</Text>
        <Text style={styles.galleryCardDay}>
          Day {String(photo.day).padStart(2, "0")}
        </Text>
      </View>
    </View>
  );
}

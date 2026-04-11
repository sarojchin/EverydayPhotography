import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { NavigationProps } from "@/types/navigation";
import { GALLERY_MOCK_PHOTOS } from "@/data/galleryMockPhotos";
import { BottomNav } from "@/components/BottomNav";
import { ApertureIcon } from "@/components/icons";
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";
import { GalleryCard } from "./GalleryCard";

export function GalleryScreen({ navigation }: { navigation: NavigationProps }) {
  const insets = useSafeAreaInsets();
  const hasPhotos = GALLERY_MOCK_PHOTOS.some((p) => p.uri !== null);
  const leftCol = GALLERY_MOCK_PHOTOS.filter((_, i) => i % 2 === 0);
  const rightCol = GALLERY_MOCK_PHOTOS.filter((_, i) => i % 2 !== 0);

  return (
    <View style={[sharedStyles.root, { paddingTop: insets.top }]}>
      {/* ── Header ── */}
      <View style={sharedStyles.header}>
        <View style={sharedStyles.headerLeft}>
          <ApertureIcon />
          <Text style={sharedStyles.headerTitle}>THE EDITORIAL EYE</Text>
        </View>
        <View style={styles.avatarCircle} />
      </View>

      {/* ── Scrollable content ── */}
      <ScrollView
        style={sharedStyles.scroll}
        contentContainerStyle={[sharedStyles.scrollContent, { paddingHorizontal: 0 }, !hasPhotos && { flexGrow: 1 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <View style={{ paddingHorizontal: 24, marginTop: 20 }}>
          <Text style={styles.galleryHeading}>GALLERY</Text>
          <Text style={styles.gallerySubtitle}>30-DAY PERSPECTIVE CHALLENGE</Text>
        </View>

        {/* Masonry grid or empty state */}
        {hasPhotos ? (
          <View style={styles.masonryContainer}>
            <View style={styles.masonryCol}>
              {leftCol.map((photo) => (
                <GalleryCard key={photo.id} photo={photo} />
              ))}
            </View>
            <View style={styles.masonryCol}>
              {rightCol.map((photo) => (
                <GalleryCard key={photo.id} photo={photo} />
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.galleryEmptyState}>
            <Text style={styles.galleryEmptyHeadline}>
              {"Your first\nshot\nawaits."}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* ── Bottom navigation ── */}
      <BottomNav
        activeScreen="gallery"
        navigate={navigation.navigate}
        bottomInset={insets.bottom}
      />
    </View>
  );
}

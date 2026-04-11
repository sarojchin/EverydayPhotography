# Everyday Photography — Architecture Reference

Single source of truth. Read this FIRST — do not glob/grep for structure.
All architecture changes must update this file.

## Stack & Commands

| | |
|-|-|
| Runtime | React Native 0.81 + Expo SDK 54 |
| Language | TypeScript 5.9, strict mode |
| Entry | `index.ts` → `App.tsx` (default export, do not change) |
| Path alias | `@/*` → `./*` (tsconfig.json) |
| Type check | `npx tsc --noEmit` |
| Run | `npx expo start` |

## File Map

```
App.tsx                             Root: fonts, activeScreen state, screen routing
index.ts                            Expo entry — DO NOT MODIFY
constants/tokens.ts                 Design tokens (colors, surfaces)
types/navigation.ts                 ScreenName, NavigationProps
types/challenge.ts                  ChallengeData
types/gallery.ts                    GalleryPhoto
services/challengeStorage.ts        Persistence: load/record challenge data
data/galleryMockPhotos.ts           GALLERY_MOCK_PHOTOS array
components/PlatformBlur.tsx         Cross-platform blur wrapper
components/BottomNav.tsx            Shared bottom tab bar
components/icons/index.ts           Barrel — re-exports all icons
components/icons/*.tsx              One file per icon (8 total)
screens/HomeScreen/index.tsx        Home screen component
screens/HomeScreen/styles.ts        Home-only styles
screens/GalleryScreen/index.tsx     Gallery screen component
screens/GalleryScreen/GalleryCard.tsx  Gallery card sub-component
screens/GalleryScreen/styles.ts     Gallery-only styles
styles/shared.ts                    Shared layout styles (root, header, scroll, section, nav)
design/DESIGN.md                    Full design system spec — READ before any UI work
design/home.png                     Home screen mockup
design/gallery.png                  Gallery screen mockup
```

## Import Cheatsheet

Copy-paste these. Do not guess import paths.

```typescript
// Types
import type { ScreenName, NavigationProps } from "@/types/navigation";
import type { ChallengeData } from "@/types/challenge";
import type { GalleryPhoto } from "@/types/gallery";

// Services
import { loadChallengeData, recordPhotoForToday, getDayNumber, todayStr } from "@/services/challengeStorage";

// Data
import { GALLERY_MOCK_PHOTOS } from "@/data/galleryMockPhotos";

// Components
import { PlatformBlur } from "@/components/PlatformBlur";
import { BottomNav } from "@/components/BottomNav";

// Icons (all from barrel)
import { ApertureIcon, MenuIcon, FlameIcon, CameraIcon, UploadIcon, HomeIcon, GalleryIcon, CameraNavIcon } from "@/components/icons";

// Styles
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";  // screen-local, use relative

// Tokens
import * as tokens from "@/constants/tokens";
// tokens.surface, tokens.surfaceLow, tokens.surfaceHighest, tokens.surfaceLowest
// tokens.primary (#ab3500), tokens.primaryContainer (#ff6b35)
// tokens.tertiary (#00677e), tokens.tertiaryContainer (#00a7cb)
// tokens.onSurface, tokens.onSurfaceMuted, tokens.outlineVariant

// Fonts (only in App.tsx)
import { Manrope_400Regular, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";

// Expo libs
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system/legacy";  // NOT "expo-file-system"
import { useSafeAreaInsets } from "react-native-safe-area-context";
```

## Component Props Quick-Ref

```typescript
// Every screen receives this:
{ navigation: NavigationProps }  // where NavigationProps = { navigate: (screen: ScreenName) => void }

// BottomNav
{ activeScreen: ScreenName, navigate: (screen: ScreenName) => void, bottomInset: number }

// PlatformBlur
{ style?: object, children?: ReactNode, intensity?: number (default 40), tint?: "dark" | "light" | "systemChromeMaterialLight" }

// Icons with props:
CameraIcon({ color?: string })     // defaults to tokens.onSurface
HomeIcon({ active?: boolean })     // fills + full opacity when active
GalleryIcon({ active?: boolean })  // fills + full opacity when active
// All other icons: no props
```

## Shared Styles Available in `sharedStyles`

`root`, `header`, `headerLeft`, `headerTitle`, `scroll`, `scrollContent`, `section`, `label`, `bottomNav`, `navItem`, `navLabel`, `navLabelActive`

## Navigation

State-based, no library. `App.tsx` holds `activeScreen: ScreenName` and passes `{ navigate }` to each screen. `BottomNav` is a shared component included by each screen.

**Current `ScreenName` values:** `"home" | "gallery"`

## Recipes

### Add a new screen

1. Add name to `ScreenName` union in `types/navigation.ts`
2. Create `screens/<Name>/index.tsx`:
   ```typescript
   import { sharedStyles } from "@/styles/shared";
   import { BottomNav } from "@/components/BottomNav";
   import type { NavigationProps } from "@/types/navigation";
   import { useSafeAreaInsets } from "react-native-safe-area-context";
   import { styles } from "./styles";
   export function NewScreen({ navigation }: { navigation: NavigationProps }) { ... }
   ```
3. Create `screens/<Name>/styles.ts`:
   ```typescript
   import { StyleSheet } from "react-native";
   import * as tokens from "@/constants/tokens";
   export const styles = StyleSheet.create({ ... });
   ```
4. Add routing branch in `App.tsx`:
   ```tsx
   {activeScreen === "name" && <NewScreen navigation={{ navigate }} />}
   ```
5. Optional: add tab in `components/BottomNav.tsx`

**Files touched:** `types/navigation.ts` (1 line), `App.tsx` (3 lines), optionally `BottomNav.tsx`. Zero changes to existing screens.

### Add a new icon

1. Create `components/icons/NewIcon.tsx` (export named function)
2. Add re-export line to `components/icons/index.ts`
3. Import from `@/components/icons` wherever needed

### Add a new shared component

1. Create `components/ComponentName.tsx` with named export
2. Import as `import { ComponentName } from "@/components/ComponentName"`

### Add a new type

1. Add to existing file in `types/` or create new `types/name.ts`
2. Import as `import type { TypeName } from "@/types/name"`

## Gotchas

- **expo-file-system:** Import from `"expo-file-system/legacy"`, NOT `"expo-file-system"`. The new API has a completely different interface.
- **Default export:** Only `App.tsx` uses default export. Everything else uses named exports.
- **Fonts:** Loaded once in `App.tsx`. Screens reference font families by string name (e.g., `"Manrope_700Bold"`). Do not re-import font objects in screens.
- **Screen-local styles:** Always `import { styles } from "./styles"` (relative). Shared styles use `@/styles/shared`.
- **BottomNav:** Each screen renders its own `<BottomNav>` instance. It is not in `App.tsx`.
- **Headers:** Inline per screen, not a shared component. HomeScreen header has MenuIcon; GalleryScreen header has avatar circle.
- **No borders:** Design system prohibits 1px borders. Use surface color shifts. See `design/DESIGN.md`.
- **No shadows:** Use tonal layering. Never `rgba(0,0,0,...)` box shadows.
- **Path alias:** Always use `@/` for cross-directory imports. Relative `./` only for same-directory (e.g., `./styles`, `./GalleryCard`).

## Dependency Graph (what touches what)

```
App.tsx ──→ types/navigation, screens/*
screens/* ──→ types/*, services/*, data/*, components/*, styles/shared, ./styles
components/BottomNav ──→ components/PlatformBlur, components/icons, styles/shared, types/navigation
components/icons/* ──→ react-native-svg, constants/tokens
styles/shared ──→ constants/tokens
services/challengeStorage ──→ expo-file-system/legacy, types/challenge
data/galleryMockPhotos ──→ types/gallery
```

**If you change `types/navigation.ts`** → may affect: App.tsx, all screens, BottomNav
**If you change `constants/tokens.ts`** → may affect: all styles, all icons, components
**If you change `styles/shared.ts`** → may affect: all screens, BottomNav
**If you change a screen's `styles.ts`** → affects only that screen (no propagation)

## Design System Summary

Read `design/DESIGN.md` for full spec. Quick reference:

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | #fcf9f8 | Base background |
| `surfaceLow` | #f6f3f2 | Recessed areas |
| `surfaceHighest` | #e5e2e1 | Interactive cards, progress tracks |
| `surfaceLowest` | #ffffff | Lifted content cards |
| `primary` | #ab3500 | CTA gradient start, active nav |
| `primaryContainer` | #ff6b35 | CTA gradient end, category dot |
| `tertiary` | #00677e | Streak ring gradient start |
| `tertiaryContainer` | #00a7cb | Streak ring gradient end |
| `onSurface` | #1c1b1b | Primary text (never use pure black) |
| `onSurfaceMuted` | rgba(28,27,27,0.45) | Secondary text, labels |
| `outlineVariant` | #e1bfb5 | Ghost borders at 15% opacity |

Typography: **Manrope** for headlines/display, **Inter** for body/labels.

## Data Persistence

`services/challengeStorage.ts` — JSON file at `documentDirectory/challenge_data.json`

```typescript
type ChallengeData = { startDate: string, streak: number, lastPhotoDate: string | null }
// loadChallengeData(): Promise<ChallengeData>      — reads or initializes
// recordPhotoForToday(data): Promise<ChallengeData> — updates streak + lastPhotoDate
// getDayNumber(startDate): number                   — day 1-30 from start
// todayStr(): string                                — "YYYY-MM-DD"
```



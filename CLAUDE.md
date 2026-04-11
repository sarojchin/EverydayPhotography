# Everyday Photography — Architecture Reference

This is the single source of truth for project architecture. Consult this before
exploring the codebase. All structural changes must be logged here.

## Stack

- **Runtime:** React Native 0.81 + Expo SDK 54
- **Language:** TypeScript 5.9 (strict mode)
- **Entry:** `index.ts` → `App.tsx` (default export)
- **Path alias:** `@/*` → `./*` (configured in `tsconfig.json`)

## Directory Structure

```
├── App.tsx                        # Root: font loading, nav state, screen routing (~50 lines)
├── index.ts                       # Expo entry point (do not modify)
├── constants/
│   └── tokens.ts                  # Design tokens: surface, primary, tertiary, text colors
├── types/
│   ├── navigation.ts              # ScreenName union, NavigationProps type
│   ├── challenge.ts               # ChallengeData type
│   └── gallery.ts                 # GalleryPhoto type
├── services/
│   └── challengeStorage.ts        # File-based persistence (expo-file-system/legacy)
├── data/
│   └── galleryMockPhotos.ts       # GALLERY_MOCK_PHOTOS array
├── components/
│   ├── PlatformBlur.tsx           # Cross-platform blur (BlurView on iOS, View on Android)
│   ├── BottomNav.tsx              # Shared bottom tab bar (Home, Gallery, Photos)
│   └── icons/
│       ├── index.ts               # Barrel re-exports all icons
│       ├── ApertureIcon.tsx
│       ├── MenuIcon.tsx
│       ├── FlameIcon.tsx
│       ├── CameraIcon.tsx
│       ├── UploadIcon.tsx
│       ├── HomeIcon.tsx
│       ├── GalleryIcon.tsx
│       └── CameraNavIcon.tsx
├── screens/
│   ├── HomeScreen/
│   │   ├── index.tsx              # Challenge tracking, photo capture, streak ring
│   │   └── styles.ts              # Home-only styles
│   └── GalleryScreen/
│       ├── index.tsx              # Masonry photo gallery with empty state
│       ├── GalleryCard.tsx        # Individual gallery card component
│       └── styles.ts              # Gallery-only styles
├── styles/
│   └── shared.ts                  # Layout styles shared across all screens
├── design/
│   ├── DESIGN.md                  # "The Digital Gallery" design system spec
│   ├── home.png                   # Home screen mockup
│   └── gallery.png                # Gallery screen mockup
└── assets/                        # App icons and splash screen images
```

## Navigation

Navigation uses React state — no external navigation library.

- `App.tsx` holds `activeScreen: ScreenName` state and a `navigate` function
- Each screen receives `{ navigation: NavigationProps }` as props
- `BottomNav` is a shared component that renders the tab bar on every screen

**`ScreenName` union** (`types/navigation.ts`):
```typescript
export type ScreenName = "home" | "gallery";
```

**`NavigationProps`** (`types/navigation.ts`):
```typescript
export type NavigationProps = { navigate: (screen: ScreenName) => void };
```

## Adding a New Screen

1. Add the screen name to the `ScreenName` union in `types/navigation.ts`
2. Create `screens/<ScreenName>/index.tsx` and `screens/<ScreenName>/styles.ts`
3. The screen component receives `{ navigation: NavigationProps }` as props
4. Add a routing branch in `App.tsx`:
   ```tsx
   {activeScreen === "newscreen" && <NewScreen navigation={{ navigate }} />}
   ```
5. No existing screen files need modification

If the screen needs a tab in the bottom bar, add an entry in `components/BottomNav.tsx`.

## Style Architecture

Styles are split into shared and co-located:

- **`styles/shared.ts`** — Layout primitives used by all screens:
  `root`, `header`, `headerLeft`, `headerTitle`, `scroll`, `scrollContent`,
  `section`, `label`, `bottomNav`, `navItem`, `navLabel`, `navLabelActive`
- **`screens/<Screen>/styles.ts`** — Screen-specific styles, only imported by that screen

Screens import both:
```typescript
import { sharedStyles } from "@/styles/shared";
import { styles } from "./styles";
```

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `expo-image-picker` | Camera and photo library access |
| `expo-file-system/legacy` | Challenge data persistence (JSON file) |
| `expo-linear-gradient` | Gradient backgrounds and CTAs |
| `expo-blur` | iOS glassmorphism effects |
| `react-native-svg` | All SVG icon rendering |
| `react-native-safe-area-context` | Safe area insets |
| `@expo-google-fonts/manrope` | Display/headline font (400, 600, 700, 800) |
| `@expo-google-fonts/inter` | Body/label font (400, 500, 600) |

## Data Persistence

Challenge progress is stored as JSON via `expo-file-system/legacy`:
- **File:** `FileSystem.documentDirectory + "challenge_data.json"`
- **Shape:** `{ startDate: string, streak: number, lastPhotoDate: string | null }`
- **Functions** in `services/challengeStorage.ts`:
  - `loadChallengeData()` — reads or initializes challenge data
  - `recordPhotoForToday(data)` — updates streak and last photo date
  - `getDayNumber(startDate)` — calculates current day (1-30) from start date
  - `todayStr()` — returns today as "YYYY-MM-DD"

## Design System

Defined in `design/DESIGN.md` and `constants/tokens.ts`. Key rules:
- **No 1px borders** — use surface color shifts for separation
- **Tonal layering** over shadows — surface hierarchy: `surface` → `surfaceLow` → `surfaceHighest` → `surfaceLowest`
- **Glassmorphism** for floating elements (nav bar, category tags)
- **Primary gradient** (`#ab3500` → `#ff6b35`) for CTAs
- **Tertiary gradient** (`#00677e` → `#00a7cb`) for streak bloom ring
- **Typography:** Manrope for headlines, Inter for body/labels

## Components Reference

### `PlatformBlur`
Cross-platform blur wrapper. Uses native `BlurView` on iOS, semi-transparent `View` on Android.
Props: `style`, `children`, `intensity` (default 40), `tint` ("dark" | "light" | "systemChromeMaterialLight")

### `BottomNav`
Shared tab bar rendered at the bottom of every screen.
Props: `activeScreen: ScreenName`, `navigate: (screen: ScreenName) => void`, `bottomInset: number`
Currently has 3 tabs: Home, Gallery, Photos.

### Icons (`components/icons/`)
All icons are inline SVG components using `react-native-svg`. Import from `@/components/icons`:
- `ApertureIcon` — app logo (orange aperture)
- `MenuIcon` — hamburger menu (3 lines)
- `FlameIcon` — streak flame with gradient
- `CameraIcon({ color })` — camera body, configurable color
- `UploadIcon` — upload arrow
- `HomeIcon({ active })` — house, fills when active
- `GalleryIcon({ active })` — 2x2 grid, fills when active
- `CameraNavIcon` — camera for nav bar (always inactive style)

## Screens Reference

### HomeScreen (`screens/HomeScreen/`)
Main challenge tracking screen. Shows:
- Day counter (Day X of 30)
- Current streak with flame icon
- Streak Bloom SVG ring (tertiary gradient progress)
- Linear progress bar (primary gradient)
- Photo card with camera placeholder or captured image
- Daily prompt text
- "Take Photo" (primary CTA) and "Upload from Library" (ghost CTA)

### GalleryScreen (`screens/GalleryScreen/`)
30-day photo gallery. Shows:
- "GALLERY" heading with subtitle
- Masonry 2-column grid of `GalleryCard` components (when photos exist)
- Empty state: "Your first shot awaits." (when no photos)

## Verification

- **Type check:** `npx tsc --noEmit`
- **Run:** `npx expo start`

## Conventions

- One component per file, named exports (except `App.tsx` which uses default export)
- Icons live in `components/icons/` with a barrel `index.ts`
- Screen folders: `screens/<Name>/index.tsx` + `styles.ts`, optionally sub-components
- Types in `types/`, services in `services/`, static data in `data/`
- Import with `@/` path alias, never relative paths above the current directory
- Headers are inline per screen (structurally different between screens)

## Changelog

| Date | Change |
|------|--------|
| 2026-04-11 | Initial modular architecture: split monolithic App.tsx into types/, services/, data/, components/, screens/, styles/ |

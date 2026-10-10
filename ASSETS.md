# SPARK Studio — Asset & License Manifest

All assets utilized in SPARK Studio comply with the project policy: strictly free, properly licensed, and procedurally generated assets.

| Asset / Component | Source | License | Attribution | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| **SPARK Core 3D Geometry** | Procedural Three.js Geometries (`DodecahedronGeometry`, `IcosahedronGeometry`, `TorusGeometry`, `BoxGeometry`, `OctahedronGeometry`) | MIT | Built internally for SPARK Studio | Signature hero 3D sculptural metaphor & scroll transformation |
| **SPARK Core Fallback Graphic** | Custom SVG vector illustration (`HeroSceneFallback.tsx`) | MIT | Built internally for SPARK Studio | Accessible 2D fallback when WebGL is unavailable or fails |
| **Brand Identity Mark & Wordmark** | Custom SVG (`Header.tsx`, `Footer.tsx`, `og-default.svg`) | MIT | Built internally for SPARK Studio | Studio logo lockup, avatar, and navigation branding |
| **Concept Thumbnails (FORM, ORBIT, FIELDNOTES)** | Custom procedural SVG graphics | MIT | Built internally for SPARK Studio | Visual representations for conceptual case studies |
| **Typography (DM Sans & Inter)** | Google Fonts | SIL Open Font License 1.1 | Colophon Foundry (DM Sans), Rasmus Andersson (Inter) | Display and body typography across website |
| **Interface Icons** | `lucide-react` | ISC License | Lucide Project | Minimal, restrained navigation and status icons |
| **3D Environment Map (`preset="city"`)** | `@react-three/drei` Environment | CC0 / Poly Haven | Poly Haven (uncompressed HDR lighting) | Realistic physical reflections on sculptural materials |

### Asset Policy Compliance
- No paid stock assets or unlicensed models used.
- All 3D rendering uses standard lightweight procedural primitives with low polygon overhead.
- No heavy uncompressed textures blocking initial Contentful Paint.

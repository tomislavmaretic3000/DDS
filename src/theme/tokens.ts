// Dynasty Design System 2025 — extracted from Figma via API
// Source: https://www.figma.com/design/Lo40qGQrkd2yRCIK7VTbHy/Dynasty-Design-System-2025

export const tokens = {
  color: {
    // ── Brand ─────────────────────────────────────────────────────────────
    // Primary button / CTA color (dark navy)
    primary: '#020c33',
    primaryHover: '#6270a5',

    // Secondary accent (lime green)
    secondary: '#b0d361',

    // ── Brand blue scale (primitives) ─────────────────────────────────────
    brand: {
      100: '#dbe3f5',
      200: '#c8d5f2',
      300: '#b4c8ef',
      400: '#8aadea',
      500: '#5a94e3',
      600: '#457ac0',
      700: '#35619a',
      800: '#274875',
      850: '#1e3a5f',
      900: '#1a3251',
      950: '#152740',
    },

    // ── Neutral / Zinc ────────────────────────────────────────────────────
    neutral: {
      50:  '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },

    // ── Semantic ──────────────────────────────────────────────────────────
    error:   '#ef4444',   // red-500
    warning: '#f59e0b',   // amber-500
    success: '#10b981',   // emerald-500
    info:    '#3b82f6',   // blue-500

    // ── Extended palettes (full Tailwind-style scales) ────────────────────
    red: {
      50:  '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
      400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
      800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a',
    },
    amber: {
      50:  '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
      400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
      800: '#92400e', 900: '#78350f', 950: '#451a03',
    },
    emerald: {
      50:  '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
      400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
      800: '#065f46', 900: '#064e3b', 950: '#022c22',
    },
    blue: {
      50:  '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
      400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
      800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
    },

    // ── Text ──────────────────────────────────────────────────────────────
    text: {
      primary:   '#111928',
      secondary: '#374151',
      disabled:  '#a1a1aa',
      inverse:   '#ffffff',
    },

    // ── Background ────────────────────────────────────────────────────────
    background: {
      default: '#ffffff',
      paper:   '#fafafa',
    },

    // ── Border ────────────────────────────────────────────────────────────
    border: {
      default:  '#d4d4d8',
      muted:    '#e4e4e7',
      strong:   '#a1a1aa',
      outline:  '#9ca3af',
    },
  },

  // ── Typography ──────────────────────────────────────────────────────────
  font: {
    family: '"Montserrat", "Helvetica Neue", "Arial", sans-serif',
    size: {
      xs:   '0.625rem',   // 10px — Caption
      sm:   '0.75rem',    // 12px — Body2, Button small, Overline
      md:   '0.875rem',   // 14px — Body1, H5, Button, Subtitle2
      lg:   '1rem',       // 16px — H4, Subtitle1
      xl:   '1.125rem',   // 18px — H3
      '2xl': '1.25rem',   // 20px — H2
      '3xl': '1.75rem',   // 28px — H1
    },
    weight: {
      regular:  400,
      medium:   500,
      semibold: 600,
      bold:     700,
    },
    lineHeight: {
      tight:  1.143,   // 16px on 14px (Body2)
      normal: 1.429,   // 20px on 14px (Body1)
      relaxed: 1.5,    // 24px on 16px (Subtitle1)
    },
    letterSpacing: {
      normal:    '0em',
      button:    '0.029em',  // 0.4px on 14px
      overline:  '0.133em',  // 1.6px on 12px
    },
  },

  // ── Shape / Border radius ────────────────────────────────────────────────
  radius: {
    none: 0,
    sm:   4,    // TextField input
    md:   6,    // Buttons, most components (global default)
    lg:   8,    // Focus rings, Cards
    xl:   16,   // Textarea
    pill: 999,
  },

  // ── Spacing (base unit = 8px) ─────────────────────────────────────────────
  // MUI spacing(n) = n * 8px
  // Figma spacing scale:
  //   Small   0–8px:  spacing(0), spacing(0.5)=4, spacing(1)=8
  //   Medium 10–24px: spacing(1.25)=10, spacing(1.5)=12, spacing(2)=16, spacing(2.5)=20, spacing(3)=24
  //   Large  32–80px: spacing(4)=32, spacing(5)=40, spacing(6)=48, spacing(8)=64, spacing(10)=80
  spacingBase: 8,

  // ── Shadows / Elevation ───────────────────────────────────────────────────
  shadow: {
    xs: '0px 2px 2px rgba(0, 0, 0, 0.12)',
    sm: '0px 8px 16px rgba(0, 0, 0, 0.15)',
    lg: '0px 16px 48px rgba(0, 0, 0, 0.18)',
  },
} as const

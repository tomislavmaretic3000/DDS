import { createTheme } from '@mui/material/styles'
import { tokens } from './tokens'

export const theme = createTheme({
  // ── Palette ───────────────────────────────────────────────────────────────
  palette: {
    primary: {
      main:         tokens.color.primary,          // #020c33 dark navy
      light:        tokens.color.brand[700],        // #35619a
      dark:         tokens.color.brand[950],        // #152740
      contrastText: '#ffffff',
    },
    secondary: {
      main:         tokens.color.secondary,         // #b0d361 lime green
      light:        '#c8e07e',
      dark:         '#8aaa42',
      contrastText: tokens.color.text.primary,      // dark text on lime
    },
    error: {
      main:  tokens.color.error,                    // #ef4444
      light: tokens.color.red[300],
      dark:  tokens.color.red[700],
    },
    warning: {
      main:  tokens.color.warning,                  // #f59e0b
      light: tokens.color.amber[300],
      dark:  tokens.color.amber[700],
    },
    success: {
      main:  tokens.color.success,                  // #10b981
      light: tokens.color.emerald[300],
      dark:  tokens.color.emerald[700],
    },
    info: {
      main:  tokens.color.info,                     // #3b82f6
      light: tokens.color.blue[300],
      dark:  tokens.color.blue[700],
    },
    grey: {
      50:  tokens.color.neutral[50],
      100: tokens.color.neutral[100],
      200: tokens.color.neutral[200],
      300: tokens.color.neutral[300],
      400: tokens.color.neutral[400],
      500: tokens.color.neutral[500],
      600: tokens.color.neutral[600],
      700: tokens.color.neutral[700],
      800: tokens.color.neutral[800],
      900: tokens.color.neutral[900],
    },
    text: {
      primary:   tokens.color.text.primary,         // #111928
      secondary: tokens.color.text.secondary,       // #374151
      disabled:  tokens.color.text.disabled,        // #a1a1aa
    },
    background: {
      default: tokens.color.background.default,
      paper:   tokens.color.background.paper,
    },
    divider: tokens.color.border.muted,
  },

  // ── Typography ────────────────────────────────────────────────────────────
  typography: {
    fontFamily: tokens.font.family,

    h1: {
      fontSize:      tokens.font.size['3xl'],       // 28px desktop
      fontWeight:    tokens.font.weight.bold,
      lineHeight:    '32px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    h2: {
      fontSize:      tokens.font.size['2xl'],       // 20px
      fontWeight:    tokens.font.weight.bold,
      lineHeight:    '28px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    h3: {
      fontSize:      tokens.font.size.xl,           // 18px
      fontWeight:    tokens.font.weight.bold,
      lineHeight:    '24px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    h4: {
      fontSize:      tokens.font.size.lg,           // 16px
      fontWeight:    tokens.font.weight.bold,
      lineHeight:    '20px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    h5: {
      fontSize:      tokens.font.size.md,           // 14px
      fontWeight:    tokens.font.weight.semibold,
      lineHeight:    '20px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    h6: {
      fontSize:      tokens.font.size.md,           // 14px (no H6 in Figma, mirrors H5)
      fontWeight:    tokens.font.weight.semibold,
      lineHeight:    '20px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
    subtitle1: {
      fontSize:      tokens.font.size.lg,           // 16px
      fontWeight:    tokens.font.weight.medium,
      lineHeight:    '24px',
    },
    subtitle2: {
      fontSize:      tokens.font.size.md,           // 14px
      fontWeight:    tokens.font.weight.medium,
      lineHeight:    '20px',
    },
    body1: {
      fontSize:      tokens.font.size.md,           // 14px
      fontWeight:    tokens.font.weight.regular,
      lineHeight:    '20px',
    },
    body2: {
      fontSize:      tokens.font.size.sm,           // 12px
      fontWeight:    tokens.font.weight.medium,
      lineHeight:    '16px',
    },
    caption: {
      fontSize:      tokens.font.size.xs,           // 10px
      fontWeight:    tokens.font.weight.regular,
      lineHeight:    '16px',
    },
    overline: {
      fontSize:      tokens.font.size.sm,           // 12px
      fontWeight:    tokens.font.weight.medium,
      lineHeight:    '16px',
      letterSpacing: tokens.font.letterSpacing.overline,  // 1.6px
      textTransform: 'none' as const,
    },
    button: {
      fontSize:      tokens.font.size.md,           // 14px
      fontWeight:    tokens.font.weight.semibold,
      lineHeight:    '20px',
      letterSpacing: tokens.font.letterSpacing.normal,
    },
  },

  // ── Shape ─────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: tokens.radius.md,                 // 6px — global default
  },

  // ── Spacing ───────────────────────────────────────────────────────────────
  spacing: tokens.spacingBase,                      // 1 unit = 8px

  // ── Component overrides ───────────────────────────────────────────────────
  components: {
    // ── Button ──────────────────────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius:  tokens.radius.md,          // 6px
          fontWeight:    tokens.font.weight.semibold,
          boxShadow:     'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          padding:    '10px 24px',
          fontSize:   tokens.font.size.md,
          lineHeight: '20px',
        },
        sizeMedium: {
          padding:    '8px 20px',
          fontSize:   tokens.font.size.md,
          lineHeight: '20px',
        },
        sizeSmall: {
          padding:    '6px 16px',
          fontSize:   tokens.font.size.sm,
          lineHeight: '16px',
          letterSpacing: tokens.font.letterSpacing.button,
        },
      },
    },

    // ── TextField / OutlinedInput ────────────────────────────────────────────
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.sm,           // 4px
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.color.border.strong,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.color.primary,
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: tokens.color.border.outline,  // #9ca3af
        },
      },
    },

    // ── Card ────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.lg,           // 8px
          boxShadow:    tokens.shadow.sm,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': { paddingBottom: '16px' },
        },
      },
    },

    // ── Paper ────────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        elevation1: { boxShadow: tokens.shadow.xs },
        elevation2: { boxShadow: tokens.shadow.sm },
        elevation3: { boxShadow: tokens.shadow.lg },
      },
    },

    // ── Chip ────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.sm,           // 4px — tags are compact
          fontWeight:   tokens.font.weight.medium,
          fontSize:     tokens.font.size.sm,
        },
      },
    },

    // ── Typography ───────────────────────────────────────────────────────────
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
          subtitle1: 'p', subtitle2: 'p',
          body1: 'p', body2: 'p',
        },
      },
    },

    // ── Alert ────────────────────────────────────────────────────────────────
    // Background colors extracted from Figma Alert component
    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundColor: '#f3f4f6',
          color: tokens.color.text.primary,
          '& .MuiAlert-icon': { color: tokens.color.info },
        },
        standardError: {
          backgroundColor: '#fce9e9',
          color: tokens.color.text.primary,
          '& .MuiAlert-icon': { color: tokens.color.error },
        },
        standardSuccess: {
          backgroundColor: '#e6f9f1',
          color: tokens.color.text.primary,
          '& .MuiAlert-icon': { color: tokens.color.success },
        },
        standardWarning: {
          backgroundColor: '#f7fbef',
          color: tokens.color.text.primary,
          '& .MuiAlert-icon': { color: tokens.color.warning },
        },
        root: {
          borderRadius: tokens.radius.md,
        },
      },
    },

    // ── Divider ──────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: tokens.color.border.muted },
      },
    },
  },
})

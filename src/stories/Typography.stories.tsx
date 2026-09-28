import type { Meta, StoryObj } from '@storybook/react'
import { Typography, Stack, Divider, Box } from '@mui/material'

// Typography is a foundational story — no single component meta needed.
// We showcase all text styles from the Dynasty Design System typography page.

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','overline','button'],
    },
    color: { control: 'text' },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export default meta
type Story = StoryObj<typeof Typography>

export const H1: Story = {
  args: { variant: 'h1', children: 'Heading 1 — 28px / Bold' },
}
export const H2: Story = {
  args: { variant: 'h2', children: 'Heading 2 — 20px / Bold' },
}
export const H3: Story = {
  args: { variant: 'h3', children: 'Heading 3 — 18px / Bold' },
}
export const H4: Story = {
  args: { variant: 'h4', children: 'Heading 4 — 16px / Bold' },
}
export const H5: Story = {
  args: { variant: 'h5', children: 'Heading 5 — 14px / SemiBold' },
}
export const Subtitle1: Story = {
  args: { variant: 'subtitle1', children: 'Subtitle 1 — 16px / Medium' },
}
export const Subtitle2: Story = {
  args: { variant: 'subtitle2', children: 'Subtitle 2 — 14px / Medium' },
}
export const Body1: Story = {
  args: { variant: 'body1', children: 'Body 1 — 14px / Regular. The quick brown fox jumps over the lazy dog.' },
}
export const Body2: Story = {
  args: { variant: 'body2', children: 'Body 2 — 12px / Medium. The quick brown fox jumps over the lazy dog.' },
}
export const CaptionStyle: Story = {
  name: 'Caption',
  args: { variant: 'caption', children: 'Caption — 10px / Regular' },
}
export const OverlineStyle: Story = {
  name: 'Overline',
  args: { variant: 'overline', children: 'Overline — 12px / Medium / 1.6px tracking' },
}
export const ButtonLabel: Story = {
  name: 'Button',
  args: { variant: 'button', children: 'Button Label — 14px / SemiBold' },
}

// ── Full type scale overview ───────────────────────────────────────────────
export const TypeScale: Story = {
  render: () => (
    <Stack spacing={1}>
      {([
        ['h1',        'Heading 1',   '28px / Bold 700'],
        ['h2',        'Heading 2',   '20px / Bold 700'],
        ['h3',        'Heading 3',   '18px / Bold 700'],
        ['h4',        'Heading 4',   '16px / Bold 700'],
        ['h5',        'Heading 5',   '14px / SemiBold 600'],
        ['subtitle1', 'Subtitle 1',  '16px / Medium 500'],
        ['subtitle2', 'Subtitle 2',  '14px / Medium 500'],
        ['body1',     'Body 1',      '14px / Regular 400'],
        ['body2',     'Body 2',      '12px / Medium 500'],
        ['caption',   'Caption',     '10px / Regular 400'],
        ['overline',  'Overline',    '12px / Medium 500 / 1.6px tracking'],
        ['button',    'Button',      '14px / SemiBold 600'],
      ] as const).map(([variant, label, spec]) => (
        <Box key={variant} sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography variant={variant} sx={{ minWidth: 200 }}>{label}</Typography>
          <Typography variant="caption" color="text.secondary">{spec}</Typography>
        </Box>
      ))}
    </Stack>
  ),
}

// ── Color variants ────────────────────────────────────────────────────────
export const ColorVariants: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography variant="body1" color="text.primary">  text.primary   — #111928</Typography>
      <Typography variant="body1" color="text.secondary"> text.secondary — #374151</Typography>
      <Typography variant="body1" color="text.disabled">  text.disabled  — #a1a1aa</Typography>
      <Typography variant="body1" color="primary">        primary        — #020c33</Typography>
      <Typography variant="body1" color="error">          error          — #ef4444</Typography>
      <Typography variant="body1" color="success.main">   success        — #10b981</Typography>
    </Stack>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Link, Stack, Typography } from '@mui/material'

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    underline: { control: 'select', options: ['always', 'hover', 'none'] },
    color:     { control: 'select', options: ['primary', 'secondary', 'inherit', 'text.primary', 'text.secondary'] },
    variant:   { control: 'select', options: ['body1', 'body2', 'caption', 'subtitle1', 'subtitle2'] },
  },
  args: {
    href:      '#',
    children:  'Link text',
    underline: 'hover',
    color:     'primary',
    variant:   'body1',
  },
}
export default meta
type Story = StoryObj<typeof Link>

// ── Figma: Variant=Primary, State=Default ─────────────────────────────────
export const Primary: Story = {
  args: { color: 'primary', children: 'Primary link' },
}

// ── Figma: Variant=Secondary, State=Default ───────────────────────────────
export const Secondary: Story = {
  args: { color: 'text.secondary', children: 'Secondary link' },
}

// ── Figma: State=Visited ──────────────────────────────────────────────────
export const Visited: Story = {
  args: {
    color:    'primary',
    children: 'Visited link',
    sx: { '&:visited': { color: 'secondary.dark' } },
  },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    color:    'text.disabled',
    children: 'Disabled link',
    sx: { pointerEvents: 'none', cursor: 'default' },
  },
}

// ── Figma: Sizes ─────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" variant="body1" underline="hover">Large link — Body1 (14px)</Link>
      <Link href="#" variant="body2" underline="hover">Medium link — Body2 (12px)</Link>
      <Link href="#" variant="caption" underline="hover">Small link — Caption (10px)</Link>
    </Stack>
  ),
}

// ── In-line usage ─────────────────────────────────────────────────────────
export const InLine: Story = {
  render: () => (
    <Typography variant="body1">
      Learn more about our{' '}
      <Link href="#" underline="hover" color="primary">terms of service</Link>
      {' '}and{' '}
      <Link href="#" underline="hover" color="primary">privacy policy</Link>.
    </Typography>
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" underline="hover" color="primary">Default</Link>
      <Link href="#" underline="hover" color="text.secondary">Secondary</Link>
      <Link href="#" underline="always" color="primary">Always underline</Link>
      <Link href="#" underline="none" color="primary">No underline</Link>
      <Link href="#" color="text.disabled" sx={{ pointerEvents: 'none' }}>Disabled</Link>
    </Stack>
  ),
}

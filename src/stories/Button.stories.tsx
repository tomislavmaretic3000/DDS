import type { Meta, StoryObj } from '@storybook/react'
import { Button, Stack } from '@mui/material'

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['contained', 'outlined', 'text'] },
    color:    { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'success', 'info'] },
    size:     { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

// ── Figma: Variant=Primary ────────────────────────────────────────────────
export const Primary: Story = {
  args: { variant: 'contained', color: 'primary', children: 'Button' },
}

// ── Figma: Variant=Secondary ──────────────────────────────────────────────
export const Secondary: Story = {
  args: { variant: 'contained', color: 'secondary', children: 'Button' },
}

// ── Figma: Variant=Outline ────────────────────────────────────────────────
export const Outline: Story = {
  args: { variant: 'outlined', color: 'primary', children: 'Button' },
}

// ── Figma: Variant=Ghost ──────────────────────────────────────────────────
export const Ghost: Story = {
  args: { variant: 'text', color: 'primary', children: 'Button' },
}

// ── Figma: Variant=Error ──────────────────────────────────────────────────
export const Error: Story = {
  args: { variant: 'contained', color: 'error', children: 'Delete' },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { variant: 'contained', color: 'primary', disabled: true, children: 'Button' },
}

// ── Figma: All Sizes ──────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
    </Stack>
  ),
}

// ── All Variants overview ─────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="outlined" color="primary">Outline</Button>
      <Button variant="text" color="primary">Ghost</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="primary" disabled>Disabled</Button>
    </Stack>
  ),
}

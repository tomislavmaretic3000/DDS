import type { Meta, StoryObj } from '@storybook/react'
import { Switch, FormControlLabel, Stack } from '@mui/material'

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    color:    { control: 'select', options: ['primary', 'secondary', 'default'] },
    size:     { control: 'select', options: ['small', 'medium'] },
  },
  args: { color: 'primary' },
}
export default meta
type Story = StoryObj<typeof Switch>

// ── Figma: Selected=False, Size=Default ───────────────────────────────────
export const Off: Story = {
  args: { checked: false },
}

// ── Figma: Selected=True, Size=Default ────────────────────────────────────
export const On: Story = {
  args: { checked: true },
}

// ── Figma: Size=Large → MUI size="medium" is the larger one ──────────────
export const Large: Story = {
  args: { checked: true, size: 'medium' },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledOn: Story = {
  args: { checked: true, disabled: true },
}

// ── With label ────────────────────────────────────────────────────────────
export const WithLabel: Story = {
  render: () => (
    <FormControlLabel
      control={<Switch defaultChecked color="primary" />}
      label="Enable notifications"
    />
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControlLabel control={<Switch />}                      label="Off" />
      <FormControlLabel control={<Switch defaultChecked />}       label="On" />
      <FormControlLabel control={<Switch disabled />}             label="Disabled off" />
      <FormControlLabel control={<Switch defaultChecked disabled />} label="Disabled on" />
    </Stack>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked:       { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled:      { control: 'boolean' },
    color:         { control: 'select', options: ['primary', 'secondary', 'error', 'default'] },
    size:          { control: 'select', options: ['small', 'medium'] },
  },
  args: {
    color: 'primary',
  },
}
export default meta
type Story = StoryObj<typeof Checkbox>

// ── Figma: Checked=False, State=Default ───────────────────────────────────
export const Unchecked: Story = {
  args: { checked: false },
}

// ── Figma: Checked=True, State=Default ───────────────────────────────────
export const Checked: Story = {
  args: { checked: true },
}

// ── Figma: Intermediate=True ─────────────────────────────────────────────
export const Indeterminate: Story = {
  args: { indeterminate: true },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  args: { checked: true, disabled: true },
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  args: { color: 'error' },
}

// ── With label ────────────────────────────────────────────────────────────
export const WithLabel: Story = {
  render: () => (
    <FormControlLabel
      control={<Checkbox defaultChecked color="primary" />}
      label="Accept terms and conditions"
    />
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <FormGroup>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <FormControlLabel control={<Checkbox />}                            label="Unchecked" />
        <FormControlLabel control={<Checkbox defaultChecked />}             label="Checked" />
        <FormControlLabel control={<Checkbox indeterminate />}              label="Indeterminate" />
        <FormControlLabel control={<Checkbox disabled />}                   label="Disabled" />
        <FormControlLabel control={<Checkbox defaultChecked disabled />}    label="Disabled checked" />
        <FormControlLabel control={<Checkbox color="error" />}             label="Error" />
      </Stack>
    </FormGroup>
  ),
}

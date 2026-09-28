import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack } from '@mui/material'

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    color:    { control: 'select', options: ['primary', 'secondary', 'error', 'default'] },
    size:     { control: 'select', options: ['small', 'medium'] },
  },
  args: { color: 'primary' },
}
export default meta
type Story = StoryObj<typeof Radio>

// ── Figma: Selected=False, State=Default ──────────────────────────────────
export const Unselected: Story = {
  args: { checked: false },
}

// ── Figma: Selected=True, State=Default ───────────────────────────────────
export const Selected: Story = {
  args: { checked: true },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledSelected: Story = {
  args: { checked: true, disabled: true },
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  args: { color: 'error' },
}

// ── Radio Group (typical usage) ───────────────────────────────────────────
export const RadioGroupExample: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Options</FormLabel>
      <RadioGroup defaultValue="option1">
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        <FormControlLabel value="option4" control={<Radio disabled />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Radio />
      <Radio defaultChecked />
      <Radio disabled />
      <Radio defaultChecked disabled />
      <Radio color="error" />
    </Stack>
  ),
}

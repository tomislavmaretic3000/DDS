import type { Meta, StoryObj } from '@storybook/react'
import { TextField, Stack } from '@mui/material'

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    helperText:  { control: 'text' },
    error:       { control: 'boolean' },
    disabled:    { control: 'boolean' },
    required:    { control: 'boolean' },
    fullWidth:   { control: 'boolean' },
    size:        { control: 'select', options: ['small', 'medium'] },
    type:        { control: 'select', options: ['text', 'password', 'email', 'number'] },
  },
  args: {
    label:     'Label',
    fullWidth: false,
    size:      'medium',
  },
}
export default meta
type Story = StoryObj<typeof TextField>

// ── Figma: State=Default ──────────────────────────────────────────────────
export const Default: Story = {
  args: { placeholder: 'Placeholder' },
}

// ── Figma: State=Filled ───────────────────────────────────────────────────
export const Filled: Story = {
  args: { value: 'Filled value' },
}

// ── Figma: State=Focus — use autoFocus to simulate ────────────────────────
export const Focused: Story = {
  args: { placeholder: 'Placeholder', autoFocus: true },
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  args: {
    value:      'Invalid value',
    error:      true,
    helperText: 'This field is required.',
  },
}

// ── Figma: State=Success — via helperText color ───────────────────────────
export const Success: Story = {
  args: {
    value:      'valid@email.com',
    helperText: 'Looks good!',
    sx: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'success.main' },
        '&:hover fieldset': { borderColor: 'success.main' },
        '&.Mui-focused fieldset': { borderColor: 'success.main', borderWidth: 2 },
      },
      '& .MuiFormHelperText-root': { color: 'success.main' },
    },
  },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { value: 'Disabled value', disabled: true },
}

// ── Figma: State=Read only ────────────────────────────────────────────────
export const ReadOnly: Story = {
  args: {
    value:      'Read only value',
    InputProps: { readOnly: true },
  },
}

// ── Figma: Layout=Vertical — label stacked above ─────────────────────────
export const WithHelperText: Story = {
  args: {
    placeholder: 'Placeholder',
    helperText:  'Supporting text goes here.',
  },
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={2} width={320}>
      <TextField label="Default"   placeholder="Placeholder" />
      <TextField label="Filled"    value="Filled value" />
      <TextField label="Error"     value="Invalid" error helperText="This field is required." />
      <TextField label="Disabled"  value="Disabled value" disabled />
      <TextField label="Read only" value="Read only value" InputProps={{ readOnly: true }} />
    </Stack>
  ),
}

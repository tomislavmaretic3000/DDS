import type { Meta, StoryObj } from '@storybook/react'
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, Stack } from '@mui/material'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled:  { control: 'boolean' },
    error:     { control: 'boolean' },
    multiple:  { control: 'boolean' },
    size:      { control: 'select', options: ['small', 'medium'] },
    variant:   { control: 'select', options: ['outlined', 'filled', 'standard'] },
  },
  decorators: [
    (Story) => (
      <FormControl sx={{ minWidth: 240 }}>
        <Story />
      </FormControl>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof Select>

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

// ── Figma: State=Default ──────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }}>
      <InputLabel>Label</InputLabel>
      <Select label="Label" defaultValue="">
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}

// ── Figma: State=Selected ────────────────────────────────────────────────
export const Selected: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }}>
      <InputLabel>Label</InputLabel>
      <Select label="Label" defaultValue="Option 1">
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}

// ── Figma: State=Error ───────────────────────────────────────────────────
export const Error: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }} error>
      <InputLabel>Label</InputLabel>
      <Select label="Label" defaultValue="">
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
      <FormHelperText>This field is required.</FormHelperText>
    </FormControl>
  ),
}

// ── Figma: State=Disabled ────────────────────────────────────────────────
export const Disabled: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }} disabled>
      <InputLabel>Label</InputLabel>
      <Select label="Label" defaultValue="Option 1">
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}

// ── Figma: State=Read only ───────────────────────────────────────────────
export const ReadOnly: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }}>
      <InputLabel shrink>Label</InputLabel>
      <Select label="Label" defaultValue="Option 1" inputProps={{ readOnly: true }}>
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}

// ── Multi select ─────────────────────────────────────────────────────────
export const MultiSelect: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 240 }}>
      <InputLabel>Labels</InputLabel>
      <Select label="Labels" multiple defaultValue={['Option 1', 'Option 2']}>
        {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={2} width={280}>
      <FormControl>
        <InputLabel>Default</InputLabel>
        <Select label="Default" defaultValue="">
          {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Selected</InputLabel>
        <Select label="Selected" defaultValue="Option 1">
          {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl error>
        <InputLabel>Error</InputLabel>
        <Select label="Error" defaultValue="">
          {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
        <FormHelperText>This field is required.</FormHelperText>
      </FormControl>
      <FormControl disabled>
        <InputLabel>Disabled</InputLabel>
        <Select label="Disabled" defaultValue="Option 1">
          {options.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
    </Stack>
  ),
}

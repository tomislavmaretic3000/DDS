import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Stack } from '@mui/material'
import dayjs from 'dayjs'

const meta = {
  title: 'Inputs/DatePicker',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
}
export default meta
type Story = StoryObj

// ── Default ───────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <DatePicker label="Select date" slotProps={{ textField: { size: 'medium' } }} />
  ),
}

// ── With default value ────────────────────────────────────────────────────
export const WithValue: Story = {
  render: () => (
    <DatePicker
      label="Date"
      defaultValue={dayjs('2024-06-15')}
      slotProps={{ textField: { size: 'medium' } }}
    />
  ),
}

// ── Error state ───────────────────────────────────────────────────────────
export const Error: Story = {
  render: () => (
    <DatePicker
      label="Date"
      slotProps={{
        textField: {
          size: 'medium',
          error: true,
          helperText: 'Invalid date.',
        },
      }}
    />
  ),
}

// ── Disabled ──────────────────────────────────────────────────────────────
export const Disabled: Story = {
  render: () => (
    <DatePicker
      label="Date"
      defaultValue={dayjs('2024-06-15')}
      disabled
      slotProps={{ textField: { size: 'medium' } }}
    />
  ),
}

// ── Read only ─────────────────────────────────────────────────────────────
export const ReadOnly: Story = {
  render: () => (
    <DatePicker
      label="Date"
      defaultValue={dayjs('2024-06-15')}
      readOnly
      slotProps={{ textField: { size: 'medium' } }}
    />
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 280 }}>
      <DatePicker label="Default" slotProps={{ textField: { size: 'medium' } }} />
      <DatePicker label="With value" defaultValue={dayjs('2024-06-15')} slotProps={{ textField: { size: 'medium' } }} />
      <DatePicker label="Error" slotProps={{ textField: { size: 'medium', error: true, helperText: 'Invalid date.' } }} />
      <DatePicker label="Disabled" defaultValue={dayjs('2024-06-15')} disabled slotProps={{ textField: { size: 'medium' } }} />
    </Stack>
  ),
}

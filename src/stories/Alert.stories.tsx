import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, Stack } from '@mui/material'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['info', 'error', 'success', 'warning'] },
    variant:  { control: 'select', options: ['standard', 'filled', 'outlined'] },
    onClose:  { action: 'closed' },
  },
  args: {
    severity: 'info',
    variant:  'standard',
    children: 'This is an alert message.',
  },
}
export default meta
type Story = StoryObj<typeof Alert>

// ── Figma: State=Default ──────────────────────────────────────────────────
export const Default: Story = {
  args: {
    severity: 'info',
    children: 'This is an informational message.',
  },
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  args: {
    severity: 'error',
    children: 'Something went wrong. Please try again.',
  },
}

// ── Figma: State=Success ──────────────────────────────────────────────────
export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Your changes have been saved successfully.',
  },
}

// ── Figma: State=Warning ──────────────────────────────────────────────────
export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'Please review before proceeding.',
  },
}

// ── With title ────────────────────────────────────────────────────────────
export const WithTitle: Story = {
  args: {
    severity: 'error',
    children: (
      <>
        <AlertTitle>Error</AlertTitle>
        Something went wrong. Please try again.
      </>
    ),
  },
}

// ── Dismissible ───────────────────────────────────────────────────────────
export const Dismissible: Story = {
  args: {
    severity: 'info',
    onClose:  () => {},
    children: 'Click the X to dismiss this alert.',
  },
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="info">    This is an informational message.</Alert>
      <Alert severity="success"> Your changes have been saved successfully.</Alert>
      <Alert severity="warning"> Please review before proceeding.</Alert>
      <Alert severity="error">   Something went wrong. Please try again.</Alert>
    </Stack>
  ),
}

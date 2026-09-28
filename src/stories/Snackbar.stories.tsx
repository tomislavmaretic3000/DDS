import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar, Alert, Button, Stack } from '@mui/material'
import { useState } from 'react'

// Storybook treats the Toast/Snackbar pattern as Snackbar + Alert
// Figma: Toast component with State=Default/Error/Success/Warning

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    autoHideDuration: { control: 'number' },
    anchorOrigin: { control: false },
  },
}
export default meta
type Story = StoryObj<typeof Snackbar>

function ToastDemo({ severity }: { severity: 'info' | 'success' | 'warning' | 'error' }) {
  const [open, setOpen] = useState(false)
  const messages = {
    info:    'This is an informational message.',
    success: 'Your changes have been saved successfully.',
    warning: 'Please review before proceeding.',
    error:   'Something went wrong. Please try again.',
  }
  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Show {severity} toast
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
          {messages[severity]}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

// ── Figma: State=Default ──────────────────────────────────────────────────
export const Default: Story = {
  render: () => <ToastDemo severity="info" />,
}

// ── Figma: State=Success ──────────────────────────────────────────────────
export const Success: Story = {
  render: () => <ToastDemo severity="success" />,
}

// ── Figma: State=Warning ──────────────────────────────────────────────────
export const Warning: Story = {
  render: () => <ToastDemo severity="warning" />,
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  render: () => <ToastDemo severity="error" />,
}

// ── Static preview (all states visible without clicking) ─────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="info">    Informational message.</Alert>
      <Alert severity="success"> Saved successfully.</Alert>
      <Alert severity="warning"> Please review before proceeding.</Alert>
      <Alert severity="error">   Something went wrong.</Alert>
    </Stack>
  ),
}

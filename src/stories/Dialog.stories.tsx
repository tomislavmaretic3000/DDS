import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  Button, IconButton, Typography, Stack, Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

// Figma: Modal component — header (Empty/Default) + footer (Default/Three buttons/One button)

const meta = {
  title: 'Feedback/Dialog',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

function DialogDemo({
  title = 'Dialog title',
  footerVariant = 'default' as 'default' | 'three-buttons' | 'one-button',
  showCloseIcon = true,
}) {
  const [open, setOpen] = useState(false)
  return (
    <Stack>
      <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        {/* Figma: Modal header — Default */}
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
          <Typography variant="h3">{title}</Typography>
          {showCloseIcon && (
            <IconButton size="small" onClick={() => setOpen(false)} edge="end">
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText variant="body1">
            This is the dialog body content. Replace this with your actual content.
            It can contain forms, text, images, or any other UI elements.
          </DialogContentText>
        </DialogContent>
        <Divider />
        {/* Figma: Modal footer variants */}
        <DialogActions sx={{ px: 3, py: 2 }}>
          {footerVariant === 'one-button' && (
            <Button variant="contained" onClick={() => setOpen(false)} fullWidth>
              Confirm
            </Button>
          )}
          {footerVariant === 'default' && (
            <>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          )}
          {footerVariant === 'three-buttons' && (
            <>
              <Button variant="text" onClick={() => setOpen(false)} sx={{ mr: 'auto' }}>Learn more</Button>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

// ── Figma: footer Variant=Default ─────────────────────────────────────────
export const Default: Story = {
  render: () => <DialogDemo title="Confirm action" footerVariant="default" />,
}

// ── Figma: footer Variant=Three buttons ──────────────────────────────────
export const ThreeButtons: Story = {
  render: () => <DialogDemo title="Review changes" footerVariant="three-buttons" />,
}

// ── Figma: footer Variant=One button ─────────────────────────────────────
export const OneButton: Story = {
  render: () => <DialogDemo title="Success" footerVariant="one-button" />,
}

// ── Figma: header Variant=Empty (no title) ────────────────────────────────
export const NoHeader: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Stack>
        <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogContent sx={{ pt: 3 }}>
            <DialogContentText variant="body1">
              This dialog has no header. Content starts immediately.
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    )
  },
}

// ── Destructive action dialog ─────────────────────────────────────────────
export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Stack>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>Delete item</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h3">Delete item?</Typography>
            <IconButton size="small" onClick={() => setOpen(false)}><CloseIcon fontSize="small" /></IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText variant="body1">
              This action cannot be undone. The item will be permanently deleted.
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    )
  },
}

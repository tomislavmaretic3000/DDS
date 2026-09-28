import type { Meta, StoryObj } from '@storybook/react'
import {
  Button, Box, Typography, Stack, LinearProgress,
  FormHelperText, Paper,
} from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { useState, useRef } from 'react'
import { tokens } from '../theme/tokens'

// Figma: File input — State=Default/Focus/Loading/Selected/Read only/Disabled/Error

const meta = {
  title: 'Inputs/FileInput',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

// ── Figma: State=Default ──────────────────────────────────────────────────
export const Default: Story = {
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
      <Stack spacing={1} sx={{ width: 320 }}>
        <Typography variant="subtitle2">Attachment</Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: tokens.radius.sm,
            borderColor: tokens.color.border.outline,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            '&:hover': { borderColor: 'primary.main', bgcolor: 'grey.50' },
          }}
          onClick={() => inputRef.current?.click()}
        >
          <UploadFileIcon color="action" />
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Click to upload or drag and drop
          </Typography>
          <Typography variant="caption" color="text.disabled">
            SVG, PNG, JPG or GIF (max. 800×400px)
          </Typography>
          <input ref={inputRef} type="file" hidden />
        </Paper>
      </Stack>
    )
  },
}

// ── Figma: State=Loading ──────────────────────────────────────────────────
export const Loading: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 320 }}>
      <Typography variant="subtitle2">Attachment</Typography>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'primary.main' }}>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <InsertDriveFileIcon color="primary" fontSize="small" />
            <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>document.pdf</Typography>
            <Typography variant="caption" color="text.secondary">45%</Typography>
          </Stack>
          <LinearProgress variant="determinate" value={45} />
        </Stack>
      </Paper>
    </Stack>
  ),
}

// ── Figma: State=Selected ─────────────────────────────────────────────────
export const Selected: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 320 }}>
      <Typography variant="subtitle2">Attachment</Typography>
      <Paper
        variant="outlined"
        sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'success.main', bgcolor: '#e6f9f1' }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <CheckCircleIcon color="success" fontSize="small" />
          <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>document.pdf</Typography>
          <Typography variant="caption" color="text.secondary">2.4 MB</Typography>
        </Stack>
      </Paper>
    </Stack>
  ),
}

// ── Figma: State=Error ────────────────────────────────────────────────────
export const Error: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 320 }}>
      <Typography variant="subtitle2">Attachment</Typography>
      <Paper
        variant="outlined"
        sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'error.main', bgcolor: '#fce9e9' }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <ErrorIcon color="error" fontSize="small" />
          <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>document.pdf</Typography>
          <Typography variant="caption" color="error">File too large</Typography>
        </Stack>
      </Paper>
      <FormHelperText error>File exceeds the 5MB size limit.</FormHelperText>
    </Stack>
  ),
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 320 }}>
      <Typography variant="subtitle2" color="text.disabled">Attachment</Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: tokens.radius.sm,
          borderColor: 'divider',
          opacity: 0.5,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <UploadFileIcon color="disabled" />
        <Typography variant="body2" color="text.disabled">Upload disabled</Typography>
      </Paper>
    </Stack>
  ),
}

// ── All States ────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 320 }}>
      {/* Default */}
      <Paper variant="outlined" sx={{ p: 2, borderRadius: tokens.radius.sm, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">Default — click to upload</Typography>
      </Paper>
      {/* Loading */}
      <Paper variant="outlined" sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'primary.main' }}>
        <Stack spacing={1}>
          <Typography variant="body2">document.pdf — uploading…</Typography>
          <LinearProgress variant="determinate" value={45} />
        </Stack>
      </Paper>
      {/* Selected */}
      <Paper variant="outlined" sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'success.main', bgcolor: '#e6f9f1' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CheckCircleIcon color="success" fontSize="small" />
          <Typography variant="body2">document.pdf — 2.4 MB</Typography>
        </Stack>
      </Paper>
      {/* Error */}
      <Paper variant="outlined" sx={{ p: 2, borderRadius: tokens.radius.sm, borderColor: 'error.main', bgcolor: '#fce9e9' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <ErrorIcon color="error" fontSize="small" />
          <Typography variant="body2" color="error">File too large</Typography>
        </Stack>
      </Paper>
    </Stack>
  ),
}

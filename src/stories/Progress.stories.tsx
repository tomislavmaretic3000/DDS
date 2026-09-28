import type { Meta, StoryObj } from '@storybook/react'
import { CircularProgress, LinearProgress, Stack, Box, Typography } from '@mui/material'

const meta = {
  title: 'Feedback/Progress',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

// ── Circular — indeterminate (loading) ────────────────────────────────────
export const CircularIndeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress size={16} color="primary" />
      <CircularProgress size={24} color="primary" />
      <CircularProgress size={32} color="primary" />
      <CircularProgress size={40} color="primary" />
    </Stack>
  ),
}

// ── Circular — determinate ────────────────────────────────────────────────
export const CircularDeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      {[25, 50, 75, 100].map(v => (
        <Box key={v} sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={v} color="primary" />
          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary">{v}%</Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  ),
}

// ── Linear — indeterminate ────────────────────────────────────────────────
export const LinearIndeterminate: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <LinearProgress color="primary" />
    </Box>
  ),
}

// ── Figma: Submitted Progress Bar — determinate ───────────────────────────
export const LinearDeterminate: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      {[0, 25, 50, 75, 100].map(v => (
        <Stack key={v} spacing={0.5}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">Progress</Typography>
            <Typography variant="body2" color="text.secondary">{v}%</Typography>
          </Box>
          <LinearProgress variant="determinate" value={v} color="primary" />
        </Stack>
      ))}
    </Stack>
  ),
}

// ── Status colors ─────────────────────────────────────────────────────────
export const StatusColors: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">Primary</Typography>
        <LinearProgress variant="determinate" value={60} color="primary" />
      </Stack>
      <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">Success</Typography>
        <LinearProgress variant="determinate" value={100} color="success" />
      </Stack>
      <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">Warning</Typography>
        <LinearProgress variant="determinate" value={45} color="warning" />
      </Stack>
      <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">Error</Typography>
        <LinearProgress variant="determinate" value={20} color="error" />
      </Stack>
    </Stack>
  ),
}

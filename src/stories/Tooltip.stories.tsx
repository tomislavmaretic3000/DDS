import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, Button, IconButton, Stack, Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    title:     { control: 'text' },
    placement: {
      control: 'select',
      options: ['top','bottom','left','right','top-start','top-end','bottom-start','bottom-end'],
    },
    arrow:     { control: 'boolean' },
  },
  args: {
    title:     'Tooltip text',
    arrow:     true,
    placement: 'top',
  },
}
export default meta
type Story = StoryObj<typeof Tooltip>

// ── Figma: Position=Top ───────────────────────────────────────────────────
export const Top: Story = {
  args: { placement: 'top' },
  render: (args) => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ── Figma: Position=Bottom ────────────────────────────────────────────────
export const Bottom: Story = {
  args: { placement: 'bottom' },
  render: (args) => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ── Figma: Position=Left ──────────────────────────────────────────────────
export const Left: Story = {
  args: { placement: 'left' },
  render: (args) => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ── Figma: Position=Right ─────────────────────────────────────────────────
export const Right: Story = {
  args: { placement: 'right' },
  render: (args) => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ── Figma: Size=Small → on icon button ───────────────────────────────────
export const OnIcon: Story = {
  args: { title: 'More information', placement: 'right' },
  render: (args) => (
    <Box sx={{ p: 4 }}>
      <Tooltip {...args}>
        <IconButton size="small">
          <InfoIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  ),
}

// ── All positions ─────────────────────────────────────────────────────────
export const AllPositions: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ p: 6, flexWrap: 'wrap', justifyContent: 'center' }} useFlexGap>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => (
        <Tooltip key={placement} title={`${placement} tooltip`} placement={placement} arrow>
          <Button variant="outlined" size="small">{placement}</Button>
        </Tooltip>
      ))}
    </Stack>
  ),
}

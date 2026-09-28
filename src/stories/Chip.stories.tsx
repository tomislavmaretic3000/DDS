import type { Meta, StoryObj } from '@storybook/react'
import { Chip, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    variant:  { control: 'select', options: ['filled', 'outlined'] },
    color:    { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info'] },
    size:     { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    size:  'medium',
  },
}
export default meta
type Story = StoryObj<typeof Chip>

// ── Figma: Style=Default ──────────────────────────────────────────────────
export const Default: Story = {
  args: { variant: 'outlined', color: 'default' },
}

// ── Figma: Style=Primary ──────────────────────────────────────────────────
export const Primary: Story = {
  args: { variant: 'filled', color: 'primary' },
}

// ── Figma: Function=Add ───────────────────────────────────────────────────
export const Add: Story = {
  args: {
    label:    'Add tag',
    icon:     <AddIcon />,
    variant:  'outlined',
    clickable: true,
    onClick:  () => {},
  },
}

// ── Figma: Function=Remove ────────────────────────────────────────────────
export const Removable: Story = {
  args: {
    label:    'Tag',
    onDelete: () => {},
    deleteIcon: <CloseIcon />,
    variant:  'filled',
    color:    'primary',
  },
}

// ── Figma: Function=Expand ────────────────────────────────────────────────
export const Expandable: Story = {
  args: {
    label:      'More options',
    deleteIcon: <ExpandMoreIcon />,
    onDelete:   () => {},
    variant:    'outlined',
    clickable:   true,
  },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const Disabled: Story = {
  args: { disabled: true, variant: 'filled', color: 'primary' },
}

// ── Figma: Size=Small ─────────────────────────────────────────────────────
export const Small: Story = {
  args: { size: 'small', label: 'Small tag' },
}

// ── All Styles ────────────────────────────────────────────────────────────
export const AllStyles: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip label="Default"  variant="outlined" />
        <Chip label="Primary"  variant="filled" color="primary" />
        <Chip label="Success"  variant="filled" color="success" />
        <Chip label="Warning"  variant="filled" color="warning" />
        <Chip label="Error"    variant="filled" color="error" />
        <Chip label="Disabled" variant="filled" color="primary" disabled />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip label="Add"      icon={<AddIcon />} variant="outlined" clickable />
        <Chip label="Remove"   onDelete={() => {}} deleteIcon={<CloseIcon />} variant="filled" color="primary" />
        <Chip label="Expand"   onDelete={() => {}} deleteIcon={<ExpandMoreIcon />} variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip label="Medium" size="medium" variant="outlined" />
        <Chip label="Small"  size="small"  variant="outlined" />
      </Stack>
    </Stack>
  ),
}

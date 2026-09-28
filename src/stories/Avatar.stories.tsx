import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['circular', 'rounded', 'square'] },
    sx:      { control: false },
  },
}
export default meta
type Story = StoryObj<typeof Avatar>

// ── Figma: Variant=Photo, Shape=Circle ────────────────────────────────────
export const PhotoCircle: Story = {
  args: {
    alt:     'John Doe',
    src:     'https://i.pravatar.cc/40',
    variant: 'circular',
  },
}

// ── Figma: Variant=Initials, Shape=Circle ────────────────────────────────
export const InitialsCircle: Story = {
  args: {
    children: 'JD',
    variant:  'circular',
    sx: { bgcolor: 'primary.main' },
  },
}

// ── Figma: Variant=Initials, Shape=Square ────────────────────────────────
export const InitialsSquare: Story = {
  args: {
    children: 'JD',
    variant:  'rounded',
    sx: { bgcolor: 'secondary.main', color: 'text.primary' },
  },
}

// ── Figma: Variant=Photo, Shape=Square ───────────────────────────────────
export const PhotoSquare: Story = {
  args: {
    alt:     'John Doe',
    src:     'https://i.pravatar.cc/40',
    variant: 'rounded',
  },
}

// ── Fallback (no src) ─────────────────────────────────────────────────────
export const FallbackIcon: Story = {
  args: { children: <PersonIcon />, variant: 'circular' },
}

// ── Figma: Sizes — 16/20/24/32/40px ──────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {[16, 20, 24, 32, 40].map(size => (
        <Avatar key={size} sx={{ width: size, height: size, bgcolor: 'primary.main', fontSize: size * 0.4 }}>
          JD
        </Avatar>
      ))}
    </Stack>
  ),
}

// ── AvatarGroup ───────────────────────────────────────────────────────────
export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      {['#020c33', '#35619a', '#b0d361', '#457ac0', '#8aadea'].map((color, i) => (
        <Avatar key={i} sx={{ bgcolor: color }}>
          {String.fromCharCode(65 + i)}
        </Avatar>
      ))}
    </AvatarGroup>
  ),
}

// ── All Variants ──────────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src="https://i.pravatar.cc/40" variant="circular" />
        <Avatar src="https://i.pravatar.cc/40" variant="rounded" />
        <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main', color: 'text.primary' }} variant="rounded">JD</Avatar>
        <Avatar><PersonIcon /></Avatar>
      </Stack>
    </Stack>
  ),
}

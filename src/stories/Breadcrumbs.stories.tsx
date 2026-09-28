import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs, Link, Typography, Stack } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    maxItems:  { control: 'number' },
    separator: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof Breadcrumbs>

// ── Figma: Levels=1 ───────────────────────────────────────────────────────
export const OneLevel: Story = {
  render: () => (
    <Breadcrumbs>
      <Typography variant="body2" color="text.primary">Home</Typography>
    </Breadcrumbs>
  ),
}

// ── Figma: Levels=2 ───────────────────────────────────────────────────────
export const TwoLevels: Story = {
  render: () => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Home</Link>
      <Typography variant="body2" color="text.primary">Page</Typography>
    </Breadcrumbs>
  ),
}

// ── Figma: Levels=3 ───────────────────────────────────────────────────────
export const ThreeLevels: Story = {
  render: () => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Home</Link>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Section</Link>
      <Typography variant="body2" color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
}

// ── Figma: Levels=4+ (collapsed) ─────────────────────────────────────────
export const FourLevels: Story = {
  render: () => (
    <Breadcrumbs maxItems={3} separator={<NavigateNextIcon fontSize="small" />}>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Home</Link>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Category</Link>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Sub-category</Link>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Section</Link>
      <Typography variant="body2" color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
}

// ── With home icon (Figma: Item=Back) ─────────────────────────────────────
export const WithHomeIcon: Story = {
  render: () => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link href="#" underline="hover" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <HomeIcon fontSize="small" />
        <Typography variant="body2">Home</Typography>
      </Link>
      <Link href="#" underline="hover" variant="body2" color="text.secondary">Section</Link>
      <Typography variant="body2" color="text.primary">Current</Typography>
    </Breadcrumbs>
  ),
}

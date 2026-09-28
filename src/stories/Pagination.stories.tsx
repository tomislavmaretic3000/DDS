import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, Stack } from '@mui/material'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    count:    { control: 'number' },
    page:     { control: 'number' },
    variant:  { control: 'select', options: ['text', 'outlined'] },
    color:    { control: 'select', options: ['primary', 'secondary', 'standard'] },
    shape:    { control: 'select', options: ['circular', 'rounded'] },
    size:     { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    showFirstButton: { control: 'boolean' },
    showLastButton:  { control: 'boolean' },
  },
  args: {
    count:   10,
    color:   'primary',
    variant: 'text',
  },
}
export default meta
type Story = StoryObj<typeof Pagination>

// ── Figma: Page=First Page ────────────────────────────────────────────────
export const FirstPage: Story = {
  args: { page: 1 },
}

// ── Figma: Page=3rd Page ──────────────────────────────────────────────────
export const MiddlePage: Story = {
  args: { page: 3 },
}

// ── Figma: Page=Last Page ─────────────────────────────────────────────────
export const LastPage: Story = {
  args: { page: 10 },
}

// ── Outlined variant ──────────────────────────────────────────────────────
export const Outlined: Story = {
  args: { page: 3, variant: 'outlined' },
}

// ── With first/last buttons ───────────────────────────────────────────────
export const WithFirstLast: Story = {
  args: { page: 5, showFirstButton: true, showLastButton: true },
}

// ── Sizes ─────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} size="small"  color="primary" />
      <Pagination count={10} size="medium" color="primary" />
      <Pagination count={10} size="large"  color="primary" />
    </Stack>
  ),
}

// ── All Variants ──────────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} page={3} color="primary" variant="text" />
      <Pagination count={10} page={3} color="primary" variant="outlined" />
      <Pagination count={10} page={3} disabled />
    </Stack>
  ),
}

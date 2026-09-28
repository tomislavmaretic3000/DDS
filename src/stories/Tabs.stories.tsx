import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, Tab, Box, Stack } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant:     { control: 'select', options: ['standard', 'fullWidth', 'scrollable'] },
    textColor:   { control: 'select', options: ['primary', 'secondary', 'inherit'] },
    centered:    { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Tabs>

function ControlledTabs({ orientation = 'horizontal' as 'horizontal' | 'vertical', variant = 'Text' }) {
  const [value, setValue] = useState(0)
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']
  return (
    <Box sx={{ display: orientation === 'vertical' ? 'flex' : 'block' }}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        orientation={orientation}
        sx={orientation === 'vertical' ? { borderRight: 1, borderColor: 'divider', minWidth: 120 } : {}}
      >
        {tabs.map((t, i) => <Tab key={i} label={t} />)}
      </Tabs>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Box>Content for {tabs[value]}</Box>
      </Box>
    </Box>
  )
}

// ── Figma: Variant=Horizontal, Type=Text ─────────────────────────────────
export const HorizontalText: Story = {
  render: () => <ControlledTabs orientation="horizontal" />,
}

// ── Figma: Variant=Vertical, Type=Text ───────────────────────────────────
export const VerticalText: Story = {
  render: () => <ControlledTabs orientation="vertical" />,
}

// ── Figma: Type=Icon ──────────────────────────────────────────────────────
export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab icon={<HomeIcon />}          label="Home" />
        <Tab icon={<PersonIcon />}        label="Profile" />
        <Tab icon={<NotificationsIcon />} label="Alerts" />
        <Tab icon={<SettingsIcon />}      label="Settings" />
      </Tabs>
    )
  },
}

// ── Figma: Type=Icon only ─────────────────────────────────────────────────
export const IconOnly: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab icon={<HomeIcon />} aria-label="Home" />
        <Tab icon={<PersonIcon />} aria-label="Profile" />
        <Tab icon={<NotificationsIcon />} aria-label="Alerts" />
        <Tab icon={<SettingsIcon />} aria-label="Settings" />
      </Tabs>
    )
  },
}

// ── Figma: State=Disabled ─────────────────────────────────────────────────
export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" disabled />
        <Tab label="Tab 4" />
      </Tabs>
    )
  },
}

// ── Figma: Variant=Horizontal, Type=Button (fullWidth) ───────────────────
export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ width: 480 }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} variant="fullWidth">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>
    )
  },
}

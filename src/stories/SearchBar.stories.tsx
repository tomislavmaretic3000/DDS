import type { Meta, StoryObj } from '@storybook/react'
import { TextField, InputAdornment, IconButton, Paper, Stack, List, ListItem, ListItemText, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

// Figma: Header/Search — Status=Default/Active/Applied Search/Suggestive/Wrong search
// MUI doesn't have a SearchBar component — built from TextField + InputAdornment

const meta = {
  title: 'Inputs/SearchBar',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

// ── Figma: Status=Default ─────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <TextField
      placeholder="Search..."
      size="small"
      sx={{ width: 320 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" color="action" />
          </InputAdornment>
        ),
      }}
    />
  ),
}

// ── Figma: Status=Active ──────────────────────────────────────────────────
export const Active: Story = {
  render: () => (
    <TextField
      placeholder="Search..."
      size="small"
      autoFocus
      sx={{ width: 320 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" color="primary" />
          </InputAdornment>
        ),
      }}
    />
  ),
}

// ── Figma: Status=Applied Search ─────────────────────────────────────────
export const Applied: Story = {
  render: () => {
    const [value, setValue] = useState('dynasty design')
    return (
      <TextField
        value={value}
        onChange={e => setValue(e.target.value)}
        size="small"
        sx={{ width: 320 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" color="primary" />
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setValue('')} edge="end">
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    )
  },
}

// ── Figma: Status=Suggestive (5 results) ─────────────────────────────────
export const WithSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState('dyn')
    const suggestions = ['Dynasty Button', 'Dynasty Card', 'Dynasty Alert', 'Dynasty Table', 'Dynasty Modal']
    return (
      <Stack sx={{ width: 320, position: 'relative' }}>
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <Paper elevation={2} sx={{ position: 'absolute', top: '100%', width: '100%', zIndex: 10, mt: 0.5 }}>
          <List dense disablePadding>
            {suggestions.map((s, i) => (
              <>
                <ListItem key={s} button>
                  <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                {i < suggestions.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Paper>
      </Stack>
    )
  },
}

// ── Figma: Status=Wrong search ────────────────────────────────────────────
export const NoResults: Story = {
  render: () => (
    <Stack sx={{ width: 320 }} spacing={1}>
      <TextField
        value="xyz123abc"
        placeholder="Search..."
        size="small"
        error
        helperText="No results found."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" color="error" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  ),
}

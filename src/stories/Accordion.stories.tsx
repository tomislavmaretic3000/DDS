import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    disabled:        { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
    disableGutters:  { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Accordion>

// ── Figma: Active=No, State=Default ──────────────────────────────────────
export const Collapsed: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">Accordion title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          Accordion content goes here. This area expands when the header is clicked.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
}

// ── Figma: Active=Yes, State=Default ─────────────────────────────────────
export const Expanded: Story = {
  render: () => (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">Accordion title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          Accordion content goes here. This area expands when the header is clicked.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
}

// ── Figma: Active=No, State=Disabled ─────────────────────────────────────
export const Disabled: Story = {
  render: () => (
    <Accordion disabled>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">Disabled accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">This content is not accessible.</Typography>
      </AccordionDetails>
    </Accordion>
  ),
}

// ── Figma: Accordion list ─────────────────────────────────────────────────
export const AccordionList: Story = {
  render: () => (
    <Stack sx={{ width: 480 }}>
      {['What is Dynasty Design System?', 'How do I use the components?', 'Can I customise the theme?'].map((title, i) => (
        <Accordion key={i} defaultExpanded={i === 0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="text.secondary">
              Content for "{title}". Replace with actual copy.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  ),
}

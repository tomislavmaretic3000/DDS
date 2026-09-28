import type { Meta, StoryObj } from '@storybook/react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TableSortLabel, TablePagination, Paper, Checkbox, Chip, Stack, Typography,
} from '@mui/material'

const meta = {
  title: 'Data Display/Table',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

const rows = [
  { id: 1, name: 'Alice Johnson',  role: 'Admin',   status: 'Active',   date: '2024-01-15' },
  { id: 2, name: 'Bob Smith',      role: 'Editor',  status: 'Inactive', date: '2024-02-20' },
  { id: 3, name: 'Carol Williams', role: 'Viewer',  status: 'Active',   date: '2024-03-10' },
  { id: 4, name: 'David Brown',    role: 'Editor',  status: 'Pending',  date: '2024-04-05' },
  { id: 5, name: 'Eve Davis',      role: 'Admin',   status: 'Active',   date: '2024-05-22' },
]

const statusColor = (s: string) =>
  s === 'Active' ? 'success' : s === 'Inactive' ? 'default' : 'warning'

// ── Figma: Basic table with header ────────────────────────────────────────
export const Basic: Story = {
  render: () => (
    <TableContainer component={Paper} elevation={1}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h5">Name</Typography></TableCell>
            <TableCell><Typography variant="h5">Role</Typography></TableCell>
            <TableCell><Typography variant="h5">Status</Typography></TableCell>
            <TableCell><Typography variant="h5">Date</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} hover>
              <TableCell><Typography variant="body1">{row.name}</Typography></TableCell>
              <TableCell><Typography variant="body2" color="text.secondary">{row.role}</Typography></TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColor(row.status) as any} size="small" />
              </TableCell>
              <TableCell><Typography variant="body2" color="text.secondary">{row.date}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// ── Figma: Variant=Checkbox — with row selection ──────────────────────────
export const WithCheckboxes: Story = {
  render: () => (
    <TableContainer component={Paper} elevation={1}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox color="primary" />
            </TableCell>
            <TableCell><Typography variant="h5">Name</Typography></TableCell>
            <TableCell><Typography variant="h5">Role</Typography></TableCell>
            <TableCell><Typography variant="h5">Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.id} hover selected={i === 0}>
              <TableCell padding="checkbox">
                <Checkbox color="primary" checked={i === 0} />
              </TableCell>
              <TableCell><Typography variant="body1">{row.name}</Typography></TableCell>
              <TableCell><Typography variant="body2" color="text.secondary">{row.role}</Typography></TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColor(row.status) as any} size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// ── Figma: Column header with sort ────────────────────────────────────────
export const WithSorting: Story = {
  render: () => (
    <TableContainer component={Paper} elevation={1}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sortDirection="asc">
              <TableSortLabel active direction="asc">
                <Typography variant="h5">Name</Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>
                <Typography variant="h5">Role</Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell><Typography variant="h5">Status</Typography></TableCell>
            <TableCell sortDirection="desc">
              <TableSortLabel direction="desc">
                <Typography variant="h5">Date</Typography>
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColor(row.status) as any} size="small" />
              </TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// ── With pagination ───────────────────────────────────────────────────────
export const WithPagination: Story = {
  render: () => (
    <Paper elevation={1}>
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h5">Name</Typography></TableCell>
              <TableCell><Typography variant="h5">Role</Typography></TableCell>
              <TableCell><Typography variant="h5">Status</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={statusColor(row.status) as any} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={100}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </Paper>
  ),
}

// ── Compact / dense ───────────────────────────────────────────────────────
export const Dense: Story = {
  render: () => (
    <TableContainer component={Paper} elevation={1}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h5">Name</Typography></TableCell>
            <TableCell><Typography variant="h5">Role</Typography></TableCell>
            <TableCell><Typography variant="h5">Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} hover>
              <TableCell><Typography variant="body2">{row.name}</Typography></TableCell>
              <TableCell><Typography variant="body2" color="text.secondary">{row.role}</Typography></TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColor(row.status) as any} size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

export function ProfitsTable() {
  return (
    <TableContainer sx={{ direction: 'rtl' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>تاریخ</TableCell>
            <TableCell>مبلغ</TableCell>
            <TableCell>واحد</TableCell>
            <TableCell>توضیحات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

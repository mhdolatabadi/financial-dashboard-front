import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

export function TransactionsTable() {
  return (
    <TableContainer sx={{ direction: 'rtl' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>تاریخ</TableCell>
            <TableCell>نوع (واریز یا برداشت)</TableCell>
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

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader } from '../common'
import { unitToPersian } from '../../utils/unitToPersian'
import { useSelector } from 'react-redux'
import {
  selectedUserTransactionsView,
} from '../../pages/user/selected-user.slice'
import { Receipt } from '@mui/icons-material'

export function TransactionsTable() {
  const transactions = useSelector(selectedUserTransactionsView)
  return (
    <SectionWithHeader
      header={PersianTexts.transactionTable}
      Icon={<Receipt color="primary" />}
    >
      <TableContainer>
        {transactions.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.description}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map(
                (u: {
                  date: string
                  type: string
                  amount: string
                  unit: string
                  description: string
                }) => (
                  <TableRow key={u.date}>
                    <TableCell>
                      {Intl.DateTimeFormat('fa-IR').format(new Date(u?.date))}
                    </TableCell>

                    <TableCell>
                      <Typography
                        color={u.type === 'in' ? 'success.user' : 'error'}
                      >
                        {`${u.type === 'in' ? '+' : '-'} ${Intl.NumberFormat(
                          'fa-IR',
                        ).format(+u.amount)} ${unitToPersian(u.unit)}`}
                      </Typography>
                    </TableCell>
                    <TableCell>{u?.description}</TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        ) : (
          <div
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Typography fontWeight="600" color="#000a">
              {PersianTexts.thereIsNoTransactionYet}
            </Typography>
          </div>
        )}
      </TableContainer>
    </SectionWithHeader>
  )
}

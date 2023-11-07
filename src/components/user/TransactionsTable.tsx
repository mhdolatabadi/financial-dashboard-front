import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader } from '../common'
import { unitToPersian } from '../../utils/unitToPersian'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedUserTransactionsView,
  setDeleteTransaction,
} from '../../pages/user/selected-user.slice'
import { Delete, DeleteOutline, Receipt, ReceiptLong } from '@mui/icons-material'
import { deleteTransaction } from '../../utils/dataManipulation'

export function TransactionsTable() {
  const dispatch = useDispatch()
  const transactions = useSelector(selectedUserTransactionsView)
  const handleDelete = (id: string) => {
    deleteTransaction(id)
      .then(() => {
        dispatch(setDeleteTransaction(id))
      })
      .catch(console.warn)
  }
  return (
    <SectionWithHeader
      header={PersianTexts.transactionTable}
      Icon={<ReceiptLong sx={{ color: 'primary.main' }} />}
    >
      <TableContainer sx={{ borderRadius: '20px',

          borderColor: 'primary.main',
          borderWidth: '1px',
          borderStyle: 'solid',
     }}>
        {transactions.length > 0 ? (
          <Table>
            <TableHead sx={{ bgcolor: 'primary.main', color: 'white' }}>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.date}
                  </Typography>
                </TableCell>
                <TableCell width="50%">
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.amount}
                  </Typography>
                </TableCell>
                <TableCell width="100%">
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.description}
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ bgcolor: '#0001' }}>
              {transactions.map(
                (u: {
                  id: string
                  date: string
                  type: string
                  amount: string
                  unit: string
                  description: string
                }) => (
                  <TableRow key={u.id}>
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
                    <TableCell>
                      <Tooltip title={u.description}>
                        <Typography noWrap maxWidth="500px">
                          {u.description}
                        </Typography>
                      </Tooltip>
                    </TableCell>
                    <TableCell sx={{ width: '20px', padding: 0 }}>
                      <Button
                        onClick={() => handleDelete(u.id)}
                        sx={{ minWidth: 0 }}
                      >
                        <DeleteOutline color="error" />
                      </Button>
                    </TableCell>
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

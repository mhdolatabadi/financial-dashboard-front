import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader } from '../common'
import { unitToPersian } from '../../utils/unitToPersian'
import { getUserTransactions } from '../../utils/dataManipulation'
import { useSelector } from 'react-redux'
import { selectedUserIdView } from '../../pages/user/selected-user.slice'
import { Receipt } from '@mui/icons-material'

export function TransactionsTable() {
  const [users, setUsers] = useState([])
  const userId = useSelector(selectedUserIdView)
  useEffect(() => {
    getUserTransactions(userId)
      .then((res) => {
        setUsers(res.data)
      })
      .catch(console.warn)
  }, [userId])
  return (
    <SectionWithHeader
      header={PersianTexts.transactionTable}
      Icon={<Receipt color='primary' />}
    >
      <TableContainer>
        {users.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight='600' color='primary'>
                    {PersianTexts.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight='600' color='primary'>
                    {PersianTexts.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight='600' color='primary'>
                    {PersianTexts.description}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(
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
                          'fa-IR'
                        ).format(+u.amount)} ${unitToPersian(u.unit)}`}
                      </Typography>
                    </TableCell>
                    <TableCell>{u?.description}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        ) : (
          <div
            style={{
              padding: '20px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <Typography fontWeight='600'>
              {PersianTexts.thereIsNoTransactionYet}
            </Typography>
          </div>
        )}
      </TableContainer>
    </SectionWithHeader>
  )
}

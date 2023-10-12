import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { PersianTexts } from '../../persianTexts'

interface Props {
  userId: string
}

export function TransactionsTable({ userId }: Props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3456/transaction/${userId}`).then((res) => {
      setUsers(res.data)
      console.log(res.data)
    })
  }, [userId])
  return (
    <TableContainer>
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
                {PersianTexts.unit}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600" color="primary">
                {PersianTexts.description}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600" color="primary">
                {PersianTexts.transactionType}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map(
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
                    {Intl.NumberFormat('fa-IR').format(+u?.amount)}
                  </TableCell>
                  <TableCell>{u?.unit}</TableCell>
                  <TableCell>{u?.description}</TableCell>
                  <TableCell>{u?.type}</TableCell>
                </TableRow>
              )
            )
          ) : (
            <Typography>تراکنشی وجود ندارد</Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

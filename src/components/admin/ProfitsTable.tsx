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

interface Props {
  userId: string
}

export function ProfitsTable({ userId }: Props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3456/profit/${userId}`).then((res) => {
      setUsers(res.data)
    })
  }, [userId])
  return (
    <TableContainer>
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
          {users.length > 0 ? (
            users.map(
              (u: {
                date: string
                amount: string
                unit: string
                description: string
              }) => (
                <TableRow key={u.date}>
                  <TableCell>{u.date}</TableCell>
                  <TableCell>{u.amount}</TableCell>
                  <TableCell>{u.unit}</TableCell>
                  <TableCell>{u.description}</TableCell>
                </TableRow>
              )
            )
          ) : (
            <Typography>سودی ثبت نشده است</Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

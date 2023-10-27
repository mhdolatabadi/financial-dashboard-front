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
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader } from '../common/SectionWithHeader'
import { unitToPersian } from '../../utils/unitToPersian'
import { getUserProfits } from '../../utils/dataManipulation'

interface Props {
  userId: string
}

export function ProfitsTable({ userId }: Props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUserProfits(userId).then((res) => {
      setUsers(res.data)
    })
  }, [userId])
  return (
    <SectionWithHeader header={PersianTexts.profitTable}>
      <TableContainer sx={{ width: '100%', bgcolor: 'white' }}>
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
                    <TableCell>
                      {Intl.DateTimeFormat('fa-IR').format(new Date(u.date))}
                    </TableCell>
                    <TableCell>
                      {Intl.NumberFormat('fa-IR').format(+u.amount)}
                    </TableCell>
                    <TableCell>{unitToPersian(u.unit)}</TableCell>
                    <TableCell>{u.description}</TableCell>
                  </TableRow>
                ),
              )
            ) : (
              <div
                style={{
                  padding: '20px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Typography fontWeight="600">
                  {PersianTexts.thereIsNotProfitYet}
                </Typography>
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionWithHeader>
  )
}

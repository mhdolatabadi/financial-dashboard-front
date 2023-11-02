import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader } from '../common/SectionWithHeader'
import { unitToPersian } from '../../utils/unitToPersian'
import { getUserProfits } from '../../utils/dataManipulation'
import { useSelector } from 'react-redux'
import { selectedUserIdView } from '../../pages/main/selected-user.slice'
import { Paid } from '@mui/icons-material'

export function ProfitsTable() {
  const [users, setUsers] = useState([])
  const userId = useSelector(selectedUserIdView)
  useEffect(() => {
    getUserProfits(userId)
      .then((res) => {
        setUsers(res.data)
      })
      .catch(console.warn)
  }, [userId])
  return (
    <SectionWithHeader
      header={PersianTexts.profitTable}
      Icon={<Paid color="primary" />}
    >
      <TableContainer sx={{ width: '100%', bgcolor: 'white' }}>
        {users.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.date}
                  </Typography>
                </TableCell>
                <TableCell width="50%">
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.amount}
                  </Typography>
                </TableCell>
                <TableCell width="100%">
                  <Typography fontWeight="600" color="primary">
                    {PersianTexts.description}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(
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
                      {`${Intl.NumberFormat('fa-IR').format(
                        +u.amount,
                      )} ${unitToPersian(u.unit)}`}
                    </TableCell>
                    <TableCell>{u.description}</TableCell>
                  </TableRow>
                ),
              )}{' '}
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
              {PersianTexts.thereIsNotProfitYet}
            </Typography>
          </div>
        )}
      </TableContainer>
    </SectionWithHeader>
  )
}

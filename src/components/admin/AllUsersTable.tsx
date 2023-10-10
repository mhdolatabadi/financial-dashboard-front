import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { styled } from '@mui/material'

const CenteredTableCell = styled(TableCell)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}))

const RowDirTableRow = styled(TableRow)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}))

interface Props {
  selectUser: (id: string) => unknown
}

export function AllUsersTable({ selectUser }: Props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3456/user').then((res) => {
      setUsers(res.data)
    })
  }, [])
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <RowDirTableRow>
            <CenteredTableCell>نام کاربری</CenteredTableCell>
            <CenteredTableCell>مشاهده</CenteredTableCell>
          </RowDirTableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((u: { username: string; id: string }) => (
              <RowDirTableRow key={u.username}>
                <CenteredTableCell>{u.username}</CenteredTableCell>
                <CenteredTableCell>
                  <Button onClick={() => selectUser(u.id)}>مشاهده</Button>
                </CenteredTableCell>
              </RowDirTableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <Typography>هنوز کاربری ساخته نشده است</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

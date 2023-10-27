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
import VisibilityIcon from '@mui/icons-material/Visibility'
import { PersianTexts } from '../../utils/persianTexts'
import { User } from '../../models/user'

interface Props {
  selectUser: (id: string) => unknown
  users: Partial<User>[]
}

export function AllUsersTable({ selectUser, users }: Props) {
  return (
    <TableContainer sx={{ height: '100%', overflowY: 'auto'}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography fontWeight="600" color="primary">
                {PersianTexts.username}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600" color="primary">
                {PersianTexts.firstname}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600" color="primary">
                {PersianTexts.lastname}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: 'scroll', height: '100%' }}>
          {users.length > 0 ? (
            users.map((u) => (
              <TableRow key={u.username}>
                <TableCell sx={{ width: '10px', padding: 0}}>
                  <Button onClick={() => selectUser(u.id ?? '')} sx={{ minWidth: 0}}>
                    <VisibilityIcon sx={{ width: '15px', height: '15px'}} />
                  </Button>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="700">{u.username}</Typography>
                </TableCell>

                <TableCell>
                  <Typography>{u.firstname ?? PersianTexts.empty}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{u.lastname ?? PersianTexts.empty}</Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography>{PersianTexts.thereIsNoUserYet}</Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

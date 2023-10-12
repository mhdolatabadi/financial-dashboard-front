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
import { PersianTexts } from '../../persianTexts'
import { User } from '../../models/user'

interface Props {
  selectUser: (id: string) => unknown
  users: Partial<User>[]
}

export function AllUsersTable({ selectUser, users }: Props) {
  return (
    <TableContainer>
      <Table>
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
        <TableBody>
          {users.length > 0 ? (
            users.map((u) => (
              <TableRow key={u.username}>
                <TableCell>
                  <Button onClick={() => selectUser(u.id ?? '')}>
                    <VisibilityIcon />
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

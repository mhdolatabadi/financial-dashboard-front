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

interface Props {
  selectUser: (id: string) => unknown
  users: { username: string; id: string }[]
}

export function AllUsersTable({ selectUser, users }: Props) {
  return (
    <TableContainer sx={{ width: '700px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>نام کاربری</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((u: { username: string; id: string }) => (
              <TableRow key={u.username}>
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography>{u.username}</Typography>
                  <Button onClick={() => selectUser(u.id)}>مشاهده</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography>هنوز کاربری ساخته نشده است</Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

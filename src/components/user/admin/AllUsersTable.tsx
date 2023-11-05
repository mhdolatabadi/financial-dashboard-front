import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { PersianTexts } from '../../../utils/persianTexts'
import { User } from '../../../models/user'
import { Delete } from '@mui/icons-material'
import {
  deleteUser,
  getUserProfits,
  getUserTransactions,
  getUserWithId,
  getUserWithUsername,
} from '../../../utils/dataManipulation'
import { SuccessToast } from '../../common'
import { useDispatch } from 'react-redux'
import {
  setSelectedProfits,
  setSelectedTransactions,
  setSelectedUser,
} from '../../../pages/user/selected-user.slice'
import { setDeleteUser } from '../../../pages/user/main.slice'

interface Props {
  users: User[]
}

export function AllUsersTable({ users }: Props) {
  const dispatch = useDispatch()
  const handleSelectUser = (id: string) => {
    getUserWithId(id).then((res) => {
      dispatch(setSelectedUser(res.data))
    })
    getUserTransactions(id).then((res) => {
      dispatch(setSelectedTransactions(res.data))
    })
    getUserProfits(id).then((res) => {
      dispatch(setSelectedProfits(res.data))
    })
  }
  const handleDeleteUser = (id: string) => {
    deleteUser(id)
      .then(() => {
        dispatch(setDeleteUser(id))
        SuccessToast(PersianTexts.successful).showToast()
      })
      .catch(console.warn)
  }
  return (
    <TableContainer sx={{ height: '100%', overflowY: 'auto' }}>
      <Table stickyHeader>
        <TableBody sx={{ overflowY: 'scroll', height: '100%' }}>
          {users.length > 0 ? (
            users.map((u) => (
              <TableRow key={u.username}>
                <TableCell sx={{ width: '20px', padding: 0 }}>
                  <Button
                    onClick={() => handleSelectUser(u.id)}
                    sx={{ minWidth: 0 }}
                  >
                    <VisibilityIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="700">{u.username}</Typography>
                </TableCell>

                <TableCell>
                  <Typography>
                    {u.firstname || u.lastname
                      ? `${u.firstname ?? ''} ${u.lastname ?? ''}`
                      : `${PersianTexts.firstname} ${PersianTexts.empty}`}
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: '20px', padding: 0 }}>
                  <Button
                    onClick={() => (u.id ? handleDeleteUser(u.id) : null)}
                    sx={{ minWidth: 0 }}
                  >
                    <Delete color="error" />
                  </Button>
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

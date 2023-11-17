import {
  Button,
  Chip,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { PersianTexts } from '../../utils/persianTexts'
import { unitToPersian } from '../../utils/unitToPersian'
import { DeleteOutline } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectedUserView } from '../../pages/user/selected-user.slice'
import { currentIsAdminView } from '../../pages/user/current-user.slice'

interface HeaderProps {
  value: string
  width: string
}

interface Props<T> {
  headers: HeaderProps[]
  values: T[]
  handleDelete: (id: string) => unknown
}

interface Transaction {
  id: string
  date: string
  type: string
  amount: string
  unit: string
  description: string
}

export function Table<T extends Transaction>({
  headers,
  values,
  handleDelete,
}: Props<T>) {
  const selectedUser = useSelector(selectedUserView)
  const isAdmin = useSelector(currentIsAdminView)
  return (
    <TableContainer
      sx={{
        width: '100%',

        borderColor: 'primary.main',
        borderWidth: '1px',
        borderStyle: 'solid',

        borderRadius: '20px',
      }}
    >
      {values.length > 0 ? (
        <MuiTable>
          <TableHead
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <TableRow>
              {headers.map((h) => (
                <TableCell width={h.width}>
                  <Typography fontWeight="600" color="white">
                    {h.value}
                  </Typography>
                </TableCell>
              ))}
              {isAdmin && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: '#fffa' }}>
            {values.map((value) => (
              <TableRow key={value.date}>
                <TableCell>
                  {Intl.DateTimeFormat('fa-IR').format(new Date(value.date))}
                </TableCell>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography fontSize="14px" noWrap>
                    {`${Intl.NumberFormat('fa-IR').format(
                      +value.amount,
                    )} ${unitToPersian(selectedUser.unit)}`}
                  </Typography>
                  {value.type && (
                    <Chip
                      color={value.type === 'in' ? 'success' : 'error'}
                      sx={{ marginLeft: '20px', width: '70px' }}
                      label={value.type === 'in' ? 'واریز' : 'برداشت'}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Tooltip title={value.description}>
                    <Typography>{value.description}</Typography>
                  </Tooltip>
                </TableCell>
                {isAdmin && (
                  <TableCell sx={{ width: '20px', padding: 0 }}>
                    <Button
                      onClick={() => handleDelete(value.id)}
                      sx={{ minWidth: 0 }}
                    >
                      <DeleteOutline color="error" />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      ) : (
        <div
          style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            background: '#fffa',
          }}
        >
          <Typography fontWeight="600" color="#000a">
            {PersianTexts.thereIsNotProfitYet}
          </Typography>
        </div>
      )}
    </TableContainer>
  )
}

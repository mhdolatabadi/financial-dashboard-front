import {
  Button,
  Chip,
  Collapse,
  Table as MuiTable,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectedUserView } from '../../pages/user/selected-user.slice'
import { currentIsAdminView } from '../../pages/user/current-user.slice'
import { useTranslation } from 'react-i18next'
import { toPersianNumber } from '../../utils/toPersianNumber'
import { TransitionGroup } from 'react-transition-group'

interface HeaderProps {
  value: string
  width: string
}

interface Props<T> {
  headers: HeaderProps[]
  values: T[]
  type: 'transaction' | 'profit'
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
  type,
}: Props<T>) {
  const { t } = useTranslation()
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
        maxHeight: '500px',
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
                <TableCell key={h.value} width={h.width}>
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
                <TableRow key={value.id}>
                    <TableCell>
                      {Intl.DateTimeFormat('fa-IR').format(
                        new Date(value.date),
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography fontSize="14px" noWrap>
                        {`${toPersianNumber(+value.amount)} ${t(
                          `units.${selectedUser.unit}`,
                        )}`}
                      </Typography>
                      {value.type && (
                        <Chip
                          color={value.type === 'in' ? 'success' : 'error'}
                          sx={{ marginLeft: '20px', width: '70px' }}
                          label={
                            value.type === 'in'
                              ? type === 'transaction'
                                ? 'واریز'
                                : 'سود'
                              : type === 'transaction'
                              ? 'برداشت'
                              : 'زیان'
                          }
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Tooltip title={value.description}>
                        <Typography
                          noWrap
                          width="100%"
                          sx={{ maxWidth: '500px', minWidth: '100px' }}
                        >
                          {value.description}
                        </Typography>
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
            {t('inform.thereIsNotProfitYet')}
          </Typography>
        </div>
      )}
    </TableContainer>
  )
}

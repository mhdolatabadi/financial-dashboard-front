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
import { PersianTexts } from '../../utils/persianTexts'
import { ErrorToast, SectionWithHeader } from '../common'
import { unitToPersian } from '../../utils/unitToPersian'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedUserProfitsView,
  setDeleteProfit,
} from '../../pages/user/selected-user.slice'
import { DeleteOutline, Paid } from '@mui/icons-material'
import { deleteProfit } from '../../utils/dataManipulation'

export function ProfitsTable() {
  const dispatch = useDispatch()
  const profits = useSelector(selectedUserProfitsView)
  const handleDelete = (id: string) => {
    deleteProfit(id)
      .then(() => {
        dispatch(setDeleteProfit(id))
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
  }
  return (
    <SectionWithHeader
      header={PersianTexts.profitTable}
      Icon={<Paid sx={{ color: 'primary.main' }} />}
    >
      <TableContainer
        sx={{
          width: '100%',
          bgcolor: 'white',

          borderColor: 'primary.main',
          borderWidth: '1px',
          borderStyle: 'solid',

          borderRadius: '20px',
        }}
      >
        {profits.length > 0 ? (
          <Table>
            <TableHead
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              <TableRow>
                <TableCell>
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.date}
                  </Typography>
                </TableCell>
                <TableCell width="50%">
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.amount}
                  </Typography>
                </TableCell>
                <TableCell width="100%">
                  <Typography fontWeight="600" color="white">
                    {PersianTexts.description}
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ bgcolor: '#0001' }}>
              {profits.map(
                (u: {
                  id: string
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
                    <TableCell sx={{ width: '20px', padding: 0 }}>
                      <Button
                        onClick={() => handleDelete(u.id)}
                        sx={{ minWidth: 0 }}
                      >
                        <DeleteOutline color="error" />
                      </Button>
                    </TableCell>
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

import { PersianTexts } from '../../utils/persianTexts'
import { ErrorToast, SectionWithHeader, Table } from '../common'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedUserTransactionsView,
  selectedUserView,
  setDeleteTransaction,
} from '../../pages/user/selected-user.slice'
import { ReceiptLong } from '@mui/icons-material'
import { deleteTransaction } from '../../utils/dataManipulation'
import { currentIsAdminView } from '../../pages/user/current-user.slice'

export function TransactionsTable() {
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectedUserView)
  const isAdmin = useSelector(currentIsAdminView)
  const transactions = useSelector(selectedUserTransactionsView)
  const handleDelete = (id: string) => {
    deleteTransaction(id)
      .then(() => {
        dispatch(setDeleteTransaction(id))
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
  }
  return (
    <SectionWithHeader
      header={PersianTexts.transactionTable}
      Icon={<ReceiptLong sx={{ color: 'primary.main' }} />}
    >
      <Table
        headers={[
          { value: PersianTexts.date, width: '' },
          { value: PersianTexts.amount, width: '20%' },
          { value: PersianTexts.description, width: '100%' },
        ]}
        values={transactions}
        handleDelete={handleDelete}
      ></Table>
    </SectionWithHeader>
  )
}

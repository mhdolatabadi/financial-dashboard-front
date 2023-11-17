import { PersianTexts } from '../../utils/persianTexts'
import { ErrorToast, SectionWithHeader, Table } from '../common'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedUserProfitsView,
  setDeleteProfit,
} from '../../pages/user/selected-user.slice'
import { Paid } from '@mui/icons-material'
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
      <Table
        headers={[
          { value: PersianTexts.date, width: '' },
          { value: PersianTexts.amount, width: '30%' },
          { value: PersianTexts.description, width: '100%' },
        ]}
        values={profits}
        handleDelete={handleDelete}
      ></Table>
    </SectionWithHeader>
  )
}

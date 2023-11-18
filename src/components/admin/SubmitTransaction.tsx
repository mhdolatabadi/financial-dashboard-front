import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { UsernameSelect } from '../common/UsernameSelect'
import { AmountUnitTextField } from '../common/AmountUnitTextField'
import { submitTransaction } from '../../settings/api/dataManipulation'
import {
  ContainedButton,
  DatePicker,
  ErrorToast,
  SuccessToast,
  TextField,
} from '../common'
import moment from 'moment-jalaali'
import { useSelector } from 'react-redux'
import { usersView } from '../../pages/user/main.slice'
import { useTranslation } from 'react-i18next'

export function SubmitTransaction() {
  const { t } = useTranslation()
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<number>(new Date().getTime())
  const [type, setType] = useState<string>('in')
  const [amount, setAmount] = useState<number>()
  const [unit, setUnit] = useState<string>('rial')
  const [description, setDescription] = useState<string>()
  const users = useSelector(usersView)
  const handleSubmitTransaction = () => {
    submitTransaction({
      username,
      date: new Date(date),
      type,
      amount,
      unit,
      description,
    })
      .then(() => {
        SuccessToast(t('messages.successful')).showToast()
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
  }
  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <UsernameSelect
          username={username}
          users={users}
          onChange={(e) => setUsername(e.target.value)}
        />
        <DatePicker
          label={t('common.date')}
          value={moment(date)}
          onChange={(value) => setDate(moment(value).valueOf())}
        />
        <AmountUnitTextField
          unit={users.find((u) => u.username === username)?.unit ?? unit}
          onAmountChange={(e) => setAmount(+e.target.value)}
          amount={amount}
          onUnitChange={(e) => setUnit(e.target.value)}
        />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
          sx={{ padding: '10px' }}
        >
          <FormControlLabel value="in" control={<Radio />} label="واریز" />
          <FormControlLabel value="out" control={<Radio />} label="برداشت" />
        </RadioGroup>
        <TextField
          multiline
          label={`${t('common.description')} (${t('common.optional')})`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ContainedButton onClick={handleSubmitTransaction}>
        {t('common.submit')}
      </ContainedButton>
    </form>
  )
}

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { User } from '../../../models/user'
import { PersianTexts } from '../../../utils/persianTexts'
import { UsernameSelect } from '../UsernameSelect'
import { AmountUnitTextField } from '../AmountUnitTextField'
import { submitTransaction } from '../../../utils/dataManipulation'
import { ErrorToast, SuccessToast } from '../../common'
import moment from 'moment-jalaali'
import { ContainedButton, DatePicker, TextField } from '../../common'
import { useSelector } from 'react-redux'
import { usersView } from '../../../pages/user/main.slice'

export function SubmitTransaction() {
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
        SuccessToast(PersianTexts.successful).showToast()
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
  }
  return (
    <div
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
          label={PersianTexts.date}
          value={moment(date)}
          onChange={(value) => setDate(moment(value).valueOf())}
        />
        <AmountUnitTextField
          unit={unit}
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
          label={`${PersianTexts.description} (${PersianTexts.optional})`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ContainedButton variant="contained" onClick={handleSubmitTransaction}>
        {PersianTexts.submit}
      </ContainedButton>
    </div>
  )
}

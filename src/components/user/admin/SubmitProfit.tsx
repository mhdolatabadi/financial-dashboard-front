import { useState } from 'react'
import { User } from '../../../models/user'
import { PersianTexts } from '../../../utils/persianTexts'
import { UsernameSelect } from '../UsernameSelect'
import { AmountUnitTextField } from '../AmountUnitTextField'
import { submitProfit } from '../../../utils/dataManipulation'
import moment from 'moment-jalaali'
import { ContainedButton, DatePicker, SuccessToast, TextField } from '../../common'

interface Props {
  users: Partial<User>[]
}

export function SubmitProfit({ users }: Props) {
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<number>(new Date().getTime())
  const [amount, setAmount] = useState<number>()
  const [unit, setUnit] = useState<string>('rial')
  const [description, setDescription] = useState<string>()
  const handleSubmitTransaction = () => {
    submitProfit({
      username,
      date: new Date(date),
      amount,
      unit,
<<<<<<< HEAD:src/components/user/admin/SubmitProfit.tsx
      description
=======
      description,
>>>>>>> 54ba37360b77af2fd181cacd6acd38c29f4c6f17:src/components/main/admin/SubmitProfit.tsx
    })
      .then(() => {
        SuccessToast(PersianTexts.successful).showToast()
      })
      .catch(console.warn)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box'
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
        <TextField
          multiline
          label={`${PersianTexts.description} (${PersianTexts.optional})`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ContainedButton variant='contained' onClick={handleSubmitTransaction}>
        {PersianTexts.submit}
      </ContainedButton>
    </div>
  )
}

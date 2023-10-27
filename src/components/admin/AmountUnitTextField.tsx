import { MenuItem } from '@mui/material'
import { PersianTexts } from '../../utils/persianTexts'
import { TextField } from '../common'

interface Props {
  amount: number | undefined
  unit: string
  onAmountChange: React.ChangeEventHandler<HTMLInputElement>
  onUnitChange: React.ChangeEventHandler<HTMLInputElement>
}

export function AmountUnitTextField({
  amount,
  onAmountChange,
  unit,
  onUnitChange,
}: Props) {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <TextField
        sx={{ width: '100%' }}
        label={PersianTexts.amount}
        value={amount}
        onChange={onAmountChange}
      />
      <TextField
        select
        value={unit}
        onChange={onUnitChange}
        sx={{ width: '150px', marginLeft: '20px' }}
      >
        <MenuItem value="rial">{PersianTexts.rial}</MenuItem>
        <MenuItem value="derham">{PersianTexts.derham}</MenuItem>
        <MenuItem value="dollar">{PersianTexts.dollar}</MenuItem>
        <MenuItem value="euro">{PersianTexts.euro}</MenuItem>
      </TextField>
    </div>
  )
}

import { MenuItem } from '@mui/material'
import { TextField } from './index'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Units } from '../../models/units'

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
  const { t } = useTranslation()
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <TextField
        type="number"
        required
        sx={{ width: '100%' }}
        label={t('common.amount')}
        value={amount}
        onChange={onAmountChange}
      />
      <TextField
        disabled
        select
        value={unit}
        onChange={onUnitChange}
        sx={{ width: '150px', marginLeft: '20px' }}
      >
        <MenuItem value={Units.rial}>{t('units.rial')}</MenuItem>
        <MenuItem value={Units.derham}>{t('units.derham')}</MenuItem>
        <MenuItem value={Units.dollar}>{t('units.dollar')}</MenuItem>
        <MenuItem value={Units.euro}>{t('units.euro')}</MenuItem>
      </TextField>
    </div>
  )
}

import { useTranslation } from 'react-i18next'

export function transactionTypeConverter(type: string) {
  const { t } = useTranslation()
  if (type === 'in') return t('common.deposit')
  if (type === 'out') return t('common.withdraw')
}

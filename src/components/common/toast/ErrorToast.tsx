import { toast } from 'react-toastify'

export const ErrorToast = (text: string) =>
  toast.error(text, { style: { fontFamily: 'Vazirmatn' } })

import { toast } from 'react-toastify'

export const SuccessToast = (message: string) =>
  toast.success(message, { style: { fontFamily: 'Vazirmatn' } })

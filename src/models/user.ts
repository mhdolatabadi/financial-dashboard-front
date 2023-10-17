export interface LoginInformation {
  username: string
  password: string
}
export interface User extends LoginInformation {
  id: string
  firstname: string | undefined
  lastname: string | undefined
  nationalNo: number | undefined
  financial: number | undefined
  unit: string | undefined
  totalProfit: number | undefined
  isAdmin: boolean
  lastTransactionDate: number
}

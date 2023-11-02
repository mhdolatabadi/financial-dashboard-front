export interface LoginInformation {
  username: string
  password: string
}

export interface User extends LoginInformation {
  id: string
  firstname?: string
  lastname?: string
  nationalNo?: string
  financial?: number
  unit: string
  totalProfit?: number
  isAdmin: boolean
  lastTransactionDate?: number
}

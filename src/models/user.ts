export interface LoginInformation {
  username: string
  password: string
}

export interface User extends LoginInformation {
  id: string
  financial: number
  unit: string
  totalProfit: number
  firstname?: string
  lastname?: string
  nationalNo?: string
  isAdmin: boolean
  lastTransactionDate?: number
}

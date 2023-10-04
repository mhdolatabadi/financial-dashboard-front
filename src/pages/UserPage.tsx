import {
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from '../components/user'

export function UserPage() {
  return (
    <div>
      <UserInformation />
      <TransactionsTable />
      <ProfitsTable />
    </div>
  )
}

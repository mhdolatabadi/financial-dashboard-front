import { PersianTexts } from "../persianTexts";

export function transactionTypeConverter(type: string) {
    if (type === 'in') return PersianTexts.deposite
    if (type === 'out') return PersianTexts.withdraw

}
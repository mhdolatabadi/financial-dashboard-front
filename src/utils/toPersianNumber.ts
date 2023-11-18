export function toPersianNumber(number: number) {
  return Intl.NumberFormat('fa-IR').format(number)
}

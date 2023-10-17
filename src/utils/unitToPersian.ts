import { PersianTexts } from "../persianTexts";

export function unitToPersian(unit: string) {
  if (unit === "rial") return PersianTexts.rial;
  if (unit === "euro") return PersianTexts.euro;
  if (unit === "derham") return PersianTexts.derham;
  if (unit === "dollar") return PersianTexts.dollar;
}

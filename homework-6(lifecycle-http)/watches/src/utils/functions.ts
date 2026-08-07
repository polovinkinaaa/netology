export type WatchType = {
  id: string;
  capital: string;
  timezone: number;
};

export function isValidTimeZone(value: string): boolean {
  if (value.trim() === "") return false; //проверка что не пустое
  const num = Number(value);
  if (Number.isNaN(num)) return false; //проверка что число
  if (num < -12 || num > 14) return false; //проверка что лежит в интервале [-12, 14] относительно Гринвича
  if (!Number.isInteger(num * 4)) return false; //насколько поняла, если число не целое,
  // то оно отличается от него на 15/30/45 минут(0.25/0.5/0.75), то есть num * 4 целое
  return true;
}

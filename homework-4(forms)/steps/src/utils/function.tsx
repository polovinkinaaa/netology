import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function isValidDate(value: string): boolean {
  return dayjs(value, "DD.MM.YYYY", true).isValid();
}

export function isValidDistance(value: string): boolean {
  if (value.trim() === "") return false;
  const num = Number(value);
  if (Number.isNaN(num)) return false;
  return num >= 0;
}

export function addData(
  prevMap: Map<string, number>,
  key: string,
  value: number,
): Map<string, number> {
  const nextMap = new Map(prevMap);
  const newValue = prevMap.has(key) ? (prevMap.get(key) ?? 0) + value : value;
  nextMap.set(key, newValue);
  return nextMap;
}

export function deleteData(
  prevMap: Map<string, number>,
  key: string,
): Map<string, number> {
  const nextMap = new Map(prevMap);
  nextMap.delete(key);
  return nextMap;
}

export function getSortedArray(
  prevMap: Map<string, number>,
): [string, number][] {
  return Array.from(prevMap.entries()).sort(([dateA], [dateB]) => {
    return (
      dayjs(dateB, "DD.MM.YYYY").valueOf() -
      dayjs(dateA, "DD.MM.YYYY").valueOf()
    );
  });
}

import type { Offer } from "../models/OfferModels.tsx";

export function getPrice(price: string, currency_code: string): string {
  if (currency_code === "USD") return "$" + price;
  if (currency_code == "EUR") return "�" + price;
  return price + " " + currency_code;
}

export function croppedLongText(text: string): string {
  if (text.length > 50) return text.slice(0, 50) + "�";
  return text;
}

export function getClassNameLevel(count: number): string {
  if (count > 20) return "level-high";
  if (count <= 10) return "level-low";
  return "level-medium";
}

export function getNeedData(data: Offer[]): Offer[] {
  return (data as Offer[])
    .filter((item: Offer) => item.MainImage) //���� ������� �������
    .map((item: Offer) => ({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: {
        url_570xN: item.MainImage.url_570xN,
      },
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity,
    }));
}

export function formatPrice(price: number): string {
  return `AED ${price.toLocaleString('en-AE')}`;
}
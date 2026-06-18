/**
 * Generates an encoded WhatsApp API link for Lanchonete Big-Gula.
 * Phone: (15) 99257-2005 (Itapetininga - SP)
 */
export function getWhatsAppLink(message: string): string {
  const cleanPhone = '5515992572005'; // Country code 55 + DDD 15 + Number 992572005
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Format currency helper
 */
export function formatPrice(price: string): string {
  return price;
}

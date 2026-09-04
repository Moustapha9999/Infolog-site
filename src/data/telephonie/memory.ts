import type { PhoneProduct } from "./types";

export function formatPhoneMemory(phone: PhoneProduct) {
  const ram = phone.ram?.join(" / ");
  const storage = phone.storage?.join(" / ");
  if (ram && storage) return `RAM ${ram} · Stockage ${storage}`;
  if (storage) return `Stockage ${storage}`;
  if (ram) return `RAM ${ram}`;
  return phone.variants.join(" · ");
}

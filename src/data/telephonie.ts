import type { PhoneProduct } from "./telephonie/types";
import { loadPhonesFromFolders } from "./telephonie/load-products";
import { getPublishedProduct, getPublishedProducts } from "@/lib/cms/products";

export type {
  PhoneCategory,
  PhoneColor,
  PhoneInfoJson,
  PhoneProduct,
  PhoneSpec,
} from "./telephonie/types";

export {
  categoryLabel,
  getCategoryLabel,
  getTelephonie,
  telephonie,
  telephonieMedia,
} from "./telephonie/constants";
export type { TelephonieContent } from "./telephonie/constants";
export {
  getTelephonieServiceTabs,
  telephonieServiceTabs,
} from "./telephonie/service-tabs";
export type { TelephonieServiceTab } from "./telephonie/service-tabs";

/** Fallback fichiers — préférer getPublishedProducts() côté pages. */
export const phones: PhoneProduct[] = loadPhonesFromFolders();

export function getPhoneById(id: string) {
  return loadPhonesFromFolders().find((phone) => phone.id === id);
}

export { getPublishedProduct, getPublishedProducts };

export function getPhoneGallery(phone: PhoneProduct) {
  const items = [phone.image, ...(phone.gallery ?? [])].filter(
    (src): src is string => Boolean(src),
  );
  return [...new Set(items)];
}

export function getPhoneVideos(phone: PhoneProduct) {
  const items = [phone.video, ...(phone.videos ?? [])].filter(
    (src): src is string => Boolean(src),
  );
  return [...new Set(items)];
}

export { formatPhoneMemory } from "./telephonie/memory";

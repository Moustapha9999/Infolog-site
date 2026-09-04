import type { PhoneProduct } from "./telephonie/types";
import { loadPhonesFromFolders } from "./telephonie/load-products";

export type {
  PhoneCategory,
  PhoneColor,
  PhoneInfoJson,
  PhoneProduct,
  PhoneSpec,
} from "./telephonie/types";

export {
  categoryLabel,
  telephonie,
  telephonieMedia,
} from "./telephonie/constants";

/** Chargé depuis public/brand/telephonie/products/{id}/ */
export const phones: PhoneProduct[] = loadPhonesFromFolders();

export function getPhoneById(id: string) {
  return loadPhonesFromFolders().find((phone) => phone.id === id);
}

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

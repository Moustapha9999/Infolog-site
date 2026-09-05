export function formatMoney(
  amount: number | null | undefined,
  currency = "MRU",
) {
  if (amount == null || Number.isNaN(amount)) return null;
  const formatted = new Intl.NumberFormat("fr-MR", {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formatted} ${currency}`;
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatBytes(size: number | null | undefined) {
  if (!size) return "—";
  if (size < 1024) return `${size} o`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} Ko`;
  return `${(size / (1024 * 1024)).toFixed(1)} Mo`;
}

export function toDatetimeLocal(value: string | null | undefined) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function formatDateTime(value: string | null | undefined) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export function isPromoActive(input: {
  isPromo: boolean;
  startsAt?: string | null;
  endsAt?: string | null;
}) {
  if (!input.isPromo) return false;
  const now = Date.now();
  if (input.startsAt && new Date(input.startsAt).getTime() > now) return false;
  if (input.endsAt && new Date(input.endsAt).getTime() < now) return false;
  return true;
}

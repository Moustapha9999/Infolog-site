const buckets = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const previous = buckets.get(key) ?? [];
  const recent = previous.filter((stamp) => now - stamp < windowMs);
  if (recent.length >= limit) {
    return { ok: false as const, retryAfterMs: windowMs - (now - recent[0]) };
  }
  recent.push(now);
  buckets.set(key, recent);
  return { ok: true as const };
}

export function clientIpFromHeaders(headers: Headers) {
  const cf = headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf;
  const real = headers.get("x-real-ip")?.trim();
  if (real) return real;
  const forwarded = headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "";
}

export function clientKeyFromHeaders(headers: Headers) {
  return clientIpFromHeaders(headers) || "unknown";
}

export function clientKey(request: Request) {
  return clientKeyFromHeaders(request.headers);
}

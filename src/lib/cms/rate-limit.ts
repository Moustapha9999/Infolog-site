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

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

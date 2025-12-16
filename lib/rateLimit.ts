const bucket = new Map<string, { count: number; ts: number }>();

export async function rateLimit(key: string): Promise<boolean> {
  const now = Date.now();
  const windowMs = 60_000; // 1 Minute
  const limit = 8;

  const cur = bucket.get(key);
  if (!cur || now - cur.ts > windowMs) {
    bucket.set(key, { count: 1, ts: now });
    return true;
  }
  if (cur.count >= limit) return false;

  cur.count += 1;
  bucket.set(key, cur);
  return true;
}

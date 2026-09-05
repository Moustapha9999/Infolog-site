import type { MediaRecord } from "./types";

export function mediaSrc(media?: MediaRecord | null) {
  if (!media) return null;
  return media.public_url || media.external_url || null;
}

export const IMAGE_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
  "image/svg+xml",
]);

export const VIDEO_MIME = new Set(["video/mp4", "video/webm"]);

export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
export const MAX_VIDEO_BYTES = 80 * 1024 * 1024;

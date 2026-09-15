import { headers } from "next/headers";
import { site } from "@/data/site";
import {
  adminHostSplitEnabled,
  getAdminOrigin,
  hostFromHeaders,
  isAdminHostname,
  originForHost,
  pairedAdminHost,
} from "@/lib/site-hosts";

export async function getRequestOrigin() {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  if (!host) return site.url;
  const hostname = host.split(",")[0]!.trim();
  const isLocal =
    hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1");
  const proto =
    headerList.get("x-forwarded-proto") ?? (isLocal ? "http" : "https");
  return `${proto}://${hostname}`;
}

export async function getAdminRequestOrigin() {
  const headerList = await headers();
  const host = hostFromHeaders(headerList);
  if (isAdminHostname(host)) return originForHost(host);
  if (adminHostSplitEnabled()) {
    const admin = pairedAdminHost(host);
    return admin ? originForHost(admin) : getAdminOrigin();
  }
  return getRequestOrigin();
}

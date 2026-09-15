import assert from "node:assert/strict";
import {
  adminHostSplitEnabled,
  getAdminHost,
  getAdminOrigin,
  getPublicHost,
  getPublicOrigin,
  getPublicSiteHref,
  hostFromHeaders,
  publicHrefFromLocation,
  isAdminHostname,
  isAdminOnlyPath,
  isPublicHostname,
  pairedAdminHost,
} from "./site-hosts";

const previous = {
  PUBLIC_HOST: process.env.PUBLIC_HOST,
  ADMIN_HOST: process.env.ADMIN_HOST,
  PUBLIC_HOST_ALIASES: process.env.PUBLIC_HOST_ALIASES,
  ADMIN_HOST_ALIASES: process.env.ADMIN_HOST_ALIASES,
  SITE_URL: process.env.SITE_URL,
  ADMIN_URL: process.env.ADMIN_URL,
};

function restore() {
  for (const [key, value] of Object.entries(previous)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

delete process.env.PUBLIC_HOST;
delete process.env.ADMIN_HOST;
delete process.env.PUBLIC_HOST_ALIASES;
delete process.env.ADMIN_HOST_ALIASES;
delete process.env.SITE_URL;
delete process.env.ADMIN_URL;

assert.equal(getPublicHost(), "infolog.digital");
assert.equal(adminHostSplitEnabled(), false);
assert.equal(getPublicSiteHref(), "/");
assert.equal(getAdminOrigin(), getPublicOrigin());

process.env.PUBLIC_HOST = "infolog.localhost";
process.env.ADMIN_HOST = "admin.infolog.localhost";
assert.equal(adminHostSplitEnabled(), true);
assert.equal(getPublicOrigin(), "http://infolog.localhost");
assert.equal(getPublicSiteHref(), "http://infolog.localhost");
assert.equal(getAdminOrigin(), "http://admin.infolog.localhost");
assert.equal(isPublicHostname("infolog.localhost:80"), true);
assert.equal(isAdminHostname("admin.infolog.localhost"), true);
assert.equal(isAdminHostname("infolog.localhost"), false);

process.env.PUBLIC_HOST_ALIASES = "preview.infolog.digital";
process.env.ADMIN_HOST_ALIASES = "admin.preview.infolog.digital";
assert.equal(isPublicHostname("preview.infolog.digital"), true);
assert.equal(isAdminHostname("admin.preview.infolog.digital"), true);
assert.equal(pairedAdminHost("preview.infolog.digital"), "admin.preview.infolog.digital");

delete process.env.ADMIN_HOST_ALIASES;
assert.equal(pairedAdminHost("preview.infolog.digital"), "preview.infolog.digital");

process.env.SITE_URL = "https://infolog.digital";
process.env.ADMIN_URL = "https://admin.infolog.digital";
process.env.PUBLIC_HOST = "infolog.digital";
process.env.ADMIN_HOST = "admin.infolog.digital";
assert.equal(getPublicOrigin(), "https://infolog.digital");
assert.equal(getAdminOrigin(), "https://admin.infolog.digital");

const headers = new Headers({
  host: "example.test:443",
  "x-forwarded-host": "admin.infolog.digital",
});
assert.equal(hostFromHeaders(headers), "admin.infolog.digital");
assert.equal(isAdminOnlyPath("/admin/login"), true);
assert.equal(isAdminOnlyPath("/qui-sommes-nous"), false);
assert.equal(
  publicHrefFromLocation({
    hostname: "admin.infolog.localhost",
    protocol: "http:",
    port: "",
  }),
  "http://infolog.localhost",
);
assert.equal(
  publicHrefFromLocation({
    hostname: "admin.infolog.digital",
    protocol: "https:",
  }),
  "https://infolog.digital",
);
assert.equal(
  publicHrefFromLocation({
    hostname: "localhost",
    protocol: "http:",
    port: "3000",
  }),
  "http://localhost:3000",
);

restore();
console.log("site-hosts unit checks ok");

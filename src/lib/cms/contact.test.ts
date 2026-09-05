import assert from "node:assert/strict";
import { contactSchema } from "./contact";
import { rateLimit } from "./rate-limit";
import { slugify, formatMoney, isPromoActive } from "./format";

const valid = contactSchema.safeParse({
  name: "Mohamed Fall",
  email: "mohamed@exemple.com",
  subject: "Demande",
  message: "Bonjour, je souhaite un devis pour un smartphone.",
});
assert.equal(valid.success, true);

const invalid = contactSchema.safeParse({
  name: "A",
  email: "pas-un-email",
  subject: "",
  message: "court",
});
assert.equal(invalid.success, false);

assert.equal(rateLimit("test-key", 2, 60_000).ok, true);
assert.equal(rateLimit("test-key", 2, 60_000).ok, true);
assert.equal(rateLimit("test-key", 2, 60_000).ok, false);

assert.equal(slugify("Galaxy A27 5G"), "galaxy-a27-5g");
assert.ok(Boolean(formatMoney(16000, "MRU")?.includes("MRU")));
assert.equal(isPromoActive({ isPromo: false }), false);
assert.equal(isPromoActive({ isPromo: true }), true);

console.log("cms unit checks ok");

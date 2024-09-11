import { describe, it, expect } from "vitest";
import { isEmail } from "~/utils/isEmail";

describe("isEmail", () => {
  it("should return true for a valid email address", () => {
    const result = isEmail("test@example.com");
    expect(result).toBe(true);
  });

  it("should return true for another valid email address", () => {
    const result = isEmail("user.name+tag@domain.co.uk");
    expect(result).toBe(true);
  });

  it("should return false for missing '@' symbol", () => {
    const result = isEmail("invalidemail.com");
    expect(result).toBe(false);
  });

  it("should return false for missing domain part", () => {
    const result = isEmail("invalid@");
    expect(result).toBe(false);
  });

  it("should return false for missing username", () => {
    const result = isEmail("@domain.com");
    expect(result).toBe(false);
  });

  it("should return false for email with spaces", () => {
    const result = isEmail("invalid @example.com");
    expect(result).toBe(false);
  });

  it("should return false for email without a top-level domain", () => {
    const result = isEmail("test@domain");
    expect(result).toBe(false);
  });

  it("should return false for an empty string", () => {
    const result = isEmail("");
    expect(result).toBe(false);
  });

  it("should return false for a string with only spaces", () => {
    const result = isEmail("   ");
    expect(result).toBe(false);
  });
});

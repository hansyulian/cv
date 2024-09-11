import { describe, it, expect } from "vitest";
import { getLinkableValue } from "~/utils/getLinkableValue";

describe("getLinkableValue", () => {
  it("should return WhatsApp link for valid phone number with + and 10-15 digits", () => {
    expect(getLinkableValue("+1234567890")).toBe("https://wa.me/+1234567890");
    expect(getLinkableValue("+14155552671")).toBe("https://wa.me/+14155552671");
    expect(getLinkableValue("+49123456789")).toBe("https://wa.me/+49123456789");
    expect(getLinkableValue("+123456789012345")).toBe(
      "https://wa.me/+123456789012345"
    );
  });

  it("should reject any random strings", () => {
    expect(getLinkableValue("Lorem ipsum dolor sit")).toBeUndefined();
  });

  it("should return the same URL for valid HTTP links", () => {
    expect(getLinkableValue("http://example.com")).toBe("http://example.com");
    expect(getLinkableValue("https://example.com")).toBe("https://example.com");
  });

  it("should return undefined for non-link and invalid values", () => {
    expect(getLinkableValue("1234567890")).toBeUndefined();
    expect(getLinkableValue("example")).toBeUndefined();
    expect(getLinkableValue("ftp://example.com")).toBeUndefined();
    expect(getLinkableValue("http://")).toBe("http://");
    expect(getLinkableValue("http://example")).toBe("http://example");
  });

  it("should handle edge cases correctly", () => {
    expect(getLinkableValue("+123")).toBeUndefined();
    expect(getLinkableValue("+1234567890123456")).toBeUndefined();
    expect(getLinkableValue("http://example")).toBe("http://example");
    expect(getLinkableValue("https://example")).toBe("https://example");
    expect(getLinkableValue("http://example.com:8080")).toBe(
      "http://example.com:8080"
    );
  });
});

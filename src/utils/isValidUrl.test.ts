import { describe, it, expect } from "vitest";
import { isValidUrl } from "~/utils/isValidUrl";

describe("isValidUrl", () => {
  it("should return true for a valid https URL", () => {
    const result = isValidUrl("https://www.example.com");
    expect(result).toBe(true);
  });

  it("should return true for a valid http URL", () => {
    const result = isValidUrl("http://example.com");
    expect(result).toBe(true);
  });

  it("should return true for a valid URL with a path, query, and fragment", () => {
    const result = isValidUrl("http://example.com/path?query=value#fragment");
    expect(result).toBe(true);
  });

  it("should return true for a valid URL with an IP address", () => {
    const result = isValidUrl("http://192.168.0.1");
    expect(result).toBe(true);
  });

  it("should return false for a URL with a missing protocol", () => {
    const result = isValidUrl("www.example.com");
    expect(result).toBe(false);
  });

  it("should return false for a URL with an invalid protocol", () => {
    const result = isValidUrl("ftp://example.com");
    expect(result).toBe(false);
  });

  it("should return false for a string that is not a URL", () => {
    const result = isValidUrl("not a url");
    expect(result).toBe(false);
  });

  it("should return false for a URL with spaces", () => {
    const result = isValidUrl("http://example.com/invalid url");
    expect(result).toBe(false);
  });

  it("should return true for a valid URL with a port number", () => {
    const result = isValidUrl("http://example.com:8080");
    expect(result).toBe(true);
  });

  it("should return true for a valid URL with a subdomain", () => {
    const result = isValidUrl("http://sub.example.com");
    expect(result).toBe(true);
  });
});

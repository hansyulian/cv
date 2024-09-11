const httpProtocolRegex =
  /^(https?:\/\/)([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/[^\s]*)?$/;

export function isValidUrl(value: string): boolean {
  return httpProtocolRegex.test(value);
}

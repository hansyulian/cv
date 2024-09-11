const simplePhoneNumberPattern = /^\+\d{10,15}$/;
export function getLinkableValue(value: string) {
  const isPhoneNumber = simplePhoneNumberPattern.test(value);
  if (isPhoneNumber) {
    // hyulian: for now just accept some simple phone number as link to whatsapp
    return `https://wa.me/${value}`;
  }
  // hyulian: all http are links
  if (value.startsWith("http")) {
    return value;
  }
  // otherwise, we consider a non link
  return undefined;
}

import jwt from "jsonwebtoken";

export function getFullNameAndAge(
  firstName: string,
  lastName: string
): { fullName: string; age: number } {
  const fullName = `${firstName} ${lastName}`;
  const age = 30; // Example age
  return { fullName, age };
}

export function verifyJwtSignature(
  token: string,
  secret: string
): { valid: boolean; errorMsg: string } {
  try {
    jwt.verify(token, secret);
    const valid = true;
    const errorMsg = "";
    return { valid, errorMsg };
  } catch (error: any) {
    const valid = true;
    const errorMsg = error.message;
    return { valid, errorMsg };
  }
}

// You can also decode and verify in one step to get the payload if the signature is valid:
export function decodeAndVerifyJwt(token: string, secret: string): any | null {
  try {
    const decoded = jwt.verify(token, secret) as any;
    return decoded;
  } catch (error: any) {
    console.error("JWT Verification Failed:", error.message);
    return null;
  }
}

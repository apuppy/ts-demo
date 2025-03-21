import {
  verifyJwtSignature,
  decodeAndVerifyJwt,
  getFullNameAndAge,
} from "./jwt-algo";

// Replace with your actual JWT data and secret key
const jwtData =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImtldmluIGxlZSIsImlhdCI6MTUxNjIzOTAyMn0.Kl0qpti-VoulKRf-1yFp-zTh4KVzpePUWJ5tsawn5bI";
// const secretKey = "your-secret-key"; // Replace with the actual secret key used to sign the JWT
const secretKey = "124"; // Replace with the actual secret key used to sign the JWT

const { valid, errorMsg } = verifyJwtSignature(jwtData, secretKey);
if (valid) {
  console.log("JWT Signature is valid.");
} else {
  console.log("JWT Signature is invalid. error message: " + errorMsg);
}

const verifiedPayload = decodeAndVerifyJwt(jwtData, secretKey);
if (verifiedPayload) {
  console.log(
    "JWT is valid, and the payload is:",
    JSON.stringify(verifiedPayload, null, 2)
  );
}

// You can also destructure the returned object:
const { fullName, age } = getFullNameAndAge("Alice", "Smith");
console.log(fullName); // Output: Alice Smith
console.log(age); // Output: 30

import * as Yup from "yup";

const email = Yup.string()
  .email("Invalid email format")
  .required("Email is required");
const password = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");
const name = Yup.string().required("Name is required");

export const loginSchema = Yup.object().shape({
  email,
  password,
});

export const signupSchema = Yup.object().shape({
  name,
  email,
  password,
});

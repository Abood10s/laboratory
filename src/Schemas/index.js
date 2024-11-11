import * as yup from "yup";

const passwordRules = "^(?=.*[a-z])(?=.*[A-Z]).{6,}$";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("You cant leave the email empty"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .required("You should have an age"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("You should have a password"),
  confirmPassword: yup
    .string()
    //means look if confirmPassword matches password
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("You should have a matching password"),
});

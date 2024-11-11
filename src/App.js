import { useFormik } from "formik";
import { basicSchema } from "./Schemas";
import "./style.css"; // Adjust this path as needed to ensure it links to your CSS file
import { resolvePath } from "react-router-dom";
function App() {
  const onSubmit = async (values, actions) => {
    // زي كانه بعمل request على api وبعطل الزر
    await new Promise((resolve) => setTimeout(resolve, 500));
    //resets values after submitting
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div className="App">
      <form action="#" onSubmit={handleSubmit}>
        <p>Age:</p>
        <input
          type="text"
          id="age"
          value={values.age}
          onChange={handleChange}
          style={{ display: "block", margin: "1rem 0" }}
          placeholder="Add your Age"
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <p>Email:</p>
        <input
          id="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          style={{ display: "block", margin: "1rem 0" }}
          placeholder="Add your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <p>Password:</p>
        {console.log(values)}
        <input
          id="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          style={{ display: "block", margin: "1rem 0" }}
          placeholder="Add your password"
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <p>Confirm Your Password:</p>

        <input
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          style={{ display: "block", margin: "1rem 0" }}
          placeholder="confirm your password"
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

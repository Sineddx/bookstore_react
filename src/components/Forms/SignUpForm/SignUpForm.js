import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useFormik } from "formik";
import context from "react-bootstrap/esm/AccordionContext";
import styles from "./SignUpForm.module.css";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "";
  } else if (values.password.length < 6) {
    errors.password = "Minimum 6 znaków";
  }

  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Nieprawidłowy email";
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.localStorage.setItem("token-data", JSON.stringify(user));
          context.dispatch({ type: "LOGIN", user: user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className={styles.errors}>
          {formik.errors.email ? <h6>{formik.errors.email}</h6> : null}
        </div>
      </div>
      <div className={styles.inputs}>
        <label htmlFor="Password">Hasło</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className={styles.errors}>
          {formik.errors.password ? <h6>{formik.errors.password}</h6> : null}
        </div>
      </div>

      <div className={styles.submit}>
        <button type="submit" className={styles.submitBtn}>
          Zarejestruj
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;

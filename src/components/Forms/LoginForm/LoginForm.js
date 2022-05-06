import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import styles from "./LoginForm.module.css";
import { getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import ReducerContext from "../../../context/reducerContext";
import { useNavigate } from "react-router-dom";
import validate from "../../../helpers/validator";

const LoginForm = () => {
  const [invalid, setInvalid] = useState("");
  const history = useNavigate();
  const context = useContext(ReducerContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.localStorage.setItem("token-data", JSON.stringify(user));
          context.dispatch({ type: "LOGIN", user: user });
          history("/");
        })
        .catch((error) => {
          setInvalid("Błędne dane logowania");
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
          {invalid ? <h6> {invalid}</h6> : null}
        </div>
      </div>

      <div className={styles.submit}>
        <button type="submit" className={styles.submitBtn}>
          Zaloguj
        </button>
      </div>
    </form>
  );
};
export default LoginForm;

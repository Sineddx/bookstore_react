import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import LoginForm from "../../../Forms/LoginForm/LoginForm";
import SignUpForm from "../../../Forms/SignUpForm/SignUpForm";
import styles from "./AuthBody.module.css";

export default function AuthBody(props) {
  return (
    <div className={styles.main}>
      <div className={styles.loginPanel}>
        <div className={styles.banner}>
          <h2>LOGOWANIE</h2>
        </div>
        <div className={styles.formContent}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.registerPanel}>
        <div className={styles.banner}>
          <h2>REJESTRACJA</h2>
        </div>
        <div className={styles.formContent}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

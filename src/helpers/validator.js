export default function validate(values){
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

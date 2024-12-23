import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            name="email"
            placeholder="Enter your email"
            className={s.input}
          />
          <Field
            name="password"
            placeholder="Enter your password"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/authOperations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            className={s.input}
          />
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={s.input}
          />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

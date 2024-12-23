import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Login failed. Please try again!");
      });
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <Toaster />
      <h2 className={s.title}>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

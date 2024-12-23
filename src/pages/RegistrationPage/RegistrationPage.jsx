import { useEffect } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  useEffect(() => {
    document.title = "Registration page";
  });
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;

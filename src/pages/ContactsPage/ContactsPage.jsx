import { useEffect } from "react";

const ContactsPage = () => {
  useEffect(() => {
    document.title = "Contacts page";
  });
  return <div>ContactsPage</div>;
};

export default ContactsPage;

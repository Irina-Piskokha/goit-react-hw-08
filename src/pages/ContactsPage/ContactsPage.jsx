import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Contacts page";
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={s.wrapper}>
        <ContactForm />
        <SearchBox />
      </div>

      <ContactList />
    </div>
  );
};

export default ContactsPage;

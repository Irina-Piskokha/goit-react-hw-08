import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const loading = useSelector(selectLoading);

  return (
    <div>
      <h2 className={s.title}>
        Your <span>contacts</span>
      </h2>
      {loading && <p>Loading...</p>}
      <ul className={s.list}>
        {filteredContacts.map((item) => {
          return (
            <li key={item.id} className={s.item}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

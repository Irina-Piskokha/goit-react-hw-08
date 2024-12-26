import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.wrapFlex}>
        <div className={s.wrapIcon}>
          <IoPerson className={s.icon} />
          <p className={s.titleName}>{name}</p>
        </div>
        <div className={s.wrapIcon}>
          <FaPhone className={s.icon} />
          <p className={s.phone}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

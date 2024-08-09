import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactListItem}>
      <div className={css.dataBlock}>
        <div className={css.elemBlock}>
          <FaPhone className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.elemBlock}>
          <FaUser className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

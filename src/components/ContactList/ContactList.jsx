import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;

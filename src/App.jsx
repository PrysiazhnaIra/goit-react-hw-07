import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectIsLoading } from "./redux/selectors.js";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      {theme === "light" ? (
        <button onClick={toggleTheme} className="btnTheme">
          <IoMdSunny className="lightTheme" />
        </button>
      ) : (
        <button onClick={toggleTheme} className="btnTheme">
          <FaMoon className="darkTheme" />
        </button>
      )}

      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;

import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;

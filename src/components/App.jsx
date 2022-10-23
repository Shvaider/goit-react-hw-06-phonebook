
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts)
  const contactsLength = contacts.length;
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   const item = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   if (name === '' || number === '') {
  //     alert(`Будь ласка, заповніть усі поля!`);
  //     return;
  //   } else if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} уже есть в списке ваших контактов`);
  //     return;
  //   } else {
  //     setContacts(contacts => [item, ...contacts]);
  //   }
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contacts =>
  //     contacts.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const removeContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      {contactsLength > 1 && (
        <Filter />
      )}{' '}
      {contactsLength > 0 ? (
        <ContactList
          
        />
      ) : (
        <p>Currently you phonebook has contacts. Please add them.</p>
      )}
    </div>
  );
}

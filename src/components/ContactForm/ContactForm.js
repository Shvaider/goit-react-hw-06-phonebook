import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';
import * as actions from '../../redux/actions'
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  let numberId = nanoid();
  let nameId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
  };
  const checkNumber = number => {
    return contacts.find(
      contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkName(name)) {
      alert('Вы не ввели все контактные данные');
    }else if (checkNumber(number)) {
      alert('Телефонный номер должен содержать только цифры');
    } else {
      dispatch(actions.addContact(name, number))
    }

    resetName()
    resetNumber()
  };

  return (
    <div className={styles.block}>
      <form className={styles.taskEditor} onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor={nameId}>Name</label>
          <input
            className={styles.taskEditor_input}
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може бути лише з букв, апострофа, дифізів та пробілів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Evgenii Horokhov"
          />
        </div>
        <div className="inputField">
          <label htmlFor={numberId}>Number</label>
          <input
            className={styles.taskEditor_input}
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону повинен складатись з цифр та може містити пробіли, тире, круглі дужки та може починатися з +"
            required
            value={number}
            onChange={handleChange}
            placeholder="000-00-00"
          />
        </div>
        <button className={styles.taskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
ContactForm.propTypes = {
  addContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

//////
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import styles from './ContactForm.module.css';

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   numberId = nanoid();
//   nameId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onAddContact({ ...this.state });
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     const { numberId, nameId, handleSubmit, handleChange } = this;
//     return (
//       <div className={styles.block}>
//         <form className={styles.taskEditor} onSubmit={handleSubmit}>
//           <div className="inputField">
//             <label htmlFor={nameId}>Name</label>
//             <input
//               className={styles.taskEditor_input}
//               id={nameId}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="inputField">
//             <label htmlFor={numberId}>Number</label>
//             <input
//               className={styles.taskEditor_input}
//               id={numberId}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={handleChange}
//             />
//           </div>
//           <button className={styles.taskEditor_button} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };

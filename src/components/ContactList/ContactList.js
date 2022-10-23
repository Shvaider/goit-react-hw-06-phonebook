import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const removeContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.taskList}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.taskList_item} key={id}>
          <p className={styles.taskList_name}>{name + ':  ' + number}</p>
          {
            <button
              className={styles.taskList_button}
              type="button"
              name="delete"
              onClick={() => removeContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  removeContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;

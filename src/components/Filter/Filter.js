import PropTypes from 'prop-types';
import { getFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(actions.changeFilter(event.target.value));
  return (
    <>
      <div>
        find contacts by Name
        <input
          name="filter"
          type="text"
          value={value}
          pattern="^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$"
          onChange={onChangeFilter}
          title="Ім'я може складатися тільки з літер, апострофа, тире та пробілів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan та інш."
        />
      </div>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

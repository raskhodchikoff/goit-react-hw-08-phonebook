import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelector';
import { setFilter } from 'redux/contacts/contactsSlice';

import { Label } from 'components/Filter/Filter.styled';
import { Box } from './../Box';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Box as="div" px={5}>
      <Label htmlFor="text">
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          autoComplete="off"
        />
      </Label>
    </Box>
  );
};

export default Filter;

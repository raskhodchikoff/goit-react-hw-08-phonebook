import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelector';
import { deleteContact } from 'redux/contacts/contactOperations';

import { Button, ListItem } from './ContactList.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();

  const filteringContact = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  const filteredContacts = filteringContact();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default Contacts;

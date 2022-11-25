import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelector';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { MainTitle, ContactsTitle } from './Phonebook.styled';
import { Box } from './../../components/Box';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="div"
      mx="auto"
      width="400px"
      mt={5}
      // py={5}
      bg="mainBgr"
      border="m"
      borderRadius="m"
      borderColor="greyBorder"
      boxShadow="shadow"
    >
      <Box as="section" mb={3}>
        <MainTitle>Add a contact</MainTitle>
        <ContactForm />
      </Box>
      <Box as="section">
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && !error && <b>Your request is being processed...</b>}
        {error && <p> {error} </p>}
        <ContactList />
      </Box>
    </Box>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/contactSlice';
import { ContactsWrapper, Title, Wrapper } from 'components/GlobalStyle';

export default function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactsWrapper>
        <Filter />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <ContactList />
      </ContactsWrapper>
    </Wrapper>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/contactSlice';
import { ContactsWrapper, Title, Wrapper } from './GlobalStyle';


export const App = () => {
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
};

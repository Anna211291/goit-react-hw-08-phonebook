import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.contactList = [...state.contactList, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.contactList = state.contactList.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const getContacts = state => state.contacts;

// export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

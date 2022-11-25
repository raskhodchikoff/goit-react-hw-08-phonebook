import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      Notiflix.Notify.info(
        'Something went wrong, please, try again in a minute!'
      );
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const contacts = await axios.post('/contacts', data);
      return contacts.data;
    } catch (error) {
      Notiflix.Notify.info(
        'Something went wrong, please, try again in a minute!'
      );
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (error) {
      Notiflix.Notify.info(
        'Something went wrong, please, try again in a minute!'
      );
      return thunkApi.rejectWithValue(error);
    }
  }
);

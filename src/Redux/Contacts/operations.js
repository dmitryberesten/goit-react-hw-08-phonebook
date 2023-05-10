import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (subscriber, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, subscriber);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const redactContatc = createAsyncThunk(
  'contacts/redactContatc',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

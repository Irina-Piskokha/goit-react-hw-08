import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post("/users/signup", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post("/users/login", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserLogged = createAsyncThunk("fetchUserLogged", async () => {
  const reponse = await axios.get("http://localhost:8000/usersLogged");
  return reponse.data;
});
export const postUserLogged = createAsyncThunk(
  "postUserLogged",
  async (user) => {
    const response = await axios.post(
      "http://localhost:8000/usersLogged",
      user
    );
    return response.data;
  }
);
export const deleteUserLogged = createAsyncThunk(
  "deleteUserLogged",
  async () => {
    const response = await axios.delete(`http://localhost:8000/usersLogged`);
    return response.data;
  }
);
export const patchUserLogged = createAsyncThunk(
  "patchUserLogged",
  async (updateUser) => {
    const response = await axios.patch(
      `http://localhost:8000/usersLogged`,
      updateUser
    );
    return response.data;
  }
);
const userLoggedSlice = createSlice({
  name: "usersLogged",
  initialState: {
    usersLogged: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogged.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchUserLogged.fulfilled, (state, action) => {
        state.usersLogged = action.payload;
        state.status = "Success";
      })
      .addCase(fetchUserLogged.rejected, (state, action) => {
        state.error = "Error";
      });
    builder.addCase(postUserLogged.fulfilled, (state, action) => {
      state.usersLogged.push(action.payload);
    });
    builder.addCase(deleteUserLogged.fulfilled, (state, action) => {
      state.usersLogged = state.usersLogged.filter(
        (user) => user.id !== action.payload
      );
    });
    builder.addCase(patchUserLogged.fulfilled, (state, action) => {
      state.usersLogged = state.usersLogged.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export default userLoggedSlice.reducer;

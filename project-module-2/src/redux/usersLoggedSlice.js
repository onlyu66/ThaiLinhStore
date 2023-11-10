import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersLogged = createAsyncThunk("fetchUsersLogged", async () => {
  const reponse = await axios.get("http://localhost:8000/usersLogged");
  return reponse.data;
});
export const postUsersLogged = createAsyncThunk(
  "postUsersLogged",
  async (user) => {
    const response = await axios.post(
      "http://localhost:8000/usersLogged",
      user
    );
    return response.data;
  }
);
export const deleteUsersLogged = createAsyncThunk(
  "deleteUsersLogged",
  async (idUser) => {
    await axios.delete(`http://localhost:8000/usersLogged/${idUser}`);
    return idUser;
  }
);
export const patchUsersLogged = createAsyncThunk(
  "patchUsersLogged",
  async (objUser) => {
    const response = await axios.patch(
      `http://localhost:8000/usersLogged/${objUser.id}`,
      objUser.updateUser
    );
    return response.data;
  }
);
const usersLoggedSlice = createSlice({
  name: "usersLogged",
  initialState: {
    usersLogged: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersLogged.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchUsersLogged.fulfilled, (state, action) => {
        state.usersLogged = action.payload;
        state.status = "Success";
      })
      .addCase(fetchUsersLogged.rejected, (state) => {
        state.error = "Error";
      });
    builder.addCase(postUsersLogged.fulfilled, (state, action) => {
      state.usersLogged.push(action.payload);
    });
    builder.addCase(deleteUsersLogged.fulfilled, (state, action) => {
      state.usersLogged = state.usersLogged.filter(
        (user) => user.id !== action.payload
      );
    });
    builder.addCase(patchUsersLogged.fulfilled, (state, action) => {
      state.usersLogged = state.usersLogged.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export default usersLoggedSlice.reducer;

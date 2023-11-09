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
  async (idUser) => {
    await axios.delete(`http://localhost:8000/usersLogged/${idUser}`);
    return idUser;
  }
);
export const putUserLogged = createAsyncThunk(
  "putUserLogged",
  async (objUser) => {
    const response = await axios.put(
      `http://localhost:8000/usersLogged/${objUser.id}`,
      objUser.updateUser
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
    builder.addCase(putUserLogged.fulfilled, (state, action) => {
      state.usersLogged = state.usersLogged.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export default userLoggedSlice.reducer;

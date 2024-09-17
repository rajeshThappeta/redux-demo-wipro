import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//make API req

export const usersThunk = createAsyncThunk("users-data", async (thunkApi) => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let usersData = res.data;
    console.log("users data", usersData);
    return usersData;
  } catch (err) {
    // return thunkApi.rejectWithValue(err)
    console.log(err);
    return thunkApi.rejectWithvalue(err);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    users: [],
  },
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(usersThunk.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(usersThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.isError = false;
        state.errorMessage = "";
        state.users = action.payload;
      })
      .addCase(usersThunk.rejected, (state, action) => {
        state.isPending = false;
        state.isError = true;
        state.errorMessage = action.error.message;
        state.users = [];
      });
  },
});

//export action creator functions
export const {} = usersSlice.actions;
//export reducer of users slice
export default usersSlice.reducer;

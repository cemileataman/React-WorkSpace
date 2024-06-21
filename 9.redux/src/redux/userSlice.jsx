import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data);
  return response.data;//döndürülen değer action
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Http isteği olmaz ise kullanılır.
  },
  extraReducers: (builder) => {
//Http isteklerinde kullanılır.
builder.addCase(getAllUsers.fulfilled,(state,action)=>{//state initialState //fulfilled başarılı olursa
    state.users =action.payload;
})
  }
});
export const {} = userSlice.actions;//parantez içine sadece reducers içine yazdığımız fonksiyonları yazabiliriz.

export default userSlice.reducer;

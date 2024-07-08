import { createSlice } from '@reduxjs/toolkit';

type TInitialAuthState = {
  user: null | object;
  token: null | object;
};

const initialState: TInitialAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uesr, token } = action.payload;
      state.user = uesr;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

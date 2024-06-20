import {createSlice} from '@reduxjs/toolkit';

const isServer = typeof window === 'undefined';

export const counterSlice = createSlice({
  name: 'general',
  initialState: {
    scope: 'partner',
    isServer,
  },
  reducers: {
    setGeneralState: (state, data) => ({
      ...(state || {}),
      ...(data?.payload || {}),
    }),
  },
});

export const {setGeneralState} = counterSlice.actions;

export default counterSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  _initialized: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileState: (state, action) => {
      console.log(state, action);
      state = {...state, ...action.payload};
      return state;
    },
    resetProfileState: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProfileState, resetProfileState} = profileSlice.actions;

export default profileSlice.reducer;

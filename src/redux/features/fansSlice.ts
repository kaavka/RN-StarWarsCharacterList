import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FansState {
  maleFans: string[];
  femaleFans: string[];
  otherFans: string[];
  [key: string]: string[];
}

const initialState: FansState = {
  maleFans: [],
  femaleFans: [],
  otherFans: [],
};

export const fansSlice = createSlice({
  name: 'fans',
  initialState,
  reducers: {
    addFan: {
      reducer: (
        state,
        action: PayloadAction<{category: string; name: string}>,
      ) => {
        const {category, name} = action.payload;
        if (category === 'male') {
          state.maleFans.push(name);
        } else if (category === 'female') {
          state.femaleFans.push(name);
        } else {
          state.otherFans.push(name);
        }
      },
      prepare: (category: string, name: string) => ({
        payload: {category, name},
      }),
    },
    removeFan: {
      reducer: (
        state,
        action: PayloadAction<{category: string; name: string}>,
      ) => {
        const {category, name} = action.payload;
        if (category === 'male') {
          state.maleFans = state.maleFans.filter(fan => fan !== name);
        } else if (category === 'female') {
          state.femaleFans = state.femaleFans.filter(fan => fan !== name);
        } else {
          state.otherFans = state.otherFans.filter(fan => fan !== name);
        }
      },
      prepare: (category: string, name: string) => ({
        payload: {category, name},
      }),
    },
    clearAllFans: state => {
      state.maleFans = [];
      state.femaleFans = [];
      state.otherFans = [];
    },
  },
});

export const {addFan, removeFan, clearAllFans} = fansSlice.actions;

export default fansSlice.reducer;

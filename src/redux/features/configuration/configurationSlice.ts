// configurationSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigurationState {
  selectedOption: any; // Set the type of selectedOption
}

const initialState: ConfigurationState = {
  selectedOption: null,
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    selectOption(state, action: PayloadAction<any>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = configurationSlice.actions;
export default configurationSlice.reducer;

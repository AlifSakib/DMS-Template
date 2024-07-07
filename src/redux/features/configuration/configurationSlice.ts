import { createSlice } from "@reduxjs/toolkit";

const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    selectedOption:  {
        id : "configuration",
        title : "Configuration"
    }
  },
  reducers: {
    selectOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = configurationSlice.actions;
export default configurationSlice.reducer;

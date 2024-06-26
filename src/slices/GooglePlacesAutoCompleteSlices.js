import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAutocompleteInput = createAsyncThunk(
  'autocomplete/fetchInput',
  async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(input), 500); // Simulate async operation
    });
  }
);

const GooglePlacesAutoCompleteSlices = createSlice({
  name: 'autocomplete',
  initialState: {
    input: '',
    status: 'idle',
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutocompleteInput.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAutocompleteInput.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.input = action.payload;
      })
      .addCase(fetchAutocompleteInput.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setInput } = GooglePlacesAutoCompleteSlices.actions;
export default GooglePlacesAutoCompleteSlices.reducer;
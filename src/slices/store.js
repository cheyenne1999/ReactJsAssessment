import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import GooglePlacesAutoCompleteReducer from './GooglePlacesAutoCompleteSlices';

export const store = configureStore({
    reducer: {
      autocomplete: GooglePlacesAutoCompleteReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

  export default store;
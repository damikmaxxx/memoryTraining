import {configureStore  } from '@reduxjs/toolkit';
import foldersCardsSlice from './reducers/FoldersCardsSlice';

export const store = configureStore({
  reducer:{
    foldersCards:foldersCardsSlice
  }
 
})

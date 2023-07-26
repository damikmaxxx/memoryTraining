import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [
    {
      id: 1,
      name: "Физика Физика Физика Физика Физика Физика ФизикаФизика Физика",
      cards: [
        {
          id: 1,
          question: "первый вопрос по физике",
          answer: "ответ 1 по физике",
        },
        {
          id: 2,
          question: "второй вопрос по физике",
          answer: "ответ 2 по физике",
        },
        {
          id: 3,
          question: "3 вопрос по физике",
          answer: "ответ 3 по физике",
        },
        {
          id: 4,
          question: "4 вопрос по физике",
          answer: "ответ 4 по физике",
        },
      ],
    },
    {
      id: 2,
      name: "Английский",
      cards: [
        {
          id: 1,
          question: "первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому первый вопрос по английскому",
          answer: "ответ 1 по английскому",
        },
        {
          id: 2,
          question: "второй вопрос по английскому",
          answer: "ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскому ответ 2 по английскомуответ 2 по английскому ответ 2 по английскому ",
        },
        {
          id: 3,
          question: "третий вопрос по английскому",
          answer: "ответ 3 по английскому",
        },
      ],
    },
    {
      id: 3,
      name: "Математика",
      cards: [
        {
          id: 1,
          question: "5+5",
          answer: "10",
        },
        {
          id: 2,
          question: "1+1",
          answer: "2",
        },
        {
          id: 3,
          question: "3*3",
          answer: "9",
        },
      ],
    },
  ],
};

export const foldersCardsSlice = createSlice({
  name: "foldersCards",
  initialState,
  reducers: {
    setNewFolder: (state, action) => {
      state.item.push(action.payload);
    },
    setNewCard: (state, action) => {
      state.item
        .filter((folder) => folder.id === action.payload.idFolder)[0]
        .cards.push(action.payload.newCard);
    },
    deleteCard: (state, action) => {
      state.item.filter((folder) => folder.id === action.payload.idFolder)[0].cards = state.item
      .filter((folder) => folder.id === action.payload.idFolder)[0]
      .cards.filter((card) => card.id !== action.payload.idCard);
      
    },
    deleteFolder: (state, action) => {
      state.item = state.item
      .filter((folder) => folder.id !== action.payload)
    },
  },
});

export const { setNewFolder, setNewCard, deleteCard,deleteFolder } =
  foldersCardsSlice.actions;
export default foldersCardsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// custom types
import {
    SerInitialState,
    ActionGoods
} from "../types/types";
  
const serInitialState: SerInitialState = {
    basket: [],
};
  
const serSlice = createSlice({
    name: "serStorage",
    initialState: serInitialState,
    reducers: {

        goods(state, action: PayloadAction<ActionGoods>) {

            switch (action.payload.mode) {
                // clear all goods
                case "clearCourses":
                  state.basket = [];
                  break;
                default:
                  break;
            }
        }
    }
});

export const {goods,} =
    serSlice.actions;
  export default serSlice.reducer;
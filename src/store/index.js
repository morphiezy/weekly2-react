import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./ArticleSlice";

const store = configureStore({reducer:ArticleSlice})


export default store;
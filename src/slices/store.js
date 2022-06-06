/**
 * 创建store
 */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // 导入Reducer

// store就相当于数据库整体，todo: 就相当于其中一个库名
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;

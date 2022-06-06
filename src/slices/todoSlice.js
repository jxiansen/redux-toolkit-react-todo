/**
 * slices 就相当于 types,actions,reducers, 以对象的形式存在
 * 并且不需要返回新 state了, 可以直接操作 state,内部实现了 immutable的功能
 */
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todos: [
      { title: "吃饭", completed: false },
      { title: "睡觉", completed: false },
    ],
    visible: true,
  },
  reducers: {
    createTodo: (state, action) => {
      if (state.todos.map((i) => i.title).includes(action.payload.title)) {
        return state;
      } // 去重
      state.todos.push({
        title: action.payload.title,
        completed: false,
      });
    }, // payload是action上携带的数据
    addToStore: (state, action) => {
      state.todos = action.payload.todosArr;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((i) => i.title !== action.payload.title);
    },
    deleteAll: (state) => {
      state.todos.length = 0;
    },
    completedAll: (state) => {
      state.todos.forEach((item) => (item.completed = true));
    },
    toggleShow: (state) => {
      state.visible = !state.visible;
    }, // 不需要返回值,只对原来state做修改,所以用用花括号包裹,不让他返回数据
    completedCur: (state, action) => {
      state.todos.forEach((item) => {
        if (item.title === action.payload.title) {
          item.completed = !item.completed;
        }
      });
    },
  },
});

// action创建函数为每一个例子生成reducer函数
export const {
  createTodo,
  addToStore,
  deleteTodo,
  deleteAll,
  completedAll,
  toggleShow,
  completedCur,
} = todoSlice.actions;

// 相当于之前的 reducer
export default todoSlice.reducer;

/* 
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Reduxtoolkit允许我们在还原器中编写 "变异 "逻辑。
      // 它实际上并没有改变状态，因为它使用了immer库，
      // 它可以检测到 "草稿状态 "的变化，并根据这些变化产生一个全新的不可变的状态。
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 下面的函数被称为thunk，允许我们执行异步逻辑。
// 它可以像普通动作一样被调度：`dispatch(incrementAsync(10))`。
// 这将调用thunk，并将`dispatch`函数作为第一个参数。然后可以执行异步代码，并可以调度其他动作
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// 下面的函数被称为选择器，允许我们从状态中选择一个值。
// 选择器也可以在使用它们的地方内联定义，而不是在分片文件中。
// 例如：`useSelector((state) => state.counter.value)`。
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
 */

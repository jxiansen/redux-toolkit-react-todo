import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, addToStore } from "./../slices/todoSlice";
import AddIcon from "./AddIcon";
/**
 * 头部组件
 */

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  /**
   * 将store中的数据存储再localStore中
   */
  const todoData = useSelector((state) => state.todo.todos);
  const storeToLocalStorage = (obj) => {
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(obj));
  };
  useEffect(() => storeToLocalStorage(todoData));

  const readFromLocalStorage = () => JSON.parse(localStorage.data);
  const data = readFromLocalStorage();
  useEffect(() => {
    dispatch(addToStore({ todosArr: data }));
  }, []);

  const handleInputValue = (event) => setInput(event.target.value.trim());

  /**
   * 处理回车事件
   */

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodoItem();
    }
  };

  /**
   * 将当前的项目添加到store
   */

  const addTodoItem = () => {
    dispatch(createTodo({ title: input }));
    setInput("");
  };
  return (
    <div className="mb-4 ">
      <h1 className="text-4xl font-medium text-center">ToDo List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          onChange={handleInputValue}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <button
          className="flex  p-2 border-2 rounded text-green-300 border-green-300 hover:text-white hover:bg-green-300"
          onClick={addTodoItem}
        >
          <AddIcon />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

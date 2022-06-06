import { useSelector, useDispatch } from "react-redux";
import { completedAll, deleteAll, toggleShow } from "./../slices/todoSlice";
/**
 * 底部栏子组件
 */

export default function Footer(props) {
  const { todos, visible } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <span className="text">Remainder: {todos.length}</span>
      <button
        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
        onClick={() => dispatch(toggleShow())}
      >
        {visible ? "Hidden" : "Show"}
      </button>
      <button
        onClick={() => dispatch(completedAll())}
        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
      >
        DoneAll
      </button>
      <button
        className="border-2 border-red-500 p-2 text-red-500 ml-4"
        onClick={() => dispatch(deleteAll())}
      >
        Reset
      </button>
    </div>
  );
}

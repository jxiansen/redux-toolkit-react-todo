import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedCur } from "./../slices/todoSlice";
/**
 * 需要渲染的每一项
 * 根据接收的props(属性)渲染出子元素, props时组件对外的接口, props是只读的属性,组件内部不能修改props
 * 只能在该组件的上层组件中修改。
 */
export default function ListItem(props) {
  // const data = useStore().getState().todo;
  const { todos, visible } = useSelector((state) => state.todo);
  // useSelectore 拿到store,回调函数再返回store的处理结果
  const dispatch = useDispatch();

  return (
    <div className={!visible && "hidden"}>
      {todos.map((val, idx) => (
        <Item
          title={val.title}
          key={idx}
          check={() => dispatch(completedCur({ title: val.title }))}
          onDelete={() => dispatch(deleteTodo({ title: val.title }))}
          completed={val.completed}
        />
      ))}
    </div>
  );
}

function Item(props) {
  return (
    <div className="flex mb-4 items-center">
      <p
        className={
          props.completed
            ? "w-full line-through text-green-500 text-lg"
            : "w-full text-gray-600 text-lg"
        }
      >
        {props.title}
      </p>
      <button
        className={
          props.completed
            ? "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray  hover:bg-gray-400"
            : "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400"
        }
        onClick={props.check}
      >
        {props.completed ? "Undone" : "Done"}
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded border-red-500 text-red-500 border-red hover:text-white hover:bg-red-600"
        onClick={props.onDelete}
      >
        Remove
      </button>
    </div>
  );
}

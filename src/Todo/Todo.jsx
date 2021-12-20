import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../TodoRedux/app/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
};
export default Todo;

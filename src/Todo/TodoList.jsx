import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          gap: "2rem",
          border: "1px solid gray",
          wrap: "wrap",
          paddingLeft: "30%"
          // flexDirection: "column"
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "10px",
            background: "greenyellow"
          }}
        >
          {title}
        </div>
        <div
          style={{
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "10px",
            background: "greenyellow"
          }}
        >{`${status}`}</div>
        <button
          style={{
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "10px",
            background: "greenyellow"
          }}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          style={{
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "10px",
            background: "greenyellow"
          }}
          onClick={() => onToggle(id)}
        >
          Toggle Status
        </button>
      </div>
      <br />
    </>
  );
}

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  const getTodos = () => {
    // pre fetch
    const requestAction = getTodosRequest();
    dispatch(requestAction);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  return (
    <div
      style={{
        background: "cornsilk",
        margin: "auto",
        marginTop: "20px",
        fontSize: "20px"
      }}
    >
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;

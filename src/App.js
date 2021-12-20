import "./styles.css";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return isAuth ? (
    <div className="App">
      <h1>Welcome to the Dashboard</h1>
      <h3>User ID: {token} </h3>
      <h1>Todo-List</h1>
      <Todo />
    </div>
  ) : (
    <Login />
  );
}

// * network requests

// * Working with local storage
// * Working with multiple reducers/ combining reducers
// * working with developer tools

// * middlewares

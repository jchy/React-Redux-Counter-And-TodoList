import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";
import { useSelector } from "react-redux";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";
// import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.count);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <h1>Counter APP Using React-Redux</h1>
      <h2>{count} </h2>
      <Counter />
      {isAuth ? (
        <div>
          <h3>User Token: {token} </h3>
          <h1>Todo</h1>
          <Todo />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

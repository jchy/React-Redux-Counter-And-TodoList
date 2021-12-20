import { useDispatch } from "react-redux";
import { loginSuccess } from "../TodoRedux/auth/action";

const Login = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleAdd}>SIGN-IN</button>
    </div>
  );
};
export default Login;

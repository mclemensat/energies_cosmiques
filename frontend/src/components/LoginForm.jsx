import { useState, useContext } from "react";

import { login } from "@services/api";
import LoginContext from "@contexts/LoginContext";

export default function LoginForm({ setIsShowLogin, isShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(LoginContext);

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      setCurrentUser(await login({ username, password }));
      setIsShowLogin(!isShowLogin)
      console.log('hello,', username)
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="absolute ml-[15%]">
    <div
      className={`${
        isShowLogin ? "" : "hidden"
      } flex justify-center z-50 w-56 border-black border-2 rounded-3xl`}
    >
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text text-mada text-gray-800 px-1 font-bold">
              Login: 
            </h1>
            <label
              htmlFor="user"
              className="text-mada text-gray-800 p-1"
            >
              Username
              <br />
              <input
                type="text"
                name="username"
                className="pl-2 border border-black"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                placeholder="Your name"
              />
              <br />
            </label>
            <label
              htmlFor="password"
              className="text-mada text-gray-800 p-1"
            >
              Password
              <br />
              <input
                type="password"
                name="password"
                className="pl-2 border border-black"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Your password"
              />
              <br />
            </label>
            <input
              type="submit"
              value="LOGIN"
              className="border border-black hover:scale-105 duration-200 p-1 px-2 rounded-3xl mt-3 font-bold"
              onClick={onLogin}
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

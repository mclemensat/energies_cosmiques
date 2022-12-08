import { useState, useContext } from "react";

import { login } from "@services/api";
import { LoginContext } from "@contexts/LoginContextProvider";

export default function LoginForm({ setIsShowLogin, isShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(LoginContext);

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      setCurrentUser(await login({ username, password }));
      setIsShowLogin(!isShowLogin);
      console.log("hello,", username);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="absolute ml-[25%] mt-32 md:ml-4 z-10">
      <div
        className={`${
          isShowLogin ? "" : "hidden"
        } flex justify-center z-50 w-64 bg-black opacity-80 border-black border-2 rounded-3xl`}
      >
        <div className="login-form">
          <div className="form-box solid">
            <form>
              <h1 className="text-slate-200 px-1 font-bold my-2 text-lg">Admin :</h1>
              <label htmlFor="user" className="text-slate-200 p-1">
                Nom d'utilisateur
                <br />
                <input
                  type="text"
                  name="username"
                  className="pl-2 text-black mb-4 text-lg"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                  placeholder="Nom"
                />
                <br />
              </label>
              <label htmlFor="password" className="text-slate-200 p-1">
                Mot de passe
                <br />
                <input
                  type="password"
                  name="password"
                  className="pl-2 text-black text-lg"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="••••••••"
                />
                <br />
              </label>
              <input
                type="submit"
                value="Connexion"
                className="my-4 text-gray-200 border cursor-pointer border-white hover:scale-105 duration-200 p-2 px-4 rounded-3xl font-bold ml-[22%]"
                onClick={onLogin}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

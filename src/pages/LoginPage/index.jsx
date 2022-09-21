import darthIcon from "../../../public/darth-vader_icon.svg";
import { Button } from "@mui/material";
import Input from "../../components/Input/index.jsx";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const { setToken } = useContext(UserContext);

  function handleChange(e) {
    login[e.target.name] = e.target.value;
    setLogin({ ...login });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const promisse = api.post("sign-in", { ...login });

    promisse.then((obj) => {
      const { data } = obj;
      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/");
    });

    promisse.catch((error) => {
      alert(error.response.data);
    });
  }

  return (
    <div className="h-screen flex bg-black flex-col justify-center items-center">
      <img src={darthIcon} alt="darth icon" className="" />
      <h2 className="text-[#ee1739] text-5xl font-bold mt-6 ">Star Wiki</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6 gap-4">
        <Input
          label="email"
          type="email"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <Input
          label="password"
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          {" "}
          Enter{" "}
        </Button>
      </form>
      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        new here? create account
      </Button>
    </div>
  );
}

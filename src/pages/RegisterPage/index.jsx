import darthIcon from "../../../public/darth-vader_icon.svg";
import { Button, CircularProgress } from "@mui/material";
import Input from "../../components/Input/index.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api.js";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submited, setSubmited] = useState(false);

  function handleChange(e) {
    register[e.target.name] = e.target.value;
    setRegister({ ...register });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);

    const promisse = api.post("sign-up", { ...register });

    promisse.then(() => {
      navigate("/sign-in");
    });

    promisse.catch((error) => {
      alert(error.response.data);
      setSubmited(false);
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
          value={register.email}
          onChange={handleChange}
          disabled={submited}
        />
        <Input
          label="password"
          type="password"
          name="password"
          value={register.password}
          onChange={handleChange}
          disabled={submited}
        />
        <Input
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={register.confirmPassword}
          onChange={handleChange}
          disabled={submited}
        />
        <Button variant="contained" type="submit" disabled={submited}>
          {submited ? <CircularProgress /> : "Create account"}
        </Button>
      </form>
      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        have an account? sign-in
      </Button>
    </div>
  );
}

import darthIcon from "../../../public/darth-vader_icon.svg";
import { Button } from "@mui/material";
import Input from "../../components/Input/index.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex bg-black flex-col justify-center items-center">
      <img src={darthIcon} alt="darth icon" className="" />
      <h2 className="text-[#ee1739] text-5xl font-bold mt-6 ">Star Wiki</h2>
      <form action="" className="flex flex-col mt-6 gap-4">
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Button variant="contained"> Enter </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          new here? create account
        </Button>
      </form>
    </div>
  );
}

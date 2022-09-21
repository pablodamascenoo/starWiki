import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function redirectPage(page) {
    navigate(`/${page}`);
  }

  return (
    <div className="h-screen bg-black  flex flex-col items-center">
      <h1 className="text-6xl text-[#ee1739] pt-10 text-center font-bold animate-fade-in ">
        Welcome to Star Wiki
      </h1>
      <p className="text-2xl text-[#6D676E] mt-10 text-center animate-slow-fade-in ">
        Choose one of the options below
      </p>
      <div className="flex mt-10 gap-5 animate-slow-fade-in ">
        <Button
          variant="contained"
          onClick={() => {
            redirectPage("person");
          }}
        >
          Persons
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            redirectPage("starships");
          }}
        >
          Starships
        </Button>
      </div>
    </div>
  );
}

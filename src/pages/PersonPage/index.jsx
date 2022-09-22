import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../../components/Card/index.jsx";
import { User, CaretLeft } from "phosphor-react";
import { Button, CircularProgress, Fab } from "@mui/material";

export default function PersonPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [people, setPeople] = useState();
  const [query, setQuery] = useState(searchParams.get("page") || "1");
  const navigate = useNavigate();

  useEffect(() => {
    const promisse = axios.get(
      `https://swapi.dev/api/people/?page=${query ? query : 1}`
    );

    promisse.then((obj) => {
      const { data } = obj;
      setPeople({ ...data });
    });
  }, [query]);

  return (
    <div className="h-screen bg-black overflow-y-scroll ">
      <Fab
        color="primary"
        onClick={() => {
          navigate("/");
        }}
        sx={{ top: "30px", left: "30px", position: "absolute" }}
      >
        <CaretLeft color="black" size={25} />
      </Fab>
      <h1 className="text-4xl text-[#ee1739] text-center my-10 ">People</h1>
      <div className="flex flex-wrap justify-center gap-5 mx-20">
        {!people ? (
          <CircularProgress />
        ) : (
          people?.results.map((person, index) => (
            <Card key={index}>
              <div className="flex justify-between">
                <User color="white" size={32}></User>
                <p className="text-white text-end font-bold text-lg ">
                  {person.name}
                </p>
              </div>
              <div className="mt-5">
                <p className="text-white">Height: {person.height}cm</p>
                <p className="text-white">Weight: {person.mass}kg</p>
                <p className="text-white">Hair color: {person.hair_color}</p>
                <p className="text-white">Skin color: {person.skin_color}</p>
                <p className="text-white">Eye color: {person.eye_color}</p>
                <p className="text-white">Gender: {person.gender}</p>
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="w-screen flex justify-evenly my-10">
        <Button
          disabled={!people?.previous}
          onClick={() => {
            setQuery(Number(query) - 1);
            navigate(`/person/?page=${query}`);
          }}
          variant="contained"
        >
          prev
        </Button>
        <p className="text-[#ee1739]">page {query}</p>
        <Button
          disabled={!people?.next}
          onClick={() => {
            setQuery(Number(query) + 1);
            navigate(`/person/?page=${Number(query) + 1}`);
          }}
          variant="contained"
        >
          next
        </Button>
      </div>
    </div>
  );
}

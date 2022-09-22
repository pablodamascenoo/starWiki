import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  CircularProgress,
  Fab,
} from "@mui/material";
import { CaretLeft, Rocket } from "phosphor-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function StarshipPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [starships, setStarships] = useState();
  const [query, setQuery] = useState(searchParams.get("page") || "1");
  const navigate = useNavigate();

  useEffect(() => {
    const promisse = axios.get(
      `https://swapi.dev/api/starships/?page=${query ? query : 1}`
    );

    promisse.then((obj) => {
      const { data } = obj;
      setStarships({ ...data });
    });
  }, [query]);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center overflow-scroll ">
      <Fab
        color="primary"
        onClick={() => {
          navigate("/");
        }}
        sx={{ top: "30px", left: "30px", position: "absolute" }}
      >
        <CaretLeft color="black" size={25} />
      </Fab>
      <h1 className="text-4xl text-[#ee1739] text-center mt-40 ">Starships</h1>
      {!starships ? (
        <CircularProgress sx={{ marginTop: "20px" }} />
      ) : (
        <List
          sx={{
            width: "100%",
            maxWidth: 500,
            bgcolor: "background.black",
          }}
        >
          {starships?.results.map((value, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => {
                    navigate(`/starships/${value.url.match(/\d+/)[0]}`);
                  }}
                >
                  details
                </Button>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <Rocket />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={value.name} sx={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      )}

      <div className="w-screen flex justify-evenly my-10">
        <Button
          disabled={!starships?.previous}
          onClick={() => {
            setQuery(Number(query) - 1);
            navigate(`/starships/?page=${query}`);
          }}
          variant="contained"
        >
          prev
        </Button>
        <p className="text-[#ee1739]">page {query}</p>
        <Button
          disabled={!starships?.next}
          onClick={() => {
            setQuery(Number(query) + 1);
            navigate(`/starships/?page=${Number(query) + 1}`);
          }}
          variant="contained"
        >
          next
        </Button>
      </div>
    </div>
  );
}

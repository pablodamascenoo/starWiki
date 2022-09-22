import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Rocket } from "phosphor-react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from "@mui/material";
import UserContext from "../../contexts/UserContext.js";
import api from "../../services/api.js";

export default function DetailStarshipPage() {
  const { id } = useParams();
  const [starship, setStarship] = useState({});
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      alert("you must be logged to use this page");
      return navigate("/sign-in");
    }

    const promisseApi = api.get("/health", config);

    promisseApi.catch((error) => {
      alert(error.response.data);
      navigate("/sign-in");
    });

    const promisseSwapi = axios.get(`https://swapi.dev/api/starships/${id}`);

    promisseSwapi.then((obj) => {
      const { data } = obj;
      setStarship({ ...data });
    });
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col pt-5 items-center overflow-y-scroll">
      <div className="flex justify-center items-center gap-5">
        <Rocket color="white" size={40} />
        {!Object.keys(starship).length ? (
          <></>
        ) : (
          <p className="text-[#ee1739] text-3xl text-center font-bold py-10">
            {starship?.name}
          </p>
        )}
      </div>
      {!Object.keys(starship).length ? (
        <CircularProgress sx={{ margin: "40px 0" }} />
      ) : (
        <List
          sx={{
            width: "100%",
            maxWidth: 500,
            bgcolor: "background.paper",
            marginBottom: "30px",
            borderRadius: "20px",
          }}
        >
          {Object.keys(starship)
            .slice(1, 12)
            .map((key, index) => (
              <ListItem key={index}>
                <ListItemText sx={{ textAlign: "initial", color: "white" }}>
                  {key}
                </ListItemText>
                <ListItemText sx={{ textAlign: "end", color: "white" }}>
                  {starship[key]}
                </ListItemText>
              </ListItem>
            ))}
        </List>
      )}
      <Button
        variant="contained"
        sx={{ marginBottom: "20px" }}
        onClick={() => {
          navigate("/starships");
        }}
      >
        back to starships
      </Button>
    </div>
  );
}

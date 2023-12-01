import Quote from "./Quote";
import { Typography, Grid } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";

//import Button from "@mui/material/Button"; //o así, funcionaría más rápido
import { useEffect, useState } from "react";
import { Copyright } from "@mui/icons-material";

function App() {
  const [fetchQuote, setfetchQuote] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setfetchQuote(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleQuote() {
    fetchQuote && setIndex(Math.floor(Math.random() * fetchQuote.length));
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h5" gutterBottom>
          Random Quotes
        </Typography>
      </Grid>

      <Grid item>
        <Quote fetch={fetchQuote} index={index} handleQ={handleQuote} />
      </Grid>

      <Grid item>
        <Typography
          variant="body2"
          sx={{
            // color: "text.secondary",
            color: "#350f4f",
            // color: (theme) => theme.palette.common.black,
            // color: "cyan.400",
            marginTop: 2,
            textAlign: "center",
          }}
        >
          React Quote Machine <Copyright /> Aural 2023
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;

//Falta: error y loading useState para agregar al fetch
//Hacer que no se repitan las quotes cuando me haga el random
//agregar un corazoncito para poner like or dislike y que eso sea un post/patch a la api

//MATERIAL UI https://mui.com/material-ui/getting-started/installation/

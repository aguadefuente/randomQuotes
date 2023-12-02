import Appbar from "./Appbar";
import Quote from "./Quote";
import Copyright from "./Footer";

//import Button from "@mui/material/Button"; //o así, funcionaría más rápido
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

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
    <>
      <Appbar />
      <Quote fetch={fetchQuote} index={index} handleQ={handleQuote} />
      <Copyright />
    </>
  );
}

export default App;

//Falta: error y loading useState para agregar al fetch
//Hacer que no se repitan las quotes cuando me haga el random
//agregar un corazoncito para poner like or dislike y que eso sea un post/patch a la api

//MATERIAL UI https://mui.com/material-ui/getting-started/installation/

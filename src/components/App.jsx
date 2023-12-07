import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import ResponsiveAppBar from "./Appbar.jsx";
import Quote from "./Quote.jsx";
import Copyright from "./Footer.jsx";
import { Container } from "@mui/material";
import Favourite from "./Favourite.jsx";

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
      <Router>
        <ResponsiveAppBar />
        <Switch>
          <Route exact path="/">
            <Container>
              <Quote data={fetchQuote} index={index} handleQ={handleQuote} />
            </Container>
          </Route>

          <Route path="/favourite">
            <Container>
              <Favourite data={fetchQuote} />
            </Container>
          </Route>
        </Switch>
        <Copyright />
      </Router>
    </>
  );
}

export default App;

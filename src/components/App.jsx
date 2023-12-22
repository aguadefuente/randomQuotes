import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import ResponsiveAppBar from "./Appbar.jsx";
import Quote from "./Quote.jsx";
import Copyright from "./Footer.jsx";
import { Container } from "@mui/material";
import Favourite from "./Favourite.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";

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
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/"
            element={
              <Container>
                <Quote data={fetchQuote} index={index} handleQ={handleQuote} />
              </Container>
            }
          />
          <Route
            path="/favourite"
            element={
              <Container>
                <Favourite data={fetchQuote} />
              </Container>
            }
          ></Route>
        </Routes>

        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;

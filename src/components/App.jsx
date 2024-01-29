//import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Quote from "./Quote.jsx";

import { Container } from "@mui/material";
import Favourite from "./Favourite.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import RootLayout from "./RootLayout.jsx";

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            index
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
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

import ResponsiveAppBar from "./Appbar.jsx";
import Quote from "./Quote.jsx";
import Copyright from "./Footer.jsx";

import { useEffect, useState } from "react";

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
      <ResponsiveAppBar />
      <Quote fetch={fetchQuote} index={index} handleQ={handleQuote} />
      <Copyright />
    </>
  );
}

export default App;

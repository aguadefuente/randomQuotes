import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

//import Button from "@mui/material/Button"; //o así, funcionaría más rápido
import { useEffect, useState } from "react";

function App() {
  const [quoteList, setQuoteList] = useState(null);
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
        setQuoteList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleQuote() {
    quoteList && setIndex(Math.floor(Math.random() * quoteList.length));
    console.log(index);
  }

  return (
    <>
      <Typography
        variant="h3"
        component="header"
        gutterBottom="true"
        sx={{ borderBottom: 1 }}
      >
        Random Quotes
      </Typography>
      <Card id="quote-box" sx={{ maxWidth: 345 }}>
        {quoteList && (
          <>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div" id="text">
                {quoteList[index].text}
              </Typography>
              <Typography variant="body2" id="author">
                {quoteList[index].author}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "flex-end" }}>
              <IconButton
                title="Tweet this quote"
                size="small"
                color="primary"
                href={`https://twitter.com/intent/tweet?text=${
                  quoteList[index].text + " - " + quoteList[index].author
                }`}
                target="_blank"
                id="tweet-quote"
              >
                <TwitterIcon></TwitterIcon>
              </IconButton>

              <Button
                id="new-quote"
                variant="contained"
                size="small"
                sx={{ margin: 2 }}
                onClick={handleQuote}
              >
                New Quote
              </Button>
            </CardActions>
          </>
        )}
      </Card>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          marginTop: 2,
          textAlign: "center",
        }}
        component="footer"
      >
        React Quote Machine 🌬️ Aural 2023
      </Typography>
    </>
  );
}

export default App;

//Falta: error y loading useState para agregar al fetch
//Hacer que no se repitan las quotes cuando me haga el random
//agregar un corazoncito para poner like or dislike y que eso sea un post/patch a la api

//MATERIAL UI https://mui.com/material-ui/getting-started/installation/

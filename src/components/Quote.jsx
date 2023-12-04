import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { XIcon } from "./XIcon";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Quote = ({ fetch, index, handleQ }) => {
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("gray");

  function handleFavourite() {
    setStatus(!status);
    if (status) {
      setColor("red");
    } else {
      setColor("gray");
    }
  }

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card id="quote-box" elevation={3}>
          {fetch && (
            <>
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ textAlign: "end", my: 2, mx: 2 }}>
                  <IconButton onClick={handleFavourite}>
                    <FavoriteOutlinedIcon sx={{ color: { color } }} />
                  </IconButton>
                </Box>

                <Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    id="text"
                  >
                    {fetch[index].text}
                  </Typography>
                  <Typography variant="body2" id="author">
                    {fetch[index].author}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  title="Tweet this quote"
                  size="small"
                  color="primary"
                  href={`https://twitter.com/intent/tweet?text=${
                    fetch[index].text + " - " + fetch[index].author
                  }`}
                  target="_blank"
                  id="tweet-quote"
                >
                  <XIcon />
                </IconButton>

                <Button
                  id="new-quote"
                  variant="contained"
                  size="small"
                  sx={{ margin: 2 }}
                  onClick={handleQ}
                >
                  New Quote
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default Quote;

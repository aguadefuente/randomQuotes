import Liked from "./Liked.jsx";

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

const Quote = ({ data, index, handleQ }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card id="quote-box" elevation={3} sx={{ my: 10 }}>
          {data && (
            <>
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ textAlign: "end", my: 2, mx: 2 }}>
                  {/*Liked iconButton */}
                  <Liked key={index} id={index} />
                </Box>

                <Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    id="text"
                  >
                    {data[index].text}
                  </Typography>

                  <Typography variant="body2" id="author">
                    {data[index].author}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  title="Tweet this quote"
                  size="small"
                  color="primary"
                  href={`https://twitter.com/intent/tweet?text=${
                    data[index].text + " - " + data[index].author
                  }`}
                  target="_blank"
                  id="tweet-quote"
                >
                  {/*Twitter IconButton */}
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

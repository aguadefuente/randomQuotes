import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";

const Quote = ({ fetch, index, handleQ }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card id="quote-box" sx={{ maxWidth: 345 }}>
          {fetch && (
            <>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div" id="text">
                  {fetch[index].text}
                </Typography>
                <Typography variant="body2" id="author">
                  {fetch[index].author}
                </Typography>
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
                  <TwitterIcon></TwitterIcon>
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

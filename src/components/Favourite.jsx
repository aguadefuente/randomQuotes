import { Box, Typography } from "@mui/material";
import Liked from "./Liked";

const Favourite = ({ data }) => {
  const localStorageData = JSON.parse(localStorage.getItem("AllLiked"));
  console.log(typeof localStorageData, localStorageData);

  return (
    <>
      <Box sx={{ height: "80vh", marginTop: 10, color: "black" }}>
        <Typography variant="h3" component="h1">
          My favourite quotes
        </Typography>
        {data && (
          <ul>
            {localStorageData.map((item) => {
              return (
                <>
                  <li>
                    {data[item].text.toUpperCase()} / {data[item].author}
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </Box>
    </>
  );
};

export default Favourite;

import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Liked = ({ id }) => {
  const [allLiked, setAllLiked] = useState(
    JSON.parse(localStorage.getItem("AllLiked")) || []
  );

  const isLiked = allLiked.includes(id);
  let nextArr;

  const handleFavourite = () => {
    if (!isLiked) {
      nextArr = allLiked.concat(id);
    } else {
      nextArr = allLiked.filter((item) => item !== id);
    }

    setAllLiked(nextArr);

    localStorage.setItem("AllLiked", JSON.stringify(nextArr));
    console.log(allLiked);
  };

  return (
    <>
      <IconButton onClick={handleFavourite}>
        <FavoriteOutlinedIcon sx={{ color: isLiked ? "red" : "gray" }} />
      </IconButton>
    </>
  );
};

export default Liked;

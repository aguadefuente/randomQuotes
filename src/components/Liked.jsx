import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Liked = () => {
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
      <IconButton onClick={handleFavourite}>
        <FavoriteOutlinedIcon sx={{ color: { color } }} />
      </IconButton>
    </>
  );
};

export default Liked;

import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Liked = ({ id, data }) => {
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("gray");

  //Local Storage Liked quotes
  const [items, setItems] = useState([]);

  function handleFavourite() {
    setStatus(!status);
    if (status) {
      setColor("red");
      localStorage.setItem("liked", JSON.stringify(data[id]));
      console.log(localStorage);
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

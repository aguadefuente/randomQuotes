import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ marginBottom: 3 }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://codepen.io/your-work/"
        target="_blank"
      >
        Aural
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;

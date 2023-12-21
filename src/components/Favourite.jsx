import { Box, Typography } from "@mui/material";

const Favourite = ({ data }) => {
  const localStorageData = JSON.parse(localStorage.getItem("AllLiked"));
  console.log(typeof localStorageData, localStorageData);

  return (
    <>
      <Box
        sx={{
          height: "80vh",
          marginTop: 10,
          color: "black",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>
          My favourite quotes
        </Typography>
        {data && (
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              "& li:nth-child(even)": {
                backgroundColor: "lightblue",
                width: "fit-content",
              },
            }}
          >
            {" "}
            {/*con el componente <Box/> es más sencillo stilizar.
            Si usáramos el <ul/> tag al no ser un mui component sino un jsx component se usa style y no sx            
            además no podemos usar el :nth-child() css selector*/}
            {localStorageData.map((item) => {
              return (
                <>
                  <li>
                    {data[item].text.toUpperCase()} / {data[item].author}
                  </li>
                </>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favourite;

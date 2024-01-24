//Falta: error y loading useState para agregar al fetch
TAREAS PENDIENTES
- Hacer que no se repitan las quotes cuando me haga el random
- Cuando haya mostrado todas las quotes que me salga un cartel "esas fueron todas las quotes" y un botón "restart"
- agregar un corazoncito para poner like or dislike DONE
- usar LocalStorage() - estudiar como es - para agregarlas a la page Favourites DONE
- agregarle la fecha a la aplicación con el componente del MUI
- Ver el tamaño de la Card mediaquery (breakpoints) - estudiar
- codear login/logout con LocalStorage
- ver el tema del layout de react-router para que en el login no aparezca header/footer

APUNTES:
MATERIAL UI https://mui.com/material-ui/getting-started/installation/

Para importar los componentes:
import Button from "@mui/material/Button"; //funcionaría más rápido
import {Button} from "@mui/material"; //es menos rápido

Uso de algunos componentes: 
//me agrega los tres puntitos al final de un texto ej- Lorem ipsum aldfia...
<Typography noWrap/>

//Me hace un grupito de botones
<ButtonGroup color="primary" variant="contained">
<Button>One</Button>
<Button>Two</Button>
<Button>Three</Button>
</ButtonGroup> 

//Para customizar los estilos podemos usar una función que se llama makeStyles
esta función nos devuelve un React-hook que luego podemos usar dentro de nuestro
componente para acceder a las css classes and styles que definimos

1- importar esa función
import {makeStyles} from '@material-ui/core' 
Nota: no podemos importarla sin destructurin ej- import makeStyles from '@material-ui/core/makeStyle' 
porque no es un componente de MUI sino una función de MUI

2- creamos la variable de nuestro hook //por convención se los llama use... 
y dentro le pasamos un object como argument y dentro las diferentes css classes ej: btn

const useStyle = makeStyle({
    btn: {
      fontSize: 10,
      backgroundColor: "violet",
      "&:hover": {
        backgroundColor: "blue"
      }
    }
})

3- usamos el hook dentro de nuestro component y agregamos la clase al componente hijo que es el componente Button de MUI
export default function App(){
    const classes = useStyle()
    
    return (
        <>
        <Typography
        variant="h6"
        component="h2"
        color="text-secondary"
        gutterBottom
        >
        ToDo
        <Typography/>
        <Button
        className={classes.btn}
        onClick={()=>console.log("clicked")}
        variant="contained"
        >
        Add
        </Button>
        </>
    )
}

//Custom Theme
1- Importamos: una función para crear el custum theme object, 
y un componente para wrappear toda nuestra aplicación y así 
pasarle nuestro custom theme

import {createMuiTheme, ThemeProvider} from "@material-ui/core"

2-crear el theme: ver 
https://mui.com/material-ui/customization/default-theme/
donde se especifican los default values de MUI así podemos crear nuestro objeto según esas keys

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fefefe"
        },
        secondary: purple //no es un nombre sino un objeto. Ver la sección colors palette en MUI https://mui.com/material-ui/customization/color/
    }
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,

    }
})

//Nota: para la typography vamos a Google font y nos bajamos la tipografía que queremos
apretamos la opción @import copiamos el link que nos da y lo pegamos en nuestro index.css

3-usarlo: hay que wrap nuestra App
function App() {
    ...
 return (
    <>
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="sm">
        <Quote fetch={fetchQuote} index={index} handleQ={handleQuote} />
      </Container>
      <Copyright />
    </ThemeProvider>
    </>
  );
}   

//Grid Sistem
- Usa flexbox
- divide la pantalla en 12 columnas

1- Importamos
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

2- Lo usamos: hay que usar un Grid container y un Grid item
y usamos los breakpoints sx(extra small), sm(small), md(medium)..etc
{12} ocupará cada item todo el ancho de la pantalla
{6} ocupará la mitad de la pantalla, entran 2 items de 6 columnas c/u
{3} ocupa cada item 4 columnas c/u, veremos 3 items por row


function App() {
    ...
    return (
    <>
    <Grid container>
      <Grid item xs={12} sm={6} md={3}>
         <Paper>1<Paper/>
      <Grid/>
      <Grid item xs={12} sm={6} md={3}>
         <Paper>2<Paper/>
      <Grid/>
      <Grid item xs={12} sm={6} md={3}>
         <Paper>3<Paper/>
      <Grid/>
      <Grid item xs={12} sm={6} md={3}>
         <Paper>3<Paper/>
      <Grid/>
    </Grid
    </>
  );
}   
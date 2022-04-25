import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import $ from "jquery";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    margin: 0,
    Width: 0,
    opacity: 0,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0px 0",
      backgroundColor: "transparent",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


/* IDIOMAS */
$(document).ready(function () {
  $(".textES").click(function () {
    $(this).css({"opacity": 0 , "display" : "none" })
    $(".textEN").css({"opacity": 1 , "display" : "list-item" })
    $(".saludo").text("Hola! soy Agustín LLadós");
    $("#navH").text("Soy Front-end developer").css("fontSize", "38px");
    $("#navP").text("Tengo 20 años, nacido en 2002, y soy desarrolador Full-stack mejorando mi conocimiento en el area del Back-end. Me gusta programar en el area del Front-end, usar librerias y hacer frente a los desafios que se presenten. Mis hobbis son : hacer deporte, especialmente me gusta el Tenis y el futbol, salir con amigos y comer con mi familia en los domingos ")

    $("#filesVsc").text("Archivos");
    $(".asd").text("> Educacion Y Proyectos <");
    $("#bodyCode6").text("Graduado en ciencias economicas en el Colegio Emaús, con un promedio de 7,66 y premiado como 'Mejor Compañero del Curso'")
    $(".lEng").text("Nivel de Ingles: B2, todavia mejorando para hablar como un americano nativo")
    $(".lEsp").text("Nivel de Español: Nativo")
    $(".fe").text("Titulo de Front End :")
    $(".js").text("Titulo de JavaScript :")
    
    $(".dialog").text("Por favor presteme la linterna").css("fontSize", "20px");
    $(".email").text("Correo Electronico :")
    $(".mensaje").text("Mensaje :")
    $(".subButton").text("Enviar")
  });
});
$(document).ready(function () {
  $(".textEN").click(function () {
    $(this).css({"opacity": 0 , "display" : "none" })
    $(".textES").css({"opacity": 1 , "display" : "list-item" })
    $(".saludo").text("Hi! I am Agustín LLadós");
    $("#navH").text("I am an Front end developer")/* .css("fontSize", "38px"); *//* .css("fontSize", "38px"); */;
    $("#navP").text(`I have 20 years, born in 2002, and I am a full-stack developer improving my back-end's knowledge. I like programming in the front-end area, use some libraries and get some challenges.  My hobbies are: do sport, I love Tennis and Futbol, go out with my friends and eat with my family on Sunday. `)

    $("#filesVsc").text("Files");
    $(".asd").text("> Education & Proyects <");
    $("#bodyCode6").text("Graduated from economic science in my school 'Emaus' with an 7.66 average in highschool and awarded for 'the best friend in the class'")
    $(".lEng").text("English Level: B2, still improving to speak like a native American")
    $(".lEsp").text("Level of Spanish: Native")
    $(".fe").text("Front-end degree:")
    $(".js").text("JavaScript degree:")
    
    $(".dialog").text("Please give me the flashlight");
    $(".email").text("Email :")
    $(".mensaje").text("Message :")
    $(".subButton").text("Submit")
  });
});

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        className="textEN "
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          borderRadius: "35px",
          width: "66px",
          padding: "0px",
          height: "66px",
          backgroundColor: "black",
          position: "fixed",
          bottom: "10%",
          opacity: 0,
          zIndex: 400,
          right: "1%",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
          style={{
            borderRadius: "35px",
            width: "61.5px",
            padding: "0px",
            height: "61.5px",
          }}
          alt="Flag of the United States"
        />
      </Button> 
      <Button
        id="demo-customized-button"
        className="textES"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          borderRadius: "35px",
          width: "66px",
          padding: "0px",
          height: "66px",
          backgroundColor: "black",
          position: "fixed",
          bottom: "10%",
          zIndex: 400,
          right: "1%",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/125px-Bandera_de_Espa%C3%B1a.svg.png"
          style={{
            borderRadius: "30px",
            width: "61.5px",
            padding: "0px",
            height: "61.5px",
          }}
          alt="Bandera de España"
        />
      </Button>
    </div>
  );
}

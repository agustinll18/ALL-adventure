import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

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
/* $(document).ready(function(){
    $(".textES").click(function(){
      $("#bodyCode6").text("Hello world!");
    })
  }); */

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
        className="textEN"
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
          bottom: "10px",
          zIndex: 400,
          right: "27px",
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
          bottom: "100px",
          zIndex: 400,
          right: "27px",
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
        />
      </Button>
      {/*
      
      $(document).ready(function(){
  $("button").click(function(){
    $("p").toggleClass("main");
  });
});
</script>
<style>
.main {
  font-size: 120%;
  color: red !important;
}
</style>
</head>
<body>

<button style="background:red">Toggle class "main" for p elements</button>

<p style="color:green">This is a paragraph.</p>
<p>This is another paragraph.</p>
<p><b>Note:</b> Click the button more than once to see the toggle effect.</p>

      
      
      
      <button class='pushme'>PUSH ME</button>
    <script>
        $(".pushme").click(function () {
            $("p").text(function(i, v){
               return v === 'PUSH ME' ? 'DON"T PUSH ME' : 'PUSH ME'
            }),
            $(this).toggleClass("main").text(function(i, v){
               return v === 'PUSH ME' ? 'DON"T PUSH ME' : 'PUSH ME'
            })
        });
    </script>
    <p>
     DON"T PUSH ME
    </p> */}
    </div>
  );
}

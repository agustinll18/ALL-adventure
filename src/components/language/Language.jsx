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
        id="demo-customized-button" className="red"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          borderRadius: "30px",
          width: "65px",
          padding: "0px",
          height: "65px",
          backgroundColor: "black",
          position: "fixed",
          bottom: "10px",
          zIndex:400,
          right: "27px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
          style={{
            borderRadius: "30px",
            width: "60px",
            padding: "0px",
            height: "60px",
          }}
        />
      </Button>
      <Button
        id="demo-customized-button" className="textES"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          borderRadius: "30px",
          width: "65px",
          padding: "0px",
          height: "65px",
          backgroundColor: "black",
          position: "fixed",
          bottom: "100px",
          zIndex:400,
          right: "27px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/125px-Bandera_de_Espa%C3%B1a.svg.png"
          style={{
            borderRadius: "30px",
            width: "60px",
            padding: "0px",
            height: "60px",
          }}
        />
      </Button>
      {/* <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          style={{ display: "column" }}
        >
          <div id="red">
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
                borderRadius: "30px",
                width: "65px",
                padding: "0px",
                height: "65px",
                backgroundColor: "black",
                position: "fixed",
                bottom: "85px",
                right: "27px",
                margin: 0,
              }}
            >
              <img
                id="textES"
                className="textES"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/125px-Bandera_de_Espa%C3%B1a.svg.png"
                style={{
                  borderRadius: "30px",
                  width: "60px",
                  padding: "0px",
                  height: "60px",
                }}
              />
            </Button>
          </div>
          <Button className="red"
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            style={{
              borderRadius: "30px",
              width: "65px",
              padding: "0px",
              height: "65px",
              backgroundColor: "black",
              position: "fixed",
              bottom: "160px",
              right: "27px",
              margin: 0,
            }}
          >
            <img
              id="textEN"
              className="red"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
              style={{
                borderRadius: "30px",
                width: "60px",
                padding: "0px",
                height: "60px",
              }}
            />
          </Button>
        </MenuItem> */}
        {/* <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> 
      </StyledMenu>*/}
    </div>
  );
}

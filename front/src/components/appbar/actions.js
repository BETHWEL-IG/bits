import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Actions({ matches }) {
  const navigate=useNavigate()
  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
  const handleClick=()=>{
    navigate('/')
  }

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            {/* <ShoppingCartIcon /> */}
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {/* <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton> */}
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
          onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
              
              
            }}
          >
            {/* way of addig lik to the button */}
            <PersonIcon />
           
          </ListItemIcon>
        
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">bits.co.ke</AppbarHeader>
      <MyList type="row">

        <ListItemText >
          <Link to={'/'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>Home</Typography></Link>
        </ListItemText>
       
        <ListItemText >
          <Link to={'services'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>Services</Typography></Link>
        </ListItemText>
        <ListItemText >
          <Link to={'projects'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>Projects</Typography></Link>
        </ListItemText>
        <ListItemText >
          <Link to={'about'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>About Us</Typography></Link>
        </ListItemText>
        <ListItemText >
          <Link to={'contact'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>Contact Us</Typography></Link>
        </ListItemText>
        <ListItemText >
          <Link to={'blogs'} 
           style={{
            textDecoration:'none', 
            color:'black'
          }}
          ><Typography>Blogs</Typography></Link>
        </ListItemText>
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}

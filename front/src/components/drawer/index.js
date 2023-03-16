import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const handleClose=()=>{
    setDrawerOpen(false)
  }

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.primary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}
        onClose={()=>setDrawerOpen(false)}
      >
        <List>
        <ListItemButton onClick={handleClose}>
            <ListItemText >
              <Link to={'/'}
               style={{
                textDecoration:'none', 
                color:'black'
              }}
               >Home</Link>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
       
          <ListItemButton onClick={handleClose}>
            <ListItemText >
              <Link to={'services'}
               style={{
                textDecoration:'none', 
                color:'black'
              }}
               >Services</Link>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={handleClose}>
            <ListItemText >
              <Link to={'projects'} 
              style={{
                textDecoration:'none', 
                color:'black'
              }}
              ><Typography>Projects</Typography></Link>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={handleClose}>
            <ListItemText >
              <Link to={'about'} 
              style={{
                textDecoration:'none', 
                color:'black'
              }}
              ><Typography>About Us</Typography></Link>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={handleClose}>
          <ListItemText >
            <Link to={'contact'} 
            style={{
              textDecoration:'none', 
              color:'black'
            }}
            ><Typography>Contact Us</Typography></Link>
          </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={handleClose}>
          <ListItemText >
            <Link to={'blogs'} 
            style={{
              textDecoration:'none', 
              color:'black'
            }}
            ><Typography>Blogs</Typography></Link>
        </ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}

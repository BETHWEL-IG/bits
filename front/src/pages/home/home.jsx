import { Container, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"
import Appbar from "../../components/appbar"
import AppDrawer from "../../components/drawer"
import Footer from "../../components/footer"
import Promotions from "../../components/promotions"
import SearchBox from "../../components/search"


export const Home=()=>{
    return(
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Stack>
            <Appbar/>
            <Promotions/>
            {/* outlet components */}
            <Outlet/>
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4"></Typography>
            </Box>
            {/* <Products /> */}
            <Footer />
            <AppDrawer />
  
          </Stack>
        </Container>
    
        
    )
}
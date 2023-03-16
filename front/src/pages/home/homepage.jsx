
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Banner from "../../components/banner"



export const Homepage=()=>{
    return(
        <Box>
             <Banner/>
             <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Projects</Typography>
            </Box>
        </Box>
           
    )
}
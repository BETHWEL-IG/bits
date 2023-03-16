import { Typography,  } from "@mui/material";
//import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import {useNavigate} from 'react-router-dom'



export default function Banner() {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('contact')
  }
 // const theme = useTheme();
 // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
    
      <BannerImage src="/images/banner/banner.jpg"  />
      
      
      <BannerContent>
        <Typography variant="h6">Website Design & Development</Typography>
        <BannerTitle variant="h2">
        Bits 
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Bits is a team of expert developers with a passion for crafting custom,
          responsive websites that connect businesses with their audience. 
          From design to deployment, 
          we work closely with our clients to deliver stunning websites that not only look great but also drive measurable results.
          Our team led by Bethwel Ifedha Gavole combines creativity, technical expertise, and industry insights to create user-friendly websites that stand out from the competition.
          With Bits software solutions, you can expect a seamless, collaborative experience and a website that reflects your brand's unique personality and goals.
        </BannerDescription>

        <BannerShopButton color="primary" 
          onClick={handleClick}
        >Contact Us</BannerShopButton>
      </BannerContent>
    </BannerContainer> 
  );
}

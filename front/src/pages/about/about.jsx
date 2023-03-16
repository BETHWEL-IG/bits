import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const AboutSection = styled('section')({
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: '#F7F7F7',
});

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const ImageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '50px',
});

const Image = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '60%',
  },
}));

export const About = () => {
  return (
    <AboutSection>
      <Title>About Us</Title>
      <Description>
        Bits Web Solutions is a web development company that specializes in providing custom web solutions to businesses of all sizes. Our team of experienced developers and designers work closely with our clients to understand their unique requirements and deliver solutions that exceed their expectations.
      </Description>
      <ImageWrapper>
        <Image src="https://source.unsplash.com/featured/?web" alt="Web development" />
      </ImageWrapper>
    </AboutSection>
  );
};



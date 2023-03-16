import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(6),
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(2),
}));

const StyledDesc = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam et tellus dignissim viverra. Nullam convallis tincidunt urna, non tempor velit eleifend in. Donec efficitur, justo at consectetur ultricies, ante nulla rhoncus leo, sit amet lacinia massa risus in odio.',
  },
  {
    id: 2,
    title: 'Project Title 2',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam et tellus dignissim viverra. Nullam convallis tincidunt urna, non tempor velit eleifend in. Donec efficitur, justo at consectetur ultricies, ante nulla rhoncus leo, sit amet lacinia massa risus in odio.',
  },
  {
    id: 3,
    title: 'Project Title 3',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam et tellus dignissim viverra. Nullam convallis tincidunt urna, non tempor velit eleifend in. Donec efficitur, justo at consectetur ultricies, ante nulla rhoncus leo, sit amet lacinia massa risus in odio.',
  },
];

export const Project = () => {
  return (
    <Box>
      <StyledBox>
        <StyledTitle variant="h3">
          Our Projects
        </StyledTitle>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Box>
                  <StyledImg src={project.image} alt={project.title} />
                  <StyledTitle variant="h5">
                    {project.title}
                  </StyledTitle>
                  <StyledDesc>
                    {project.description}
                  </StyledDesc>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledBox>
    </Box>
  );
};



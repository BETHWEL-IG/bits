import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)({
  backgroundColor: '#f4f4f4',
  padding: '50px',
  margin: '20px',
  borderRadius: '10px',
});

const StyledHeading = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px',
});

const StyledParagraph = styled(Typography)({
  marginBottom: '20px',
});

export const Services = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Web Design</StyledHeading>
          <StyledParagraph variant="body1">
            Our team of experienced web designers can create unique and attractive designs that capture the essence of your brand.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Custom Web Development</StyledHeading>
          <StyledParagraph variant="body1">
            We specialize in building custom web solutions tailored to meet the unique requirements of our clients.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Content Management Systems (CMS)</StyledHeading>
          <StyledParagraph variant="body1">
            We can help you manage your website content more efficiently with easy-to-use content management systems like WordPress, Drupal, and Joomla.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">E-Commerce Development</StyledHeading>
          <StyledParagraph variant="body1">
            We offer custom e-commerce development services to help businesses of all sizes sell their products online.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Mobile App Development</StyledHeading>
          <StyledParagraph variant="body1">
            Our team can help you develop mobile applications for iOS and Android platforms.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Web Maintenance and Support</StyledHeading>
          <StyledParagraph variant="body1">
            We provide ongoing web maintenance and support services to ensure that your website is always up-to-date and secure.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Search Engine Optimization (SEO)</StyledHeading>
          <StyledParagraph variant="body1">
            We can help you improve your website's visibility and ranking on search engines like Google and Bing.
          </StyledParagraph>
        </StyledBox>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>
          <StyledHeading variant="h4">Web Hosting</StyledHeading>
          <StyledParagraph variant="body1">
            We offer reliable web hosting services that provide fast, secure, and scalable infrastructure for your website.
          </StyledParagraph>
        </StyledBox>
      </Grid>
    </Grid>
  );
};



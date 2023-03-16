import { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  background: '#f5f5f5',
  borderRadius: '8px',
});

export const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null,
  });

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('subject', formData.subject);
    formDataObj.append('message', formData.message);
    formDataObj.append('file', formData.file);
    

    try {
      const response = await fetch('https://api.bits.co.ke/contact', {
        method: 'POST',
        body: formDataObj,
      });
      const data = await response.json();
      console.log(data);
      alert('your message has been send successfully!, wait for responsense from bits team');
      //setFormData(formData)
      navigate('/')

    } catch (error) {
      console.error(error);
      navigate('/')
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ContactForm onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
          />
          <TextField
            required
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
          />
          <TextField
            required
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleFormChange}
          />
          <label htmlFor="file">
            <input
              id="file"
              name="file"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <Button
              variant="contained"
              component="span"
              sx={{
                color: 'white',
                bgcolor: '#1976d2',
                alignSelf: 'flex-start',
                mt: 2,
              }}
            >
              {formData.file ? formData.file.name : 'Attach File'}
            </Button>
          </label>
          <Button
            type="submit"
            variant="contained"
            sx={{ color: 'white', bgcolor: '#1976d2', mt: 2 }}
          >
            Submit
          </Button>
        </ContactForm>
      </Grid>
    </Grid>
  );
};



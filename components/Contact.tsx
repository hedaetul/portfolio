import {
    Box,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Contact = () => {
    return (
      <Box component="section" className="max-w-2xl mx-auto p-4">
        <Box component="div" className="mb-4">
          <Typography className="mb-4 text-[18px] font-medium uppercase text-[#55527C]">
            - Let's Connect
          </Typography>
          <Typography className="mb-8 text-[40px] font-extrabold">
            Get in touch
          </Typography>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <FormControl fullWidth margin="normal" className="mb-4">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" aria-describedby="name-helper-text" />
            <FormHelperText id="name-helper-text">
              Enter your full name
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal" className="mb-4">
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" aria-describedby="email-helper-text" />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal" className="mb-4">
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input
              id="message"
              aria-describedby="message-helper-text"
              multiline
              rows={4}
            />
            <FormHelperText id="message-helper-text">
              Enter your message here
            </FormHelperText>
          </FormControl>
          <Box className="mt-4 flex justify-center">
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Contact;
  
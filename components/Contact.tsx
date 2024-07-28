import { Box, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box component="section" className="grid grid-cols-2 gap-9 p-4">
      <Box component="div" className="mb-4">
        <Typography className="mb-4 text-[18px] font-medium uppercase text-[#55527C]">
          - Let`s Connect
        </Typography>
        <Typography className="mb-8 text-[40px] font-extrabold">
          Get in touch
        </Typography>
        <Typography className="mb-8 text-lg font-extralight text-[#55527C]">
          I`m currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want to run past me. You can
          contact anytime at 24/7
        </Typography>
        <Typography className="cursor-pointer text-lg font-bold underline hover:no-underline">
          hedaetul.official@gmail.com
        </Typography>
      </Box>
      <Box component="form" className="grid gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="h-12 w-full rounded-md border border-transparent bg-white p-3 outline-none focus:border-gray-300"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="h-12 w-full rounded-md border border-transparent bg-white p-3 outline-none focus:border-gray-300"
        />
        <textarea
          placeholder="Enter your message"
          className="h-[120px] w-full resize-none rounded-md border border-transparent bg-white p-3 outline-none focus:border-gray-300"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;

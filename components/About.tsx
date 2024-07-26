import { Box, Button, Typography } from "@mui/material";

const About = () => {
  return (
    <Box component="section" className="flex flex-col gap-16">
      <Box component="div" className="grid grid-cols-3 gap-16">
        <Box component="div" className="col-span-1">
          <Typography className="text-[18px] font-medium uppercase text-[#55527C]">
            - Nice to meet you!
          </Typography>
          <Typography className="text-[40px] font-extrabold">
            Hedaetul Islam
          </Typography>
          <Typography className="text-[20px] font-semibold">
            Web Developer
          </Typography>
          <Button
            variant="contained"
            className="mt-9 px-5 py-3 font-semibold text-violet-100 hover:bg-white hover:text-slate-500"
          >
            Got a project?
          </Button>
        </Box>
        <Box component="div" className="col-span-2">
          <Typography className="text-[18px] font-normal text-[#55527C]">
            Hello there! My name is{" "}
            <span className="text-[#ff972d]">Hedaetul Islam</span>. I am a web
            designer & developer, and I'm very passionate and dedicated to my
            work.
          </Typography>
          <Typography className="mt-6 text-[18px] font-normal text-[#55527C]">
            With 20 years experience as a professional a graphic designer, I
            have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every step of the design process, from
            discussion and collaboration.
          </Typography>
        </Box>
      </Box>
      <Box component="div" className="flex items-center justify-between gap-6">
        <Box
          component="div"
          className="h-[211px] w-[383px] rounded-md border-none bg-[#D3F4EC]"
        >
          <Typography className="text-[40px] font-bold">10+</Typography>
        </Box>
        <Box
          component="div"
          className="h-[211px] w-[383px] rounded-md border-none bg-blue-700"
        ></Box>
        <Box
          component="div"
          className="h-[211px] w-[383px] rounded-md border-none bg-blue-700"
        ></Box>
      </Box>
    </Box>
  );
};

export default About;

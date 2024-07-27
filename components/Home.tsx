import Dp from "@/dist/images/pg1.png";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <Box component="section" className="grid grid-cols-2">
      <Box component="div">
        <Typography className="text-[60px] font-[950]">
          Hi, I`m{" "}
          <span className="inline text-[60px] font-[950] text-[#A5A6FF]">
            Hedaetul!
          </span>
          Creative Web Developer in Bangladesh
        </Typography>
        <Typography className="text-[18px] font-extralight">
          I`m a Bangladesh based web developer
        </Typography>
        <Box component="div" className="mt-9 flex gap-4">
          <Button variant="contained">Got a project?</Button>
          <Button variant="outlined">Let`s talk</Button>
        </Box>
      </Box>
      <Box component="div">
        <Image src={Dp} alt="Dp" />
      </Box>
    </Box>
  );
};

export default Home;

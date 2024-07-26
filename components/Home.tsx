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
          <Button
            variant="contained"
            className="px-5 py-3 font-semibold text-violet-100 hover:bg-white hover:text-slate-500"
          >
            Got a project?
          </Button>
          <Button
            variant="outlined"
            className="px-5 py-3 font-semibold text-slate-500 hover:bg-[#130F49] hover:text-violet-100"
          >
            Let`s talk
          </Button>
        </Box>
      </Box>
      <Box component="div">
        <Image src={Dp} alt="Dp" />
      </Box>
    </Box>
  );
};

export default Home;

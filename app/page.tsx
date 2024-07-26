import Home from "@/components/Home";
import SideNav from "@/components/SideNav";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

const Page = () => {
  return (
    <Box className="flex">
      <Box component="section" className="hidden w-[470px] md:block">
        <SideNav />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box component="section" className="w-full bg-[#EFFBF8] px-9 pt-24">
        <Home />
      </Box>
    </Box>
  );
};

export default Page;

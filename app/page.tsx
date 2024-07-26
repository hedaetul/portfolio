import About from "@/components/About";
import Home from "@/components/Home";
import SideNav from "@/components/SideNav";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

const Page = () => {
  return (
    <Box component="section">
      <Box
        component="section"
        className="fixed left-0 top-0 z-50 hidden h-screen w-[370px] md:block"
      >
        <SideNav />
      </Box>
      <Divider
        orientation="vertical"
        className="fixed left-[370px] top-0 h-screen"
      />
      <Box
        component="section"
        className="h-screen flex-grow overflow-y-auto bg-[#EFFBF8] px-9 pt-24 md:ml-[370px]"
      >
        <Home />
      </Box>
      <Box
        component="section"
        className="h-screen flex-grow overflow-y-auto px-9 pt-24 md:ml-[370px]"
      >
        <About />
      </Box>
    </Box>
  );
};

export default Page;

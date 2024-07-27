import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <Box component="section" className="grid grid-cols-3 gap-4 py-8">
      {/* Part 1: My Blog and Get in Touch */}
      <Box component="div" className="col-span-1">
        <Typography className="mb-4 text-[18px] font-medium uppercase text-[#55527C]">
          -Blog
        </Typography>
        <Typography className="mb-8 text-[40px] font-extrabold">
          My Blog
        </Typography>
        <Button variant="contained">Got a project?</Button>
      </Box>
      {/* Part 2: Date and Title */}
      <Box component="div" className="col-span-1">
        <Box className="mb-1 flex items-center">
          <CalendarTodayIcon fontSize="small" className="mr-2" />
          <Typography variant="body2" className="text-lg text-gray-500">
            April 12, 2023
          </Typography>
        </Box>
        <Typography className="mb-2 text-[28px] font-bold">
          <Link
            href="https://hedaetul.hashnode.dev/how-to-fix-the-error-code-not-found-in-vercel"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline transition duration-300"
          >
            How to fix the error "CODE NOT FOUND" in Vercel?
          </Link>
        </Typography>
      </Box>
      {/* Part 3: Learn More Link */}
      <Box component="div" className="col-span-1 flex items-center justify-center">
        <Link
          href="https://hedaetul.hashnode.dev/how-to-fix-the-error-code-not-found-in-vercel"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:underline flex items-center transition duration-300"
        >
          Learn More <FaArrowRight className="ml-2" />
        </Link>
      </Box>
    </Box>
  );
};

export default Blog;

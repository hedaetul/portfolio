import Avatar from "@/dist/images/Avatar.png";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const social = [
  {
    id: "fb",
    icon: FaFacebookF,
    url: "https://www.facebook.com/007.hedaetul",
  },
  {
    id: "twit",
    icon: FaTwitter,
    url: "https://x.com/matt_hedaetul",
  },
  {
    id: "ln",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/007-hedaetul/",
  },
];

const SideNav = () => {
  return (
    <Box
      component="section"
      className="flex-col-center h-screen bg-white pb-8 pt-14 text-center"
    >
      <Box component="div" className="flex-col-center">
        <Box component='div'
          sx={{
            width: "120px",
            height: "120px",
            border: "2px solid #A5A6FF",
            borderRadius: "50%",
            overflow: "hidden",
          }}
          className="w-[120px] h-[120px]"
          
        >
          <Image src={Avatar} alt="Avatar" layout="fit" objectFit="cover" />
        </Box>
        <Typography variant="h4" className="text-[30px] font-[700]">
          Hedaetul Islam
        </Typography>
      </Box>
      <Box component="div" className="flex-col-center gap-4 pt-12">
        <Link underline="none">Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </Box>
      <Box component="div" className="flex h-full flex-col justify-end">
        <Box component="div" className="flex-col-center gap-3 px-8">
          <Box component="div" className="flex-row-center gap-4">
            {social.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-col-center h-11 w-11 rounded-full bg-gray-100 text-[#130F49]"
              >
                <item.icon size={24} />
              </Link>
            ))}
          </Box>
          <Typography className="text-lg font-medium text-gray-500">
            Copyright © 2024 Hedaetul Islam. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;

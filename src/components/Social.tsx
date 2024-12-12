import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaGlobe } from "react-icons/fa";

const isMobile = () => {
  return typeof window !== "undefined" && window.innerWidth < 768;
};

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ondongo",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/gloire-ondongo-811a87245/",
  },

  {
    icon: <FaMailBulk />,
    path: "mailto:gloireondongo1205@gmail.com",
  },

  {
    icon: <FaGlobe />,
    path: isMobile()
      ? "https://ondongo.github.io/GlassMorpism_MonCv"
      : "/old-website",
  },
];
function Social({ containerStyles, iconStyles }: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item: any, index: any) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;

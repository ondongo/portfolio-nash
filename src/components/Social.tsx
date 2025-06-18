import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaGlobe } from "react-icons/fa";

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
    path: "/old-website",
    hideOnMobile: true,
  },
];

function Social({ containerStyles, iconStyles }: any) {
  // Détecter si on est sur mobile (côté client uniquement)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={containerStyles}>
      {socials.map((item: any, index: any) => {
        if (item.hideOnMobile && isMobile) {
          return null;
        }
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

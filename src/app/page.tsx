"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FiDownload } from "react-icons/fi";

/* const cards = [
  {
    id: 1,
    name: "Project A",
    designation: "Full Stack Development",
    content: (
      <p>
        A complete web application built with Next.js and Firebase, featuring
        real-time updates and authentication.
      </p>
    ),
  },
  {
    id: 2,
    name: "Project B",
    designation: "Mobile Development",
    content: (
      <p>
        A cross-platform mobile app using Flutter, integrated with APIs for
        seamless user experience.
      </p>
    ),
  },
  {
    id: 3,
    name: "Project C",
    designation: "UI/UX Design",
    content: (
      <p>
        Created an intuitive and responsive design for an e-commerce
        platform, focused on user engagement and easy navigation.
      </p>
    ),
  },
];

 */

export default function Home() {
  const router = useRouter();
  const handleDownload = () => {
    /*  const link = document.createElement("a");
    link.href = "/CvGloireAlternantProfil.pdf";
    link.download = "CvGloireAlternantProfil.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); */
    router.push("/CV New Year 2025-2026.pdf");
    /*   window.open('/CvGloireAlternantProfil.pdf', '_blank'); */
  };

  return (
    <section className="h'full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1">
              Hi 👋 je suis <br />{" "}
              <span className="text-green-300">Prince de Gloire</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              Curieux et exigeant, je conçois des applications performantes et
              bien pensées. J’aime transformer les idées en expériences
              digitales utiles et élégantes. Prêt à relever vos défis en
              alternance — recrutez-moi.
            </p>

            {/* Links */}

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={handleDownload}
                className="uppercase flex items-center gap-2 remplissage"
              >
                <span> Mon Cv </span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-300 rounded-full flex justify-center items-center text-green-300 
                  text-base hover:bg-green-300 hover:text-[#020617] hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {/*  <CardStack items={cards} offset={20} scaleFactor={0.08} /> */}
    </section>
  );
}

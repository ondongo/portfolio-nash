"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaVoicemail,
} from "react-icons/fa";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+33) 7 51 13 31 44 ",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone 2",
    description: "(+33) 7 44 84 40 63 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gloireondongo1205@gmail.com",
  },

  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "28 rue de lorraine , Rennes 35000",
  },
];
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Validation des champs requis
    if (!name || !email || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      setLoading(false);
      return;
    }

    const formData = {
      service_id: "service_xjo1mec",
      template_id: "template_i0gatxp",
      user_id: "dkP0SZLNwa_dtQqFH",
      template_params: {
        name,
        email,
        phone,
        message,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Échec de l'envoi de l'email");
      }

      alert("Votre email a été envoyé merci!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setError("Oops... une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-slate-900 rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-3xl text-green-300">
                Travaillons ensemble <span className="text-4xl">🤝</span>
              </h3>
              <p className="text-white/60 xl:max-w-[60%]">
                Intéressé par mon profil ou souhaitez en savoir plus sur mon
                parcours ? N&apos;hésitez pas à me contacter, je serais ravi
                d&apos;échanger avec vous.
              </p>
              <Input
                type="text"
                placeholder="Comment vous appelez-vous ?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required // Rendre ce champ obligatoire
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="email"
                  placeholder="Un email pour vous écrire 📧 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // Rendre ce champ obligatoire
                />
                <Input
                  type="tel"
                  placeholder="Un numéro pour papoter 📞" // Ce champ est optionnel
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Partagez vos idées avec moi ✨"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required // Rendre ce champ obligatoire
              />
              <Button
                type="submit"
                disabled={loading}
                className={` max-w-60 ml-auto ${
                  loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {loading ? "Envoi en cours..." : "Faites le premier pas !"}
              </Button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] bg-slate-900 text-green-300 rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

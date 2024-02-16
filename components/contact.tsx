"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-white/80 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:se.vuductrung.work@gmail.com" className="underline">
        se.vuductrung.work@gmail.com or (+84) 931 646 220 (Phone/Zalo/WhatsApp)
        </a>{" "}
      </p>
      
    </motion.section>
  );
};
export default Contact;

import React from "react";
import headshot2 from "../assets/images/headshot2.jpg";
import roundedimg from "../assets/images/roundedimg.png";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

const Hero = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return (
    <section className="flex-col md:flex-row flex w-full bg-[#E5E1DA] dark:dark dark:bg-inherit">
      <div className="w-full md:w-1/2 ">
        <div className="md:py-[40%] text-center md:text-left px-6">
          <h2 className="md:text-4xl font-semibold secondary text-xl">
            Good {timeOfDay}!
          </h2>
          <p className="mt-2 text-base md:text-lg px-5 md:px-0">
            I'm <span className="text-[#89A8B2] font-semibold">Favour</span>, a
            highly skilled Data Analyst with years of experience in the Tech
            industry.
          </p>
          <div className=" items-center md:flex block gap-x-4">
            <button className="btn mt-2">Get in Touch</button>
            <div className="flex gap-2 text-center mt-3 pb-4 md:pb-0 justify-center md:justify-normal">
              <span>
                <a href="#" target="_blank">
                  <FaXTwitter />
                </a>
              </span>
              <span>
                <a href="#" target="_blank">
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href="#" target="_blank">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="#" target="_blank">
                  <FaMedium />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center pt-6 md:pt-0 md:w-1/2 md:h-full order-first md:order-last">
        <img
          src={headshot2}
          className="hidden md:block md:w-full md:h-full object-fill"
          alt="Fave"
        />
        <img src={roundedimg} className="md:hidden h-40" alt="Fave"/>
      </div>
    </section>
  );
};

export default Hero;

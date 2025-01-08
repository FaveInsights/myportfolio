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
    <section className="h-[70vh] md:h-full flex-col items-center md:flex-row flex w-full bgg-[#E5E1DA] bg-[#B3C8CF] bg-opacity-40 dark:dark dark:bg-inherit mt-8">
      <div className="w-full md:w-1/2 mt-8">
        <div className="md:py-[40%] text-center md:text-left px-6">
          <h2 className="md:text-4xl mt-2 font-semibold secondary text-2xl">
            Good {timeOfDay}!
          </h2>
          <p className="mt-4 text-xl md:text-lg px-5 leading-relaxed md:px-0">
            I'm{" "}
            <span className="text-[#2e4053] dark:text-[#89A8B2] font-semibold">
              Favour
            </span>
            , a highly skilled Data Analyst with years of experience in the Tech
            industry.
          </p>
          <div className=" md:items-center md:flex block gap-x-4">
            <button className="btn my-2 text-xl">Get in Touch</button>
            <div className="flex gap-4 text-center mt-6 pb-8 md:pb-0 justify-center md:justify-normal">
              <span>
                <a href="https://www.x.com/fav_bdk" target="_blank">
                  <FaXTwitter size={24} />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/favour-badakin-9682b319b?"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </span>
              <span>
                <a href="https://www.github.com/faveinsights" target="_blank">
                  <FaGithub size={24} />
                </a>
              </span>
              <span>
                <a href="https://www.medium.com/@favourbadakin" target="_blank">
                  <FaMedium size={24} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center pt-10 md:pt-0 md:w-1/2 md:h-full order-first md:order-last">
        <img
          src={headshot2}
          className="hidden md:block md:w-full md:h-full object-fill"
          alt="Fave"
        />
        <img src={roundedimg} className="md:hidden h-40" alt="Fave" />
      </div>
    </section>
  );
};

export default Hero;

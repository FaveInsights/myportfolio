import React from "react";
import headshot2 from "../assets/images/headshot2.jpg";
import roundedimg from "../assets/images/roundedimg.png";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

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
    <section className="h-[75vh] sm:h-full rounded-b-3xl lg:rounded-none flex-col items-center lg:flex-row flex w-full bgg-[#E5E1DA] bg-[#B3C8CF] bg-opacity-40 dark:dark dark:bg-inherit mt-4 pt-4 pb-6 lg:py-0">
      <div className="w-full md:w-1/2">
        <div className="lg:mt-[-15rem] text-center lg:text-left px-6">
          <h6 className="lg:text-2xl mt-2 font-semibold secondary text-xl">
            Hello! I'm{" "}
            <span className="text-[#2e4053] dark:text-[#89A8B2] font-semibold">
              {" "}
              Favour
            </span>
          </h6>
          <p className="my-4 w-full text-3xl font-bold lg:font-extrabold md:text-4xl px-5 leading-relaxed lg:px-0 lg:w-10/12">
            <TypeAnimation
              sequence={[
                "Experienced Data Analyst: Transforming Data into Action.",
                1000,
                "Helping Businesses to Transform Data into Actionable Strategies.",
                1000,
                "Your Partner in Data-Driven Decision Making.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </p>
          <div className="lg:inline-flex align-middle gap-x-4">
            <button
              className="btn my-2 text-lg"
              onClick={() =>
                (window.location.href = `mailto:${`favourbadakin@gmail.com`}`)
              }
            >
              Get in Touch
            </button>
            <a
              href="https://docs.google.com/document/d/1C2toW6wrKykxkWL_QgYo9dTMFCeUJdrPY4rJT-Q-Z14/edit?usp=sharing"
              className="btn2 my-2 text-lg ml-2"
            >
              View CV
            </a>
            <div className="flex items-center gap-4 mt-6 pb-8 md:pb-0">
              
              <div className="bg-black text-[#F1F0E8] rounded-full p-2">
                <a href="https://www.x.com/fav_bdk" target="_blank">
                  <FaXTwitter size={18} />
                </a>
              </div>
              <div className="bg-black text-[#F1F0E8] rounded-full p-2">
                <a
                  href="https://www.linkedin.com/in/favour-badakin-9682b319b?"
                  target="_blank"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
              <div className="bg-black text-[#F1F0E8] rounded-full p-2">
                <a href="https://www.github.com/faveinsights" target="_blank">
                  <FaGithub size={18} />
                </a>
              </div>
              <div className="bg-black text-[#F1F0E8] rounded-full p-2">
                <a href="https://www.medium.com/@favourbadakin" target="_blank">
                  <FaMedium size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center pt-10 md:pt-0 lg:w-1/2 lg:h-full order-first lg:order-last">
        <img
          src={headshot2}
          className="hidden lg:block lg:w-full lg:h-full object-fill"
          alt="Fave"
        />
        <img src={roundedimg} className="lg:hidden h-40" alt="Fave" />
      </div>
    </section>
  );
};

export default Hero;

import migration from '../../assets/images/migration.jpg';
import telecom from "../../assets/images/telecom.jpg";
import club from "../../assets/images/club.jpg";
import call1 from "../../assets/images/call1.jpg";
import call2 from "../../assets/images/call2.jpg";

export default [
  {
    
    id: 1,
    title: "EDNA Call Center Analysis",
    desc: "Comprehensive report that provides valuable insights, recommends productivity enhancements, and revenue-boosting strategies for the company's growth.",
    image: call2,
    tool: "PowerBI, Excel",
    medium: "https://medium.com/favourbadakin",
  },
  {
    id: 2,
    title: "Telecom Company Churn Analysis",
    desc: "Analyzing customer data to identify churn drivers and inform targeted retention strategies for improved customer satisfaction.",
    image: telecom,
    tool: "PowerBI, Excel",
  },
  {
    id: 3,
    title: "Call Center Analysis",
    desc: "Uncovering hidden insights from a raw data to aid in making strategic decisions that promote efficiency and drive growth.",
    image: call1,
    tool: "PowerBI",
  },
  {
    id: 4,
    title: "Skilled Migration Analysis",
    desc: "Extraction of different categories of data from a large database and performing analysis on them.",
    image: migration,
    github: "",
    tool: "SQL",
  },
  {
    id: 5,
    title: "Club Members Data Cleaning",
    desc: "Cleaning a dirty and messy dataset of certain club members and preparing it to ensure an accurate and reliable analysis.",
    image: club,
    tool: "SQL",
  },
];
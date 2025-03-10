import migration from '../../assets/images/migration.jpg';
import telecom from "../../assets/images/telecom.jpg";
import club from "../../assets/images/club.jpg";
import call1 from "../../assets/images/call1.jpg";
import call2 from "../../assets/images/call2.jpg";
import social from "../../assets/images/socialmedia.jpg"

export default [
  {
    id: 1,
    title: "EDNA Call Center Analysis",
    desc: "Comprehensive report that provides valuable insights, recommends productivity enhancements, and revenue-boosting strategies for the company's growth.",
    image: call2,
    tool: "Power BI, Excel",
    medium:
      "https://medium.com/@favourbadakin/call-center-performance-analysis-identifying-opportunities-for-improvement-5536756772b3",
    github: "https://www.github.com/FaveInsights/EDNA-Call-Center-Analysis",
  },
  {id:2,
    title:"Social Media Analysis",
    desc:"Designed an interactive Power BI dashboard analyzing user behavior, digital habits and well-being, delivering actionable insights through dynamic visualizations and DAX measures.",
    tool:"Power BI",
    github:"",
    image: social
  },
  {
    id: 3,
    title: "Telecom Company Churn Analysis",
    desc: "Analyzing customer data to identify churn drivers and inform targeted retention strategies for improved customer satisfaction.",
    image: telecom,
    tool: "Power BI, Excel",
    github:
      "https://www.github.com/FaveInsights/Telecommunications-Company-Churn-Analysis",
  },
  {
    id: 4,
    title: "Call Center Analysis",
    desc: "Uncovering hidden insights from a raw data to aid in making strategic decisions that promote efficiency, productivity, and drive sustainable business growth.",
    image: call1,
    tool: "Power BI",
    github: "https://www.github.com/FaveInsights/Call-Center-Analysis",
  },
  {
    id: 5,
    title: "Skilled Migration Analysis",
    desc: "Extraction of different categories of data from a large database and performing in-depth statistical analysis on them.",
    image: migration,
    github: "https://www.github.com/FaveInsights/Skilled-Migration-Analysis",
    tool: "SQL",
  },
  {
    id: 6,
    title: "Club Members Data Cleaning",
    desc: "Cleaning a dirty and messy dataset of certain club members and preparing it to ensure an accurate and reliable analysis.",
    image: club,
    tool: "SQL",
    github:'https://www.github.com/FaveInsights/Club-Member-SQL-Data-Cleaning'
  }, 
  
];
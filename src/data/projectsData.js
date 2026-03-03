import devtinder from "../assets/svg/projects/devtinder.png";
import chatApp from "../assets/svg/projects/chatapp.png";
import movix from "../assets/svg/projects/movix.png";
import redux from "../assets/svg/skills/redux.svg";
import react from "../assets/svg/skills/react.svg";
import express from "../assets/svg/skills/express.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import nodeJs from "../assets/svg/skills/nodeJs.svg";
import javascript from "../assets/svg/skills/javascript.svg";

export const projectsData = [
  {
  id: 1,
  projectName: "DevTinder – Dating & Matchmaking App",
  startYear: "Oct 2025",
  endYear: "Jan 2026",
  projectDesc:
    "A full-stack dating and matchmaking application built using the MERN stack with TypeScript, featuring real-time chat and secure authentication.",
  projectResp: "Key Responsibilities",
  responsibility: [
    "Built secure RESTful APIs with Node.js and Express.js and implemented JWT-based authentication",
    "Integrated real-time chat functionality using Socket.io and optimized MongoDB queries for performance"
  ],
  tags: [react, redux, nodeJs, express, javascript, vitejs],
  code: "https://github.com/gauravtomar15/devTinder-Web",
  demo: "https://gauravdevsocial.site/login",
  image: devtinder,

}
,
  {
  id: 2,
  projectName: "Real-Time Chat Application",
  startYear: "Jul 2025",
  endYear: "Sep 2025",
  projectDesc:
    "A real-time chat application built using the MERN stack with Socket.io, enabling instant messaging and secure user authentication.",
  projectResp: "Key Responsibilities",
  responsibility: [
    "Developed real-time messaging functionality using Socket.io for seamless user communication",
    "Built RESTful APIs with Node.js and Express.js for efficient client-server data exchange",
    "Implemented JWT-based authentication and optimized MongoDB queries for secure and scalable performance"
  ],
  tags: [react, redux, nodeJs, express, javascript, vitejs],
  code: "https://github.com/gauravtomar15/Chat-app",
  demo: "https://github.com/gauravtomar15/Chat-app",
  image: chatApp,
  },
  {
    id: 3,
    projectName: "Movix App",
    projectDesc:
      "A dynamic movie streaming app providing access to the latest, best-reviewed, and most-watched movies.",
    projectResp: "Areas Of Responsibilities",
    responsibility: [
      "Developed a movie web app using React and TMDB API",
      "Implemented a dynamic movie genre filter for enhanced user navigation",
      "Integrated Redux Toolkit for state management",
      "Enhanced UI with Sass and responsive design",
    ],
    tags: [react, redux, bootstrap, vitejs, nodeJs, javascript],
     // No demo link provided in the CV
    image: movix,
  },
];

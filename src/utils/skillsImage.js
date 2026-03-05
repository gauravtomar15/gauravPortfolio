import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import redux from "../assets/svg/skills/redux.svg";

import nodeJS from "../assets/svg/skills/nodeJs.svg";
import express from "../assets/svg/skills/express.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import firebase from "../assets/svg/skills/firebase.svg";

import cplusplus from "../assets/svg/skills/cplusplus.svg";
import dataStructures from "../assets/svg/skills/dataStructures.png";

import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import figma from "../assets/svg/skills/figma.svg";


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    // Frontend
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "javascript":
      return javascript;
    case "html":
      return html;
    case "css":
      return css;
    case "tailwind":
      return tailwind;
    case "materialui":
      return materialui;
    case "redux":
      return redux;
    case "ngrx":
      return redux; // reuse redux icon (common practice)
    case "zustand":
      return redux; // fallback icon

    // Backend
    case "node js":
      return nodeJS;
    case "express":
      return express;
    case "mongodb":
      return mongoDB;
    case "postgresql":
      return postgresql;
    case "sql":
      return mysql; // generic SQL icon
    case "firebase":
      return firebase;

    // Data / State
    case "tanstack query":
      return react; // commonly reused
    case "rxjs":
      return redux;

    // Programming
    case "c++":
      return cplusplus;
    case "data structures":
      return dataStructures;

    // Tools
    case "git":
      return git;
    case "github":
      return git;
    case "postman":
      return graphql; // closest available icon
    case "figma":
      return figma;

    default:
      return null;
  }
};

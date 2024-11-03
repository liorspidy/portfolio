import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import classes from "./Skills.module.scss";
import react from "../../assets/logos/react-logo.svg";
import angular from "../../assets/logos/angular-logo.svg";
import css from "../../assets/logos/css-logo.svg";
import html from "../../assets/logos/html-logo.svg";
import js from "../../assets/logos/js-logo.svg";
import ts from "../../assets/logos/ts-logo.svg";
import mysql from "../../assets/logos/mysql-logo.svg";
import node from "../../assets/logos/node-logo.svg";
import postgresql from "../../assets/logos/postgresql-logo.svg";
import vue from "../../assets/logos/vue-logo.svg";
import mongo from "../../assets/logos/mongo-logo.svg";
import scss from "../../assets/logos/scss-logo.svg";
import jquery from "../../assets/logos/jquery-logo.svg";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const skillsRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(skillsRef);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef) observer.observe(skillsRef);

    return () => {
      if (skillsRef) {
        observer.unobserve(skillsRef);
      }
    };
  }, []);

  const logos = [
    { id: 1, name: "react", link: react },
    { id: 2, name: "angular", link: angular },
    { id: 3, name: "vue", link: vue },
    { id: 4, name: "css", link: css },
    { id: 5, name: "scss", link: scss },
    { id: 6, name: "html", link: html },
    { id: 7, name: "js", link: js },
    { id: 8, name: "ts", link: ts },
    { id: 9, name: "mysql", link: mysql },
    { id: 10, name: "postgresql", link: postgresql },
    { id: 11, name: "mongo", link: mongo },
    { id: 12, name: "jquery", link: jquery },
    { id: 13, name: "node", link: node },
  ];

  const logosList = logos.map((logo) => (
    <motion.li
      initial={{ y: 50, opacity: 0 }}
      whileHover={{ scale: 1.2 }}
      animate={
        isVisible
          ? {
              y: 0,
              opacity: 1,
              scale: hoveredId && hoveredId !== logo.id ? 0.9 : 1,
            }
          : {}
      }
      transition={{
        y: {
          type: "spring",
          stiffness: 100,
          damping: 7,
          duration: 0.5,
          delay: logo.id * 0.1,
        },
        opacity: { duration: 0.5, delay: logo.id * 0.1 },
      }}
      className={classes.listItem}
      key={logo.id}
      onMouseEnter={() => setHoveredId(logo.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <img
        title={logo.name}
        className={classes.img}
        src={logo.link}
        alt={logo.name}
        loading="lazy"
      />
    </motion.li>
  ));


  return (
    <section className={classes.skills} ref={ref} id="skills">
        <div className={classes.logos}>
          <h2 className={classes.title}>Skills & Technologies</h2>
          <p className={classes.par}>
          I use a versatile set of Skills in production to create high-performance, scalable applications across both front-end and back-end environments.
          </p>
          <ul className={classes.list}>{logosList}</ul>
        </div>
    </section>
  );
};

export default Skills;

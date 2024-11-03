/* eslint-disable react/prop-types */
import classes from "./Header.module.scss";
import logo from "../../assets/images/logo.gif";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";

const Header = ({mainRef}) => {
  const [scrolled , setScrolled] = useState(false);
  const navMap = [
    { name: "home", link: "#home" },
    { name: "about", link: "#about" },
    { name: "skills", link: "#skills" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainRef]);

  const linkHandler = (event, link) => {
    event.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    }}
    >
      <motion.a
        href="/"
        className={classes.logoWrapper}
        whileHover={{ scale: 1.1 }}
      >
        <img className={classes.logoIcon} src={logo} alt="logo" loading="lazy"/>
      </motion.a>

      <div className={classes.rightSide}>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            {navMap.map((item) => (
              <motion.li
                key={item.name}
                className={classes.item}
                whileHover={{ scale: 1.1 }}
              >
                <a className={classes.link} href={`${item.link}`}                   
                onClick={(event) => linkHandler(event, item.link)}
                >
                  {item.name.toUpperCase()}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className={classes.social}>
          <motion.a
            className={classes.link}
            href="https://www.linkedin.com/in/lior-fridman-603b22214/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <LinkedInIcon
              sx={{
                scale: 1.5,
                color: "white",
                transition: "color 0.3s ease",
                "&:hover": { color: "#292929", transition: "color 0.3s ease" },
              }}
            />
          </motion.a>
          <motion.a
            className={classes.link}
            href="https://github.com/liorspidy?tab=repositories"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <GitHubIcon
              sx={{
                scale: 1.5,
                color: "white",
                transition: "color 0.3s ease",
                "&:hover": { color: "#292929", transition: "color 0.3s ease" },
              }}
            />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

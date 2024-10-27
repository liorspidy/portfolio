import classes from "./Header.module.scss";
import logo from "../../assets/images/logo.gif";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <header className={classes.header}>
      <motion.a
        href="/"
        className={classes.logoWrapper}
        whileHover={{ scale: 1.1 }}
      >
        <img className={classes.logoIcon} src={logo} alt="logo" />
      </motion.a>
      <div className={classes.rightSide}>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            {["home", "about", "projects", "contact"].map((item) => (
              <motion.li
                key={item}
                className={classes.item}
                whileHover={{ scale: 1.1 }}
              >
                <a className={classes.link} href={`/${item}`}>
                  {item.toUpperCase()}
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
    </header>
  );
};

export default Header;

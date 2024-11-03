import classes from "./Hero.module.scss";
import me from "../../assets/images/me.jpeg";
import dots1 from "../../assets/images/dots1.svg";
import dots2 from "../../assets/images/dots2.svg";
import coin from "../../assets/images/coin.gif";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  const titleRef = useRef(null);
  const timeoutRefs = useRef([]);

  const showCoin = () => {
    const coinImgElement = document.createElement("img");
    coinImgElement.src = coin;
    coinImgElement.alt = "coin";
    coinImgElement.className = classes.coin;

    coinImgElement.style.left = `${Math.random() * 80}%`;
    titleRef.current.appendChild(coinImgElement);

    const timeoutId = setTimeout(() => {
      titleRef.current.removeChild(coinImgElement);
    }, 800);

    timeoutRefs.current.push(timeoutId);
  };

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section className={classes.hero} id="home">
      <motion.div
        className={classes.content}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 7,
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <span className={classes.name}>LIOR FRIDMAN</span>

        <motion.h1
          whileTap={{ scale: 1.05 }}
          onTap={showCoin}
          className={classes.title}
          ref={titleRef}
        >
          Full Stack <br />
          Developer
        </motion.h1>

        <p className={classes.par}>
          A <span className={classes.strong}>front-end developer </span>
          crafting
          <span className={classes.strong}> amazing experiences</span> with
          <span className={`${classes.strong} ${classes.angular}`}>
            &nbsp;Angular
          </span>
          &nbsp;and
          <span className={`${classes.strong} ${classes.react}`}>
            &nbsp;React
          </span>
          !
        </p>

        <div className={classes.resumeWrapper}>
          <a
            role="button"
            href={resume}
            download="Lior Fridman CV.pdf"
            className={`${classes.resume}`}
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        className={classes.imgWrapper}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 7,
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <img className={classes.img} src={me} alt="an image of me" loading="lazy"/>
        <img className={classes.dots1} src={dots1} alt="dots1" loading="lazy"/>
        <img className={classes.dots2} src={dots2} alt="dots2" loading="lazy"/>
      </motion.div>
    </section>
  );
};

export default Hero;

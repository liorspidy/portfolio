import classes from "./Hero.module.scss";
import me from "../../assets/images/me.jpeg";
import coin from "../../assets/images/coin.gif";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);

  const showCoin = () => {
    // Create a coin image element
    const coinImg = document.createElement("img");
    coinImg.src = coin;
    coinImg.alt = "coin";
    coinImg.className = classes.coin;

    // Generate a random left position within the title width
    const randomLeft = Math.random() * 80;
    coinImg.style.left = `${randomLeft}%`;

    // Append the coin image to the title element
    titleRef.current.appendChild(coinImg);

    // Remove the coin from the DOM after 0.8 seconds
    setTimeout(() => {
      titleRef.current.removeChild(coinImg);
    }, 800);
  };

  return (
    <section className={classes.hero}>
      <motion.div
        className={classes.content}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 7,
          duration: 0.5,
        }}
      >
        <motion.h1
          whileTap={{ scale: 1.05 }}
          onTap={showCoin}
          className={classes.title}
          ref={titleRef}
        >
          Frontend <br />
          Developer
        </motion.h1>

        <p className={classes.par}>
          I'm a<span className={classes.strong}> Fullstack developer </span>
          specialized in
          <span className={classes.strong}> Frontend development</span>.
        </p>
      </motion.div>

      <motion.div
        className={classes.imgWrapper}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 7,
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <img className={classes.img} src={me} alt="an image of me" />
      </motion.div>
    </section>
  );
};

export default Hero;

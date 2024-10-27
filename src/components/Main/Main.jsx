import Background from "../Background/Background";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import classes from './Main.module.scss';

const Main = () => {
  return (
    <main className={classes.main}>
      <Header />
      <Hero />
      <Background />
    </main>
  );
};

export default Main;

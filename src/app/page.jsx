import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thougs Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente, fugiat maiores molestias laudantium fugit suscipit velit nam obcaecati ex culpa mollitia. Optio, corporis. Deserunt, vitae illum! Doloribus, libero omnis.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='Marcas' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/hero.gif' alt='Image' fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
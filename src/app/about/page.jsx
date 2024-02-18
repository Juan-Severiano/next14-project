import Image from "next/image"
import styles from './about.module.css'

const Page = () => {
  return (
    <div className={styles.imageContainer}>
      <Image src='/about.png' alt="about image" fill />
    </div>
  )
}

export default Page
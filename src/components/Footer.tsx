import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from '../styles/pages/Home.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
          <div className={styles.footer_first}>
            <Image id="imageLogo.jpg" src="/assets/logo.jpg" width={80} height={80} quality={100} className={styles.imageLogo} />
          </div>
          <div className={styles.footer_sec}>
            <p>SOCIAL</p>
            <a href="https://www.instagram.com/vrgo.rvirtual/" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} className={styles.icons} />
            </a>
          </div>
          <div className={styles.footer_thirdy}>
            <p>CONTATO</p>
            <div>
              <div className={styles.div_contato_icon}>
                <FontAwesomeIcon icon={["fab", "whatsapp"]} className={styles.icons} />
                +5565999208836
              </div>
              <div className={styles.div_contato_icon}>
                <FontAwesomeIcon icon={["far", "envelope"]} className={styles.icons} />
                vrgo@gmail.com
              </div>

            </div>
          </div>

        </div>
    )
}
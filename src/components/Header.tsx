import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from '../styles/pages/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'

export default function Header() {
    return(
    <header className={styles.header}>
        <div className={styles.header_nav_first}>
          <a href="#">
            <Image id="imageLogo.jpg" src="/assets/logo.jpg" width={40} height={40} quality={100} className={styles.imageLogo} />
          </a>
        </div>
        <div className={styles.header_nav_second}>
          <a href="#produto" className={tooltip.tooltip}>
            <h4>Produto</h4>
            <span className={tooltip.tooltiptext}>O que vendemos, tudo sobre nosso produto.</span>
          </a>
          <h4>|</h4>
          <a href="#vrgo" className={tooltip.tooltip}>
            <h4>VRGO</h4>
            <span className={tooltip.tooltiptext}>Tudo sobre a nossa empresa.</span>
          </a>
          <h4>|</h4>
          <a href="#contato" className={tooltip.tooltip}>
            <h4>Contato</h4>
            <span className={tooltip.tooltiptext}>Onde nos encontrar.</span>
          </a>
        </div>
        <div className={styles.header_nav_third}>
          <a href="#contato" className={tooltip.tooltip}>
            <FontAwesomeIcon icon={["far", "question-circle"]} className={styles.icons} />
            <span className={tooltip.tooltiptext}>Tem alguma dúvida?</span>
          </a>
        </div>
      </header>
      );
}
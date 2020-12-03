import Head from 'next/head'
import styles from '../styles/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/6c15b25352.js"></script>
        <title>VRGO - Realidade Virtual</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header_nav_first}>
          <a href="#">
            <h4>LOGO</h4>
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
      <main className={styles.main}>

        <h1 className={styles.title}>VRGO</h1>
        <h1 className={styles.description}>Realidade Virtual</h1>

        <div className={styles.div_divisor} >
          <div className={styles.divisor_line} />
          <div className={styles.divisor_dot} />
          <div className={styles.divisor_line} />
        </div>
        <iframe className={styles.video_div} src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        <div className={styles.div_divs_infos}>
          <div className={styles.div_produto} id="produto">
            <h1>PRODUTO</h1>
            <p>Tudo sobre o que fazemos</p>
          </div>
          <div className={styles.div_vrgo} id="vrgo">
            <h1>VRGO</h1>
            <p>Tudo sobre nossa empresa</p>
          </div>
          <div className={styles.div_contato} id="contato">
            <h1>CONTATO</h1>
            <p>Como nos contatar</p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footer_first}>
            <a href="#">LOGO</a>
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

        <div className={styles.footer_footer}>
          <p>VRGO Realidade Virtual 2020 ©</p>
          <p>Cuiabá - Mato Grosso</p>
        </div>
      </main>
    </div>
  )
}

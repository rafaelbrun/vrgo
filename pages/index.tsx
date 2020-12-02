import Head from 'next/head'
import styles from '../styles/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
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
          <a href="#">
            <h4>SOCIAL?</h4>
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
        <div className={styles.div_produto} id="produto">
          <h1>Produto</h1>
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
      </main>
    </div>
  )
}

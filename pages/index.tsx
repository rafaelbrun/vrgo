import Head from 'next/head'
import styles from '../styles/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"/>
        <title>VRGO - Realidade Virtual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <a href="#" className={tooltip.tooltip}>
            <h4>Produto</h4>
            <span className={tooltip.tooltiptext}>O que vendemos, tudo sobre nosso produto.</span>
          </a>
          <h4>|</h4>
          <a href="#" className={tooltip.tooltip}>
            <h4>VRGO</h4>
            <span className={tooltip.tooltiptext}>Tudo sobre a nossa empresa.</span>
          </a>
          <h4>|</h4>
          <a href="#" className={tooltip.tooltip}>
            <h4>Contato</h4>
            <span className={tooltip.tooltiptext}>Onde nos encontrar.</span>
          </a>
          
        </header>
        <h1 className={styles.title}>VRGO</h1>
        <h1 className={styles.description}>Realidade Virtual</h1>

        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

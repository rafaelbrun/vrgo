import React from 'react';
import styles from '../styles/pages/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { text } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';

export default function Home() {
  React.useEffect(() => {
    var scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };

    function loop() {
      var imageProduto = document.getElementById("imageProduto");
      var textProduto = document.getElementById("textProduto");
      var imageVRGO = document.getElementById("imageVRGO");
      var textVRGO = document.getElementById("textVRGO");
      var imageContato = document.getElementById("imageContato");
      var textContato = document.getElementById("textContato");

      if (isElementInView(imageProduto)) {
        imageProduto.classList.add(styles.is_visible);
        textProduto.classList.add(styles.is_visibleOposto);
      }

      if (isElementInView(imageVRGO)) {
        imageVRGO.classList.add(styles.is_visibleOposto);
        textVRGO.classList.add(styles.is_visible);
      }

      if (isElementInView(imageContato)) {
        imageContato.classList.add(styles.is_visible);
        textContato.classList.add(styles.is_visibleOposto);
      }

      scroll(loop);
    }
    loop();
  });

  function isElementInView(element: HTMLElement) {
    var rect = element.getBoundingClientRect();

    return ((rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>VRGO - Realidade Virtual</title>
      </Head>
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
      <main className={styles.main} id="main">

        <h1 className={styles.title}>VRGO</h1>
        <h1 className={styles.description}>Realidade Virtual</h1>


        <div className={styles.div_divs_infos} >
          <iframe className={styles.video_div} src="https://www.youtube.com/embed/tgbNymZ7vqY" />
          <div className={styles.div_produto} id="produto">

            <h1 >PRODUTO</h1>
            <div className={styles.div_infos_image}>
              <Image id="imageProduto" src="/assets/vrgo1.jpg" width={768} height={1024} quality={100} className={styles.div_contato_imagem + " " + styles.show_on_scroll} />
              <p id="textProduto" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className={styles.div_vrgo} id="vrgo">
            <h1>VRGO</h1>
            <div className={styles.div_infos_image}>
              <p id="textVRGO" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <Image id="imageVRGO" src="/image1.png" width={1000} height={666} quality={100} className={styles.div_contato_imagem + " " + styles.show_on_scroll} />
            </div>
          </div>
          <div className={styles.div_contato} id="contato">
            <h1>CONTATO</h1>
            <div className={styles.div_infos_image}>
              <Image id="imageContato" src="/assets/image2.png" width={1000} height={666} quality={100} className={styles.div_contato_imagem + " " + styles.show_on_scroll} />
              <p id="textContato" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </div>

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

        <div className={styles.footer_footer}>
          <p>VRGO Realidade Virtual 2020 ©</p>
          <p>Cuiabá - Mato Grosso</p>
        </div>
      </main>
    </div>
  )
}

import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import tooltip from '../styles/Tooltip.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { text } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  React.useEffect(() => {
    var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback,1000/60)};

    function loop(){
      var imageProduto = document.getElementById("imageProduto");
      var textProduto = document.getElementById("textProduto");
      var imageVRGO = document.getElementById("imageVRGO");
      var textVRGO = document.getElementById("textVRGO");
      var imageContato = document.getElementById("imageContato");
      var textContato = document.getElementById("textContato");

      if(window.pageYOffset > 620){
       imageProduto.classList.add(styles.is_visible); 
       textProduto.classList.add(styles.is_visibleOposto);
      }
      else if(window.pageYOffset < 620){
        imageProduto.classList.remove(styles.is_visible); 
        textProduto.classList.remove(styles.is_visibleOposto);
      }

      if(window.pageYOffset > 1300){
        imageVRGO.classList.add(styles.is_visibleOposto); 
        textVRGO.classList.add(styles.is_visible);
      }
      else if(window.pageYOffset < 1300){
        imageVRGO.classList.remove(styles.is_visibleOposto); 
        textVRGO.classList.remove(styles.is_visible);
      }

      if(window.pageYOffset > 2070){
        imageContato.classList.add(styles.is_visible); 
        textContato.classList.add(styles.is_visibleOposto);
      }
      else if(window.pageYOffset < 2070){
        imageContato.classList.remove(styles.is_visible); 
        textContato.classList.remove(styles.is_visibleOposto);
      }

      scroll(loop);
    }
    loop();
  });
  

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
      <main className={styles.main} id="main">

        <h1 className={styles.title}>VRGO</h1>
        <h1 className={styles.description}>Realidade Virtual</h1>


        <div className={styles.div_divs_infos} >
          <div className={styles.div_produto} id="produto">
            <iframe className={styles.video_div} src="https://www.youtube.com/embed/tgbNymZ7vqY" />
            <h1>PRODUTO</h1>
            <div className={styles.div_infos_image}>
              <Image id="imageProduto" src="/image1.png" width={1000} height={666} quality={100} className={styles.div_contato_imagem +" "+ styles.show_on_scroll} />
              <p id="textProduto" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className={styles.div_vrgo} id="vrgo">
            <h1>VRGO</h1>
            <div className={styles.div_infos_image}>
              <p id="textVRGO" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <Image id="imageVRGO" src="/image1.png" width={1000} height={666} quality={100} className={styles.div_contato_imagem +" "+ styles.show_on_scroll} />
            </div>
          </div>
          <div className={styles.div_contato} id="contato">
            <h1>CONTATO</h1>
            <div className={styles.div_infos_image}>
              <Image id="imageContato" src="/image1.png" width={1000} height={666} quality={100} className={styles.div_contato_imagem +" "+ styles.show_on_scroll} />
              <p id="textContato" className={styles.div_info_descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
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

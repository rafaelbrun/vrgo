import React, { useEffect } from 'react';
import styles from '../styles/pages/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmallFooter from '../components/SmallFooter';
import Body from '../components/Body';
import TopTitle from '../components/TopTitle';

export default function Home() {
  useEffect(() => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className={styles.main} id="main">

        <TopTitle />

        <Body />

        <Footer />

        <SmallFooter />

      </main>
    </div>
  )
}

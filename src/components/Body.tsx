import Image from "next/image";
import styles from '../styles/pages/Home.module.css'

export default function Body() {
    return (
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
                <h1>VRGo</h1>
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
    )
}
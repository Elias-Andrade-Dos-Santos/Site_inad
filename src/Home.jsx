import React from 'react'
import styles from "./css/App.module.css"
import LOGOINAED from "./img/logoinaed.png"
import IMGESPECI from './img/consultorinaed.png'
import { BsFillChatDotsFill } from "react-icons/bs";


const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href=""><BsFillChatDotsFill className={styles.icon}/></a>
      </div>
      <nav className={styles.containerNav}>
        <div className={styles.containerLogoINAED}>
          <img className={styles.img} src={LOGOINAED} alt="" />
        </div>
        <div className={styles.containerLinks}>
          <ul className={styles.containerother}>
            <li>Quem somos</li>
            <li>Soluções</li>
            <li>Fundação Dom Cabral</li>
            <li>Blog</li>
            <div className={styles.dropdown}>
              <button className={styles.mainmenubtn}>Galeria</button>
              <div className={styles.dropdown_child}>
                <a href="#">fotos</a>
                <a href="#">Videos</a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      <div className={styles.superContainerSobreNos}>
        <div className={styles.bola}></div>
        <div className={styles.sobreNos}>
          <h1>Somos o INAED:<br/>Soluções em Gestão </h1>
          <p>Temos como missão contribuir com o desenvolvimento das pessoas e das<br/> organizações, sempre com confiabilidade, ética, flexibilidade e foco em<br/>  resultados.</p>
          <div className={styles.containerButton}>
            <div className={styles.containerButton1}>CONHEÇA MAIS SOBRE NÓS</div>
            <div className={styles.containerButton2}>FALE COM UM ESPECIALISTA</div>
          </div>
          <div className={styles.superContainerBar}>
            <div className={styles.barBottom}>
          </div>
          <div className={styles.bolaAzul}></div>
          </div>
        </div>
        <div className={styles.containerFotoConsultorInaed}>
          <img className={styles.imgConsultor} src={IMGESPECI} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
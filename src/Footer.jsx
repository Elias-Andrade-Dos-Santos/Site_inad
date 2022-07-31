import React from 'react'
import styles from "./css/Footer.module.css"
import LogoWhite from "./img/logo-white.png"


const Footer = () => {
return (
<div className={styles.superContainer}>
  <div className={styles.containerFooterLogo}>
    <img src={LogoWhite} alt="" />
    <h1>Desenvolvendo Pessoas e Organizações.</h1>
  </div>
  <div className={styles.containerFooterOther}>
    <ul className={styles.FooterLinks}>
      <li>QUEM SOMOS</li>
      <li>SOLUÇÕES</li>
      <li>FDC</li>
      <li>BLOG</li>
      <li>GALERIA</li>
    </ul>
    <div className={styles.FooterContatos}>
      <div className={styles.numeroContato}>
        <a href="(98) 3275-4286">(98) 3275-4286</a>
        <a href="(98) 3304-7311">(98) 3304-7311</a>
      </div>
      <div className={styles.FooterZapContato}></div>
      <div className={styles.contatoEmail}>contato@inaed.com</div>
      <div className={styles.localização}>Av. Colares Moreira, Nº 03, Qd. 32, Edifício Business Center Jardim Renascença, Sala 921 - CEP: 65.075-441</div>
    </div>
    <div className={styles.containerpoliti}>Confira nossa POLÍTICA DE TRATAMENTO E PROTEÇÃO DE DADOS</div>
  </div>
</div>
)
}

export default Footer                
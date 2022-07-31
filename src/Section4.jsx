import React from 'react'
import styles from "./css/Section4.module.css"
import Top1 from "./img/svg/top1.svg"
import Top2 from "./img/svg/top2.svg"
import Top3 from "./img/svg/top3.svg"

const section4 = () => {
  return (
    <div className={styles.superContainer} >
      <h1 className={styles.titulo}>
      TOP 3 Cursos mais procurados
      </h1>
      <div className={styles.containerTop3}>
        <div className={styles.containerTop}>
          <img className={styles.img} src={Top2} alt="" />
          <div className={styles.bar}></div>
          <p>Formação de Auditor Líder da Qualidade <br /> ISO 9001:2015</p>
          <div className={styles.saibamais}>Saiba mais</div>
        </div>
        <div>
          <img className={styles.img1} src={Top1} alt="" />
          <div className={styles.bar}></div>
          <p>Formação de Auditor Interno ISO 9001:2015 <br /> (On-line).</p>
          <div className={styles.saibamais}>Saiba mais</div>
        </div>
        <div  className={styles.containerTop}>
          <img className={styles.img2} src={Top3} alt="" />
          <div className={styles.bar}></div>
          <p>Formação PBQP-H SiAC 2021 e <br /> ISO 9001:2015</p>
          <div className={styles.saibamais}>Saiba mais</div>
        </div>
      </div>
    </div>
  )
}

export default section4
import React from 'react'
import styles from "./css/SectionDese.module.css"

const sectionDesePessoas = () => {
  return (
    <div className={styles.superContainer}>
        <div className={styles.img}>
            <img src="" alt="" />
        </div>
        <div className={styles.desePessoas}>
            <div className={styles.h1}>
                <h1>Desenvolvendo Pessoas</h1>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>60</h1>
                </div>
                <p>auditores líderes em Sistemas de Gestão da <br /> Qualidade/Ambiental formados.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>450</h1>
                </div>
                <p>auditores internos em Sistemas de Gestão <br /> da Qualidade/Ambiental formados.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>3100</h1>
                </div>
                <p>formandos em soluções diversas (cursos in <br /> company e abertos) em processos, requisitos <br /> normativos, gestão de pessoas e estratégias.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.buttom}>
                QUERO FALA COM UM ESPECIALISTA
            </div>
        </div>
    </div>
  )
}

export default sectionDesePessoas
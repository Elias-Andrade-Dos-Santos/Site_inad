import React from 'react'
import styles from './css/Section5.module.css'


const Section5 = () => {
  return (
    <div className={styles.superContainer}>
        <div className={styles.desePessoas}>
            <div className={styles.h1}>
                <h1>Desenvolvendo <br /> Organizações</h1>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>250</h1>
                </div>
                <p>diagnósticos para desenvolvimento de soluções <br /> customizadas.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>5000</h1>
                </div>
                <p>horas de auditorias de segunda e terceira partes.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.desePessoas2}>
                <div className={styles.contaierH1}>
                    <h1>+</h1>
                    <h1>9100</h1>
                </div>
                <p>horas de consultorias em metodologias de<br /> gestão.</p>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.buttom}>
                QUERO FALA COM UM ESPECIALISTA
            </div>
        </div>
        <div className={styles.img}>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Section5
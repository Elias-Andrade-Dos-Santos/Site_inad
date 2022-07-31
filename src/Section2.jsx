import React from 'react'
import styles from './css/Section2.module.css'

const Section2 = () => {
  return (
    <div className={styles.superContainer} >
        <h1>Conheça nossos cursos</h1>
        <div className={styles.containerCursos}>
            <div className={styles.containerTituloCu}>
                <h3>CIA</h3>
                <div className={styles.tituloCurso}>Administração para Iniciantes</div>
                <div className={styles.tituloCurso}>Método Triplo P</div>
                <div className={styles.tituloCurso}>Formação de Gestor da Qualidade - Nível 1</div>
                <div className={styles.tituloCurso}>Formação de Consultor Interno e Externo - Nível 1</div>
                <div className={styles.tituloCurso}>Gestão de Riscos Aplicada à Gestão de Qualidade na Prática</div>
            </div>
            <div className={styles.containerTituloCu}>
                <h3>Inovação</h3>
                <div className={styles.tituloCurso}>Formação em Head de Inovação na ISO 56002</div>
                <div className={styles.tituloCurso}>Curso Lei Geral de Proteção de Dados</div>
                <div className={styles.tituloCurso}>Formação em Analista de Inovação</div>
            </div>
            <div className={styles.containerTituloCu}>
                <h3>Processos</h3>
                <div className={styles.tituloCurso}>Bizagi: Introdução ao Mapeamento de Processos</div>
                <div className={styles.tituloCurso}>Programa de Formação em BPM - com BIZAGI</div>
                <div className={styles.tituloCurso}>MASP e KAIZEN – Soluções para Melhorias</div>
            </div>
            <div className={styles.containerTituloCu}>
                <h3>Formação de Auditores</h3>
                <div className={styles.tituloCurso}>Formação de Auditores Internos em ISO 14001:2015</div>
                <div className={styles.tituloCurso}>Formação de Auditor Interno em PBQP-H SiAC 2021</div>
                <div className={styles.tituloCurso}>Formação de Auditor Interno em ISO 9001:2015(On-line)</div>
                <div className={styles.tituloCurso}>Formação de Auditor Interno em ISO 45001:2018</div>
                <div className={styles.tituloCurso}>Formação de Auditor Interno em SGI: ISO 9001, 45001 e 14001</div>
                <div className={styles.tituloCurso}>Formação em Auditor Líder da Qualidade ISO 9001:2015</div>
                <div className={styles.tituloCurso}>Formação de Auditor Interno nas Normas PBQP-H, ISO 9001 E ISO 45001</div>
            </div>
            <div className={styles.containerTituloCu}>
                <h3>Fundação Dom Cabral</h3>
                <div className={styles.tituloCurso}>Pós-graduação em Gestão de Negócios</div>
                <div className={styles.tituloCurso}>GEF - Gestão Econômico-Financeira</div>
                <div className={styles.tituloCurso}>Liderança de Impacto: Conexão e Ação para Resultados</div>
            </div>
        </div>
    </div>
  )
}

export default Section2
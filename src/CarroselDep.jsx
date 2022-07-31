import React from 'react'
import Slider from "react-slick";
import styles from "./css/CarroselDep.module.css"


const CarroselDep = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      
        
      };
  return (
    <div className={styles.superContainer}>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
        <h1>O que falam sobre nós</h1>
   
            <Slider {...settings} className={styles.container}>
            <div>
                <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                </p>
                <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>

            </div>
            <div>
            <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                    </p>
                    <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                    </p>
                    <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                    </p>
                    <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                    </p>
                    <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <p className={styles.depo}>Pensei que seria muito difícil acompanhar o curso de PQBP-h SiAC 2021, pois para mim seria a primeira vez em contato com a norma. Porém, a didática do professor favoreceu o aprendizado e tornou o conteúdo interessante. Saí da primeira aula com gás e estimulado para continuar o curso. Foi uma semana de muito conhecimento e troca de experiências. Super recomendo.
                    
                    </p>
                    <div className={styles.containerPessoa}>
                    <div className={styles.containerImg}>
                        <img src="#" alt="" />
                    </div>
                    <div className={styles.pessoas}>
                        <p className={styles.name}>
                        Paulo Victor Correa
                        </p>
                        <p className={styles.cargo}>
                            Lucena Infraestrutura
                        </p>
                    </div>
                </div>
            </div>
            </Slider>
     
  </div>
  )
}

export default CarroselDep
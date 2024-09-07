import Foto from './imagem/capa-blog-NTC-Agro-.png'
import styles from './img.module.css';


function Img(){
    return(
        <div className={styles.corpo}>
            <img src={Foto} alt="foto de porquinho de moeda" srcset="" />
        </div>
    );
}

export default Img;
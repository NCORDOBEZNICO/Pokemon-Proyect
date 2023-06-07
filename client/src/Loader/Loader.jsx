import style from '../Loader/Loader.module.css'
import imagen1 from '../Imagenes/pikachulanding.gif'


const Loader = () => {
    
    return(
        <div className={style.containerMain}>
            <img className={style.imgLoader} src={imagen1} alt="" />
            
        </div>
    )
}

export default Loader;
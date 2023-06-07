import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Card = (props) => {
    return(
        <div className={style.cardContainer}>
           <Link className={style.link} to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} className={style.img}/>
            <p className={style.name}>{props.name} </p>
            <br />
            <p className={style.hp}>HP: {props.hp}</p>
            <p className={style.attack}>ATTACK: {props.attack}</p>
            <p className={style.defense}>DEFENSE: {props.defense}</p>
            {/* <p>{props.type && `TYPES ${props.type[0].toUpperCase()}`} {props.type[1] && `AND ${props.type[1].toUpperCase()}`}</p> */}
            </Link>  
            
             
             
             
        
        </div>
    )
}

export default Card;
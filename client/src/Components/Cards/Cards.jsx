import Card from "../Card/Card"
import style from '../Cards/Cards.module.css'
import { useSelector } from "react-redux"


const Cards = (currentCharacters) => {

        const pokemons = useSelector(state => state.pokemons)
        console.log(pokemons)






        return (
            <div className={style.container}>
                {pokemons.map(pokemon => {                 
                    return <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name.toUpperCase()}
                        image={pokemon.image}
                        hp={pokemon.hp}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        type={pokemon.type && pokemon.type}
                    />
                })}
            </div>
        )
    }
export default Cards;
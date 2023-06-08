import { useState } from "react";
import style from '../Form/Form.module.css'


const Form = () => {

    const [form, setForm] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: ''   
    })

    const [errors, setErrors] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: ''   
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})

        validations({...form, [property]: value})
    }
      

    const validations = (form) => {
        if(form.name.length >= 4 ) {
            setErrors({
                ...errors,
                name: 'Nombre Correcto'
            })
        } else {
            setErrors({
                ...errors,
                name: 'El nombre es muy corto'
            })
        }
        if(form.name === '') {
            setErrors({
                ...errors,
                name: 'Ingrese un nombre'
            })
        }
    }


    return (
        <div className={style.containerMain}>
            <form action="">
            <h1 className={style.title}>CREATE POKEMON</h1>
            <h2>
                <label className={style.label}>Name:</label>
                <input className={style.input} type="text" value={form.name} name="name" onChange={changeHandler}   />
                {errors.name && <span className={style.span}> {errors.name}</span>}
            </h2>
            <h2>
                <label>HP:</label>
                <input  type="number" value={form.hp} name="hp" onChange={changeHandler}  />
            </h2>
            <h2>
                <label>Attack:</label>
                <input type="number" value={form.attack} name="attack" onChange={changeHandler}  />
            </h2>
            <h2>
                <label>Defense:</label>
                <input type="number" value={form.defense} name="defense" onChange={changeHandler} />
            </h2>
            <h2>
                <label>Speed:</label>
                <input type="number" value={form.speed} name="speed" onChange={changeHandler} />
            </h2>
            <h2>
                <label>Height:</label>
                <input type="number" value={form.height} name="height" onChange={changeHandler} />
            </h2>
            <h2>
                <label>Weight:</label>
                <input type="number" value={form.weight} name="weight" onChange={changeHandler} />
            </h2>
            <h2>
                <label>Image URL:</label>
                <input type="text" value={form.image} name="image" onChange={changeHandler} />
            </h2>
            <button type="submit">SUBMIT</button>
            </form>

        </div>
    )
}

export default Form;
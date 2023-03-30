import React from "react"
import { useState } from "react"
import styled from './Form.module.css'

const validacion=(form,Errores)=>{
  const error = {...Errores}
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.gmail)) {
    if (form.gmail.length > 20) {
      error.gmail='que haces bobo tiene mas de 20 char';
    } else {
      error.gmail='';
    }
  } else {
    error.gmail='Username invalido';
  }

      if (!form.password) {
        error.password='Password esta vacío';
      } else {
        if (!/\d/.test(form.password)) {
          error.password='Tiene que tener al menos 1 numero';
        } else if (form.password.length < 6) {
          error.password='Tiene que ser mayor a 6 caracteres';
        }else {
          error.password='';
        }
      }
      return error
      
    }
  

export default function Form({login}){
    const [form, setform]= useState({
        gmail: '',
        password:''
})
    const[Errors, setErrors]= useState({
        gmail: '',
        password:''
})
    const change =(event)=>{
        const property = event.target.name;
        const value= event.target.value;
        setform({...form, [property]:value})
        setErrors(validacion({...form, [property]:value},Errors))
    }
    const handleSubmit =()=>{
      login(form)
        
  }
    
    return (

        <form className={styled.caja} onSubmit={handleSubmit}>
            <div>
            <label for='name' >Gmail:</label>
            <input type="text" value={form.gmail} id='name'onChange={change} name='gmail'/></div>
            <p>{Errors.gmail}</p>
            
            <div>
            <label for='passw'>Contraseña:</label>
            <input type="text" id= 'passw' value={form.password}onChange={change} name='password' />
            <p>{Errors.password}</p>
            </div>
            
            <button>Enviar</button>
        </form>
    )
}

import styles from './components/Cards/Cards.module.css'
import About from './components/paginas/About'
import Detail from './components/paginas/Detail/Detail.jsx'
import Nav from './components/Nav/Nav'
import Home from './components/paginas/Home'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from "react";
import {Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Form from './components/paginas/Form/Form';


function App () {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'Daniel@gmail.com';
  const password = 'bobolon1';
  

function login(form) {
   if (form.gmail === username && form.password === password) {
      setAccess(true);
      navigate('/home');
   }else{alert('datos incorrectos')}
}

useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  function onSearch(id) {
    const URL_BASE = "http://localhost:3001/rickandmorty/onsearch/";
    // const KEY = "ddef674c82c7.55d441cc5b2898aeb0fb";

    fetch(`${URL_BASE}${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
            
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID, o estas repitiendo un personaje');
          }
       });
      }
      function onClose (id){
        setCharacters(characters.filter((char) => char.id !== id))
  
      }
      const {pathname} = useLocation()
  return (
    <div className= {styles.caja_print}>
      {pathname !== '/' && <Nav onSearch={onSearch}/>}
    <Routes>
     
      <Route path="/about" element={<About />} />
      <Route path="/detail/:detailId" element={<Detail />} />
      <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path='/' element={<Form login={login}/>}/>
    </Routes> 
    </div>
  ) 
}

export default App

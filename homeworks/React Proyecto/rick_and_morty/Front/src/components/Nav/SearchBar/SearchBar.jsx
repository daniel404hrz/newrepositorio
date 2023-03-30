import styled from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [searchTerm, setSearchTerm] = useState('');
   
   const handleInputChange = event => {
      setSearchTerm(event.target.value);
   };
   
   const handleButtonClick = () => {
      onSearch(searchTerm);
      setSearchTerm('');
   };
   const randomButton = ()=>{
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      onSearch(randomNumber)
   }
   return (
      <div className={styled.caja_button}>
   
         <button className={styled.button_r} onClick={randomButton}>Random</button>
         
         <div className={styled.SearchBar}>
            <input type='search' placeholder='Wubba lubba dub-dub' value={searchTerm} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Agregar</button>
         </div>
      </div>
   );
}
import styles from '../Cards/Cards.module.css'
import Cards from '../Cards/Cards.jsx'
import style from '../Global/global.module.css'
export default function Home ({characters, onClose}) {
  

  
  return (
    <div className= {styles.caja_print}>
        <h1 className={style.titulo}>Rick and Morty</h1>
      
      <div className={styles.cartas}>
      <Cards characters={characters} onClose={onClose}/>
        </div>
        
    </div>
  )
}


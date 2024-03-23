import styles from './Games.module.css'
import gamesImg from '../../static/_Game.jpg'

export default function Games(){
    return(
        <div className={styles.Screen}>
            <img src={gamesImg} className={styles.gamesImg} alt='Game'></img>
        </div>
    )
}
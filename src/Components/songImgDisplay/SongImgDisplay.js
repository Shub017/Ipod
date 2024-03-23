import { useState } from "react"
import styles from './song.module.css'
import song1Img from '../../static/Infinity_Jaymes_Young.jpg';
import song3Img from '../../static/Dua_Lipa_-_Houdini.png';
import song2Img from '../../static/Elton_John,_Dua_Lipa_-_Cold_Heart.png';
import song4Img from '../../static/Never Gonna Give You Up.png'



export default function SongimgDisplay(props){
    const {activeSongListItem} = props;
    const [songImgs] = useState([song1Img, song2Img, song3Img, song4Img]);

    return(
        <div className={styles.Screen}>
            <img src={songImgs[activeSongListItem]} className={styles.imgdisplay} alt='SongImg'/>
        </div>
    )
}
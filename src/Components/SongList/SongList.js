import { useState } from "react"
import styles from './SongList.module.css'

export default function SongList(props){
    const { activeSongListItem} = props;
    const [songlist] = useState(['Because-I-Love-You-For-Infinity', 'Elton-John-feat-Dua-Lipa-Cold-Heart', 'Houdini Dua Lipa', 'Rick Astley - Never Gonna Give You Up']);

    return(
        <div className={styles.Screen}>
            <ol className={styles.marginTop}>
            {songlist.map((d, index) => (
                index === activeSongListItem ?
                    <li key={index} className={styles.activesongItem}>{d}</li> :
                    <li key={index} className={styles.songItem}>{d}</li>
                ))}
            </ol>
        </div>
    )
}
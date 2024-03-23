import styles from './Display.module.css';
import { useState } from 'react';
import wallpaper1 from '../../static/Wallpaper_1.jpeg';
import wallpaper2 from '../../static/Wallpaper_2.jpeg';
import wallpaper3 from '../../static/Wallpaper_3.jpeg';


const Display = (prop) => {
    const {wallpaperNo} = prop;
    const [wallpapers] = useState([wallpaper1, wallpaper2, wallpaper3])
    
    return (
        <div className={styles.Screen}>
            <img src={wallpapers[wallpaperNo]} alt="Wallpaper" className={styles.wallpaperImage} />
        </div>
    );
}

export default Display;

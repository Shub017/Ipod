import React, { useState } from 'react';
import styles from './Settings.module.css';

export default function Settings(props) {
    const { wallpaperNo } = props;
    const [wallpapers] = useState(['wallpaper1', 'wallpaper2', 'wallpaper3']);

    return (
        <div className={styles.Screen}>
            <p className={styles.heading}>Choose A Wallpaper</p>
            <ol>
                {wallpapers.map((d, index) => (
                    index === wallpaperNo ? (
                        <li key={index} className={styles.ListItem} >{d}</li>
                    ) : (
                        <li key={index} className={styles.activeListItem}>{d}</li>
                    )
                ))}
            </ol>
        </div>
    );
}


import displayMenuStyle from './DisplayMenu.module.css';
import games from '../../static/game.jpg'
import song from '../../static/music.jpg'
import setting from '../../static/settings.png'
import { useState } from 'react';

export default function DisplayMenu(props){
    const {activeMenuItem} = props;
    const [menuList] = useState(['Songs', 'Games', 'Settings'])

    return(
        <div className={displayMenuStyle.Screen}>
            <ol className={displayMenuStyle.listStyle}>
                {menuList.map((d, index) => (
                    <li key={index} className={index === activeMenuItem ? displayMenuStyle.activeMenu : displayMenuStyle.listOption} >{d}</li>
                ))}
            </ol>
            {activeMenuItem === 0?<img src={song} className={displayMenuStyle.img} alt={activeMenuItem}/>:activeMenuItem === 1?<img src={games} className={displayMenuStyle.img} alt={activeMenuItem}/>:<img src={setting} className={displayMenuStyle.img} alt={activeMenuItem}/>};
        </div>
    )
}

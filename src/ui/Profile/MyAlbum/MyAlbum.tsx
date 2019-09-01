import React from 'react';
import style from './MyAlbum.module.css'


const MyAlbum = (props: any) =>{
    return <div className={style.myAlbum}>
        <div className={style.headline}>My album</div>
        <div className={style.photos}>
            <img src='https://pp.userapi.com/c625322/v625322253/4880c/Rje7PYRyPL0.jpg'></img>
            <img src='https://pp.userapi.com/c849328/v849328914/12fcbd/Jz1l1YnQmy8.jpg'></img>
            <img src='https://pp.userapi.com/c849124/v849124094/21175/QpU4byFysP4.jpg'></img>
            <img src='https://pp.userapi.com/c629307/v629307330/38333/wfffSYowsYM.jpg'></img>
            <img src='https://pp.userapi.com/c543109/v543109717/1fdd3/jfmA65f2PZA.jpg'></img>
            <img src='https://pp.userapi.com/c604628/v604628784/2fc6d/K47mv6IHsNA.jpg'></img>

        </div>
        </div>
}

export default MyAlbum
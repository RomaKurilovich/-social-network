import React from 'react';
import style from './Post.module.css'

interface IProps {
    foto: string;
    message: string;
}

const Post = (props: IProps) => {
    return <div className={style.myPostsApp}>

        <div className={style.post}>
            <div className={style.headlinePost}>
                <div className={style.imgPost}><img src={props.foto ? props.foto : 'https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg'} alt="foto"></img></div>
                <div className={style.nikNamePost}>Roma kurilovich</div>
            </div>
            <div className={style.contentPost}><span>
                {props.message}
            </span></div>
        </div>

    </div>
}

export default Post
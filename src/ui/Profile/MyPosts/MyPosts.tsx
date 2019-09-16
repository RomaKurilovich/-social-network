import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

interface IProps {
    addPost: Function;
    updatePostText: Function;
    posts: any;
    isAuth: boolean;
    foto: string;
    newText: string;
}

const MyPosts = (props: IProps) => {

    let onAddPostClick = () =>{
        props.addPost()
        props.updatePostText('')
    }
    let newPostTeaxtChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        let newValue = e.target.value;
        props.updatePostText(newValue)
    }

    let postsElement = props.posts.map( (p :any) =>  <Post key={p.id} message={p.message}  foto={props.foto} /> )

    return <div className={style.myPostsApp}>

       { props.isAuth && <div className={style.addPost}>
            <div className={style.textareaWithPhotosBlock}>
                <div className={style.headlineAddPost}>
                    
                    <div className={style.imgAddPost}><img src={props.foto ? props.foto : 'https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg'} alt="foto"></img></div>
                    <div className={style.nikNameAddPost}>Roma Kurilovich</div>
                </div>
                <div className={style.inputArea}>
                    <textarea value={props.newText} onChange={newPostTeaxtChange}/>
                    <button onClick={onAddPostClick}>add post</button>
                    </div>
            </div>
        </div>}

        <div className={style.posts}>
            {postsElement}

        </div>


    </div>
}

export default MyPosts
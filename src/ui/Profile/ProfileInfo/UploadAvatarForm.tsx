import React, { useRef } from 'react'
import style from './ProfileInfo.module.css'


const UploadAvatarForm = (props: any) => {

    const inputEl = useRef(null)
    const onSaveAvatar = () =>{
        props.setEditAvatarMode(false)
    }
    const onUpload = (e: any) =>{
        e.preventDefault();
        let file = e.target[0].files[0];
        props.fetchSetNewPhotoOfAvatar(file);
    }
    return (
        <form onSubmit={onUpload}>
            <input ref={inputEl} type='file' className={style.button}/>
            <button type='submit' className={style.button} onClick={onSaveAvatar}>Upload</button>
        </form>
    )
}
export default UploadAvatarForm;
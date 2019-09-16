import React, { useState, useEffect } from 'react';
import style from './ProfileInfo.module.css'
import { NavLink } from 'react-router-dom';
import UploadAvatarForm from './UploadAvatarForm';

interface IProps {
    profileInfo: any;
    isAuth: boolean;
    myId?: number;
    subscribe: Function;
    unSubscribe: Function;
    friends: any;
    fetchSetNewPhotoOfAvatar: Function;
    onContactChange: Function;
    putNewInfo: Function;
    getProfileInfo: Function;
    aboutMeChange: Function;
    status: string;
}

const ProfileInfo = (props: IProps) => {

    let [followed, setFollow] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let [editAvatarMode, setEditAvatarMode] = useState(false)

    useEffect(() => {
        setFollow(false)
        if (!!props.friends) {
            props.friends
                .map((f: any) => {
                    if (f.id === props.profileInfo.userId) {
                        setFollow(true)
                    }
                })
        }
    }, [props.profileInfo.userId])

    const onSaveNewInfo = () => {
        setEditMode(false)
        props.putNewInfo()
    }

    const onSubscribeClick = () => {
        let userId = props.profileInfo.userId;
        props.subscribe(userId);
        setFollow(true)
    }
    const onUnSubscribeClick = () => {
        let userId = props.profileInfo.userId;
        props.unSubscribe(userId);
        setFollow(false)
    }

    return <div className={style.profileInfo}>

        {props.status !== "INPROGRESS" ? <div className={style.userInfo}>
            <div className={style.buttonWithAvatar}>
                <div className={style.avatar}>
                    <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : 'https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg'} alt="foto"></img>
                </div>
                {props.isAuth &&
                    <div className={style.buttonForUser}>
                        {(props.profileInfo.userId === props.myId) ? <>
                            {editAvatarMode ? <UploadAvatarForm
                                setEditAvatarMode={setEditAvatarMode}
                                fetchSetNewPhotoOfAvatar={props.fetchSetNewPhotoOfAvatar}                        >
                            </UploadAvatarForm> :
                                <div className={style.button} onClick={() => setEditAvatarMode(true)}>Edit avatar</div>}
                            {editAvatarMode && <div className={style.button} onClick={() => setEditAvatarMode(false)}>Back</div>}
                            {editMode ? <div className={style.button} onClick={onSaveNewInfo}>Save</div> :
                                <div className={style.button} onClick={() => setEditMode(true)}>Edit my contact</div>}
                        </> : <>
                                <div className={style.button}><NavLink to={'/dialogs/' + props.profileInfo.userId}>Send Message</NavLink></div>
                                {followed ?
                                    <div className={style.button} onClick={onUnSubscribeClick}>Unsubscribe</div> :
                                    <div className={style.button} onClick={onSubscribeClick}>Subscribe</div>
                                }</>}
                    </div>}
            </div>
            <div className={style.myContactsAndAboutMe}>
                <div className={style.myContacts}>
                    <div className={style.spanMyContacts}>My contacts</div>
                    {Object.keys(props.profileInfo && props.profileInfo.contacts).map(key => {
                        return <div className={style.oneContactKey} key={key}>
                            <span className={style.oneContactKeySpan}>  {key} :
                            {editMode && <input value={props.profileInfo.contacts[key]} onChange={(e: any) => {
                                    let newValue = e.target.value;
                                    props.onContactChange(newValue, key)
                                }} />}
                                {!editMode && props.profileInfo.contacts[key]}
                            </span>
                        </div>
                    })}

                </div>
                {!editMode && <div className={style.aboutMe}>
                    <div> About me:</div>  {props.profileInfo.aboutMe}
                </div>}
                {editMode && <div className={style.aboutMe}>
                    <div> About me:</div> <input value={props.profileInfo.aboutMe} onChange={(e: any) => props.aboutMeChange(e.target.value)} />
                </div>}
            </div>
        </div> : <img src="https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"></img>}
    </div>
}

export default ProfileInfo;
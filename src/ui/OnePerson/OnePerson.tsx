import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './OnePerson.module.css';

interface IProps {
    user: any;
    subscribe: Function;
    unSubscribe: Function;
}

const OnePerson = ({user, subscribe, unSubscribe} :IProps) => {

    const onSubscribeClick = (e: any) =>{
        let clikedButton = e.target;
        let userId = +clikedButton.dataset.userId;
        subscribe(userId);
    }
    const onUnSubscribeClick = (e: any) => {

        let clikedButton = e.target;
        let userId = +clikedButton.dataset.userId;
        unSubscribe(userId)

    }
    return(
        <div className={style.oneUser}>

                <div className={style.userName}>
                    <NavLink to={`/profile/${user.id}`} >
                        <span >{user.name}</span>
                    </NavLink>
                </div>

                <div className={style.imgDiv}>
                    <img src={user.photos.small == null ? 'https://via.placeholder.com/100' : user.photos.small} alt="foto"/>
                </div>

                <NavLink to={'/dialogs/' + user.id}>Send Message</NavLink>
                {user.followed ?
                    <div className={style.buttonFollow}> <button data-user-id={user.id} onClick={onUnSubscribeClick}>Unsubscribe</button> </div>:
                    <div className={style.buttonFollow}> <button data-user-id={user.id} onClick={onSubscribeClick}>Subscribe</button> </div> }

            </div>
    )
}


export default OnePerson;
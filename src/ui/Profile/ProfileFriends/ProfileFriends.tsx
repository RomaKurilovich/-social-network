import React from 'react';
import style from './ProfileFriends.module.css'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

interface IProps {
    friends: any;
    status: string;
}

const ProfileFriends = (props: IProps) => {

    var size = 6;

    var friends = props.friends.slice(0, size).map((f: any) => 
        
                <div className={style.oneFriend} key={f.id}>
                    <span>{<NavLink to={`/profile/${f.id}`} >
                    <img src={f.photos.large ? f.photos.large : 'https://via.placeholder.com/100'} alt="avatar"></img>
                       <div> <span >{f.name}</span></div>
                    </NavLink>}</span>
                </div>
    )

    return <div className={style.profileFriends}>
        <div className={style.headline}>My friends</div>
        { props.status !== "INPROGRESS" ? 
        <div className={style.allFriend}>
        {friends}
        </div> : <img className={style.pending} src="https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"></img> }
    </div>
}

let mapStateToProps = (state: any) => {
    return {
        friends: state.friends.myFriends,
        status: state.friends.status,
    }
}

export default connect(mapStateToProps, null)(ProfileFriends)
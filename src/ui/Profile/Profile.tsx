import React from 'react';
import style from './Profile.module.css'
import MyAlbum from './MyAlbum/MyAlbum';
import ProfileFriends from './ProfileFriends/ProfileFriends';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import { connect } from 'react-redux';
import {  RouteComponentProps, withRouter, Redirect  } from 'react-router-dom';

interface HomeRouterProps {
    title: string; 
  }

interface IProps extends RouteComponentProps<HomeRouterProps> {
    nikName: string;
    match: any;
}

const Profile = (props: IProps) =>{

    let userId = props.match.params.userId;

    if (userId === undefined) {
        return <Redirect to={`/login`} />
    }

    return <div className={style.profile}>
        <span className={style.nikName}>{props.nikName}</span>

        <ProfileInfoContainer />
        <MyAlbum/>
        <MyPostsContainer/>
        <ProfileFriends/>
  
        
        </div>
}

let mapStateToProps = (state: any) =>({
    nikName: state.profilePage.profileInfo.fullName,
    status: state.profilePage.status
})

export default withRouter(connect(mapStateToProps, null)(Profile))
import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo'
import { getProfileInfo, fetchSetNewPhotoOfAvatar, onContactChange, putNewInfoThunk, aboutMeChange } from '../../../redux/profilePageReducer';
import {  RouteComponentProps, withRouter } from 'react-router-dom';
import { getPeopleThunk, subscribeThunk, unsubscribeThunk } from '../../../redux/peopleReducer';
import { getFriendsThunk } from '../../../redux/friendsPageReducer';
import { me } from '../../../redux/loginReducer';

interface IProps {
    profileInfo: any;
    getProfileInfo: Function;
    isAuth:boolean;
    getPeople: Function;
    getFriends: Function;
    myId?: number;
    subscribe: Function;
    unSubscribe: Function;
    friends: any;
    fetchSetNewPhotoOfAvatar: Function;
    onContactChange: Function;
    putNewInfo: Function;
    aboutMeChange: Function;
    me: Function;
    status: string;
}

interface HomeRouterProps {
    title: string; 
  }
  
  interface HomeProps extends RouteComponentProps<HomeRouterProps> {
    match: any;
  }


class ProfileInfoContainer extends React.Component<IProps & HomeProps>{
    constructor(props: IProps & HomeProps) {
        super(props);
    }

    componentDidMount = () =>{
        let userIdFromUrl = this.props.match.params.userId;
        this.props.getProfileInfo(userIdFromUrl);
        this.props.getPeople(1);
        this.props.getFriends();
        this.props.me();
    }
    
    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
          this.props.getProfileInfo(this.props.match.params.userId);
        }
      }

    render() {
        return  <ProfileInfo {...this.props}/>
    }
}

let mapStateToProps = (state: any) =>{
    return{
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.login.isAuth,
        myId: state.login.userInfo.userId,
        friends: state.friends.myFriends,
        status: state.profilePage.status,
    }
}

let mapDispatchToProps = (dispatch: Function) =>{
    return{
        getProfileInfo: (userIdFromUrl : number)=>{dispatch(getProfileInfo(userIdFromUrl))},
        getPeople: (pageNumber: number) =>{dispatch(getPeopleThunk(pageNumber))},
        getFriends: ()=>{dispatch(getFriendsThunk())},
        subscribe: (userId: number) => dispatch(subscribeThunk(userId)),
        unSubscribe:(userId: number) => dispatch(unsubscribeThunk(userId)),
        fetchSetNewPhotoOfAvatar:(file:any) => dispatch(fetchSetNewPhotoOfAvatar(file)),
        onContactChange:(newValue: string, key: string) =>dispatch(onContactChange(newValue,key)),
        putNewInfo:()=> dispatch(putNewInfoThunk()),
        aboutMeChange:(newValue: string)=>dispatch(aboutMeChange(newValue)),
        me:()=>dispatch(me()),
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer));
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Friends from './Friends';
import { getFriendsThunk, unsubscribeFriend } from '../../redux/friendsPageReducer';
import { subscribeThunk } from '../../redux/peopleReducer';
import { Redirect } from 'react-router';



interface IProps {
    getFriends: Function;
    friends: any;
    unsubscribe: Function;
    totalCount: number;
    subscribe: Function;
    isAuth: boolean;
    status: string;
}

let FriendsContainer = (props: IProps) => {

    useEffect(()=>{
        props.getFriends()
    }, [props.friends.lenght])

    if (props.isAuth === false) {
        return <Redirect to={`/login`} />
    }

        return <Friends {...props} />
    
}

let mapStateToProps = (state: any) => {
    return {
        totalCount: state.people.totalCount,
        friends: state.friends.myFriends,
        isAuth: state.login.isAuth,
        status: state.friends.status,
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        getFriends: ()=>{dispatch(getFriendsThunk())},
        unsubscribe: (userId: number)=>{dispatch(unsubscribeFriend(userId))},
        subscribe: (userId: number) =>{dispatch(subscribeThunk(userId))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
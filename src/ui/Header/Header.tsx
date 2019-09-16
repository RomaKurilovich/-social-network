import React, { useEffect } from 'react';
import style from './Header.module.css'
import HeaderButton from '../StyledComponents/HeaderButton';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut, me } from '../../redux/loginReducer';


interface IProps {
    isAuth: Boolean;
    myId?: number;
    logOut: any;
    me: Function;
}

const Header = (props: IProps) => {

    useEffect(()=>{
        props.me()
    })

    return <div className={style.header}>
<div className={style.allHeaderButton}>

{ !props.isAuth &&  <div className={style.oneHeaderButton}><HeaderButton>
    <NavLink to='/profile'> 
    <img src="https://img.icons8.com/dusk/64/000000/contract-job.png" alt="profile">
        </img>Profile</NavLink></HeaderButton></div> }

     { props.isAuth && <div className={style.oneHeaderButton}><HeaderButton>
         <NavLink to={`/profile/${props.myId}`}>
         <img src="https://img.icons8.com/dusk/64/000000/contract-job.png" alt="profile"></img>Profile</NavLink></HeaderButton></div>}

      <div className={style.oneHeaderButton}><HeaderButton>
          <NavLink to='/friends'>
          <img src="https://img.icons8.com/dusk/64/000000/friends.png" alt="friends"></img>Friends</NavLink></HeaderButton></div> 

      <div className={style.oneHeaderButton}><HeaderButton>
          <NavLink to='/dialogs'>
          <img src="https://img.icons8.com/dusk/64/000000/new-message.png" alt="dialogs"></img>Dialogs</NavLink></HeaderButton></div> 

      <div className={style.oneHeaderButton}><HeaderButton>
          <NavLink to='/people'>
          <img src="https://img.icons8.com/dusk/64/000000/conference-call.png" alt="people"></img>People</NavLink></HeaderButton></div> 

    { props.isAuth == false ? <div className={style.oneHeaderButton}><HeaderButton>
        <NavLink to='/login'><img src="https://img.icons8.com/dusk/64/000000/login-rounded-right.png" alt="login"></img>
        Login</NavLink></HeaderButton></div> :

    <div className={style.oneHeaderButton}><HeaderButton onClick={props.logOut}>
        <NavLink to='/login'>
        <img src="https://img.icons8.com/cute-clipart/64/000000/exit.png" alt="logout"></img>Logout</NavLink></HeaderButton></div>  }
      </div>
        </div>
}


let mapStateToProps = (state: any) =>{
    return{
        isAuth: state.login.isAuth,
        myId:state.login.userInfo.userId
    }
}
let mapDispatchToProps = (dispatch: Function) =>{
    return{
        logOut:()=>dispatch(logOut()),
        me:()=>dispatch(me()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
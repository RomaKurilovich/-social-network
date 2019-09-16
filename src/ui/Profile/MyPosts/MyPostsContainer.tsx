import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { updatePostText, addPost } from '../../../redux/profilePageReducer';

interface IProps {
    updatePostText: Function;
    addPost: Function;
    posts: any;
    newText: string;
    foto:string;
    isAuth: boolean;
    
}

class MyPostsContainer extends React.Component<IProps>{
    
    render() {
        return  < MyPosts {...this.props}/>
        
    }
}

let mapStateToProps = (state: any) =>{
    return{
       posts: state.profilePage.myPosts.posts,
       newText: state.profilePage.myPosts.postText,
       foto: state.profilePage.profileInfo.photos.large,
       isAuth: state.login.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Function) =>{
    return{
        updatePostText: (value: string)=>{dispatch(updatePostText(value))},
        addPost: ()=>{ dispatch(addPost()) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
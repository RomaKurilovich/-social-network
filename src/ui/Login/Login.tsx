import React from 'react'
import style from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginTC } from '../../redux/loginReducer';
import { Redirect } from 'react-router';

interface IProps {
    myId: number;
    login: Function;
}

const Login = (props: IProps) => {
    debugger
    if (props.myId !== null) {
        return <Redirect to={`/profile/${props.myId}`} />
    }

    const onSubmit = (formData: any) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    return <div className={style.login}>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginForm = (props: any) => {
    return (
        <form className={style.loginBox} onSubmit={props.handleSubmit}>

            <div>mail:  kamazaff22@gmail.com </div>
            <div>password: pentagon11 </div>
            <h1>Login</h1>

                <div className={style.form_row}>
                    <Field component={"input"} name={"login"} type={"text"}  placeholder='Username'/>
                </div>

                <div className={style.form_row}>
                    <Field component={"input"} name={"password"} type={"password"} placeholder='Password' />
                </div>

                <button name={"buttonLogin"} type={"submit"} value={"Sing in"} >Sing in</button>

           
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


let mapStateToProps = (state: any) => {
    return {
        myId: state.login.userInfo.userId,
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        login: (login: string, password: string, rememberMe: boolean) => {
            dispatch(loginTC(login, password, rememberMe))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
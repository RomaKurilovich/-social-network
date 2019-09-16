import React from 'react'
import style from './Friends.module.css'
import OnePerson from '../OnePerson/OnePerson';

interface IProps {
    friends: any;
    unsubscribe: Function;
    subscribe: Function;
    status: string;
}

let Friends = (props: IProps) => {
    debugger
    return <>
    {props.status !== "INPROGRESS" ? 
        <div className={style.friends}>
            {props.friends.map((friend: any) =>
                <div key={friend.id}>
                    <OnePerson user={friend} subscribe={props.subscribe} unSubscribe={props.unsubscribe} />
                </div>)}
            </div> : <img src="https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"></img>
        }
    </>

}
export default Friends
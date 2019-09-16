import React from 'react'
import style from './People.module.css'
import OnePerson from '../OnePerson/OnePerson';
import Pagination from './Pagination';

interface IProps {
    users: any;
    unSubscribe: Function;
    subscribe: Function;
    totalCount: number;
    pageNumber: number;
    setNewPageNumber: Function;
    status: string;
}

let People = (props: IProps) => {
   
    if (!props.users.length) {
        return <div> People not found</div>
    }

    return <div className={style.people}>
        {  props.status !== 'INPROGRESS' ? 
        <div className={style.divContainer}>
            {props.users.map((user: any) => <div key={user.id}><OnePerson user={user} unSubscribe={props.unSubscribe} subscribe={props.subscribe}/>
            </div>)}
</div>  : <img src="https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"></img>  }
            <div className={style.pagination}>
        <Pagination totalCount={props.totalCount} pageNumber={props.pageNumber} setNewPageNumber={props.setNewPageNumber} />
        </div>

    </div>
}
export default People
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getPeopleThunk, subscribeThunk, unsubscribeThunk } from "../../redux/peopleReducer";
import People from './People';


interface IProps {
    getPeopleThunk: Function;
    users: any;
    status: string;
    totalCount: number;
    unSubscribe: Function;
    subscribe: Function;

}


let PeopleContainer = (props: IProps) => {

    let [pageNumber, setNewPageNumber] = useState(1);

    useEffect(() => {
        props.getPeopleThunk(pageNumber)
    }, [pageNumber])



    {
        return <People {...props} setNewPageNumber={setNewPageNumber} pageNumber={pageNumber}  />
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.people.users,
        status: state.people.status,
        totalCount: state.people.totalCount,
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        getPeopleThunk: (pageNumber: number) => dispatch(getPeopleThunk(pageNumber)),
        subscribe: (userId: number) => dispatch(subscribeThunk(userId)),
        unSubscribe:(userId: number) => dispatch(unsubscribeThunk(userId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
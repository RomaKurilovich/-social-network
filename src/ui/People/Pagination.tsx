import React from 'react';
import style from "./People.module.css";
import styled from 'styled-components'

interface IProps {
    totalCount: number;
    pageNumber: number;
    setNewPageNumber: Function;
}

function Pagination(props: IProps){
    let pageSize = 24;
    
    let pagesCount = Math.ceil(props.totalCount/pageSize);
    let buttons = [];

    for (let i = 1; i < pagesCount + 1; i++ ){

        buttons.push(<ButtonForPagination key={i} selected={props.pageNumber===i} onClick={ () => { 
             props.setNewPageNumber(i) ;
            }}>{i}</ButtonForPagination>)
    }

    return(
        <div className={style.allButtons}>
            {buttons}
        </div>
    )
}

interface IStyledDiv {
   selected: boolean
}

let ButtonForPagination = styled('div')<IStyledDiv>`
border: 1px solid grey;
padding:2px;

background-color: ${(props: any) => props.selected ? '#8298BE' : 'white'};
color: ${(props: any) => props.selected ? '#D3D3AA' : 'black'};
cursor: ${(props: any) => props.selected ? 'default' : 'pointer'};

`

export default Pagination
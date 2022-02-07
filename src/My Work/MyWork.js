import React from "react";
import style from './MyWork.module.css'

function MyWork(props) {
    return (
        <div className={style.work}>

       <h5>{props.title}</h5>
        </div>
    )
}

export default MyWork
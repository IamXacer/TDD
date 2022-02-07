import React from "react";
import style from './MyWorks.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import MyWork from "./MyWork";


function MyWorks (){
    return(
        <div className={style.myworkBlock}>
            <div className={`${styleContainer.container} ${style.workContainer}`} >
                <h4 className={style.title}>Works</h4>
                <div ><MyWork title={'Name of project'}/></div>
<div className={style.works}>

    <MyWork title={'Name of project'}/>
    <MyWork title={'Name of project'}/>
</div>
        </div>
        </div>
    )
}
export default MyWorks
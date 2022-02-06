import React from "react";
import style from './Main.module.css'
import styleContaner from '../Common/Styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContaner.container}>
                <div className={style.text}>
                    <spa>Hi Ther</spa>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}

export default Main
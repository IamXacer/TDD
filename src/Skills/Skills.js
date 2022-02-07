import React from "react";
import  style from'./Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skil/Skill";

function Skills() {
    return(
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={"Здесь вы можете " +
                    "изучить JavaScript, начиная с нуля и заканчивая продвинутыми концепциями вроде ООП."}/>
                    <Skill title={'Css'} description={"Мы сосредоточимся " +
                    "на самом языке, изредка добавляя заметки о средах его исполнения."}/>
                    <Skill title={'React'} description={"Программы на " +
                    "JavaScript могут быть вставлены в любое место HTML-документа с помощью тега "}/>
                </div>
            </div>

        </div>
    )
}

export default Skills
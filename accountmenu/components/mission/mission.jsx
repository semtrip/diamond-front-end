import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/mission.css'

//import img from 'img/mission_exsaple.png'

import store from "../../store_AccountMenu";


const Mission = observer(() => {
    const state = store.state
    return(
        <div className="mission">
            <div className="head">
                <h1>Quest line</h1>
                <span>Total amount of quests: <b>{state.mission.length}</b></span>
            </div>
            <div className="container">
            {state.mission.map((item, i)=> (
                <div className={item.attachments !== undefined ? 'task active': 'task'} key={i} id={i} onClick={store.clickTask}>
                    <div className="content">
                        <div className="image">
                            <img src="img/mission_exsaple.png" alt="" />
                            <div className="line"></div>
                        </div>
                        <div className="text">
                            <span className="title">{item.title}</span>
                            <span className="descriptor">{item.discriptor}</span>
                            {
                            item.attachments !== undefined ?
                            (
                            <span className="count">
                                Number of tasks:
                                <span><b>{item.attachments.length}</b>un.</span>
                            </span>
                            ):null
                        }
                        {
                            item.attachments === undefined ?
                            (
                            <span className="price">
                                Completion reward:
                                <span>{ store.moneyFormat(item.price)}<b>₽</b></span>
                            </span>
                            ):null
                        }
                        </div>
                    </div>
                    <div className="btn">Start the quest</div>
                </div>
            )
            )}
            </div>
        </div>
    )
})
export default Mission

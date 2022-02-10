import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/player.css'

import store from "../../store_AccountMenu";


const playerStats = observer(()=>{
    const state = store.state
    return(
        <div className="player">
            <div className="head">
                <div className="playerName">
                    <div className="icon" />
                    <span><b>{state.name}</b>#{state.id}</span>
                </div>
                <div className="buttonBlock">
                    <div className="button" onClick={store.clickBtnPlayer} id="report">A complaint</div>
                    <div className="button button_two" onClick={store.clickBtnPlayer} id="ask">Ask a question</div>
                </div>
            </div>
            <div className="stats">
                <div className="generalInfo block_s">
                    <h1>General information</h1>
                    <div className="column">
                        <div className="line">Name:<b className="active">{state.name}</b></div>
                        <div className="line">Fraction:<b>{state.fraction}</b></div>
                        <div className="line">Gender:<b>{state.sex}</b></div>
                        <div className="line">Date of Birth:<b>{state.birth}</b></div>
                        <div className="line">Spouse:<b className="active">{state.spouse}</b></div>
                        <div className="line">Minutes in the game:<b>{state.playTime} min</b></div>
                        <div className="line">Last entrance:<b>{state.lastLogin}</b></div>
                        <div className="line">Date of registration:<b>{state.dateRegistation}</b></div>
                    </div>
                </div>
                <div className="finance block_s">
                    <h1>Your finance</h1>
                    <div className="w_block">
                        <div className="cash">
                            <div className="ico">Cash</div>
                            <div className="text">${state.cash}</div>
                        </div>
                        <div className="bank">
                        <div className="ico">Bank account</div>
                            <div className="text">${state.bank}</div>
                        </div>
                        <div className="docs"></div>
                        <div className="registration">{state.reg}</div>
                        <span>To obtain official citizenship, go to “City Hall” and fill out a number of documents!</span>
                    </div>
                </div>
                <div className="statistics block_s">
                    <h1>Statistics</h1>
                    <div className="w_block">
                        <div className="content">
                        {state.stats.length > 0 ? state.stats.map((item, i)=> 
                            (
                                <div className="line" key={i}>{item.name}:<b style={{color: '#'+item.color}}>{item.data}</b></div>
                            )
                        ): null}
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
})

export default playerStats 
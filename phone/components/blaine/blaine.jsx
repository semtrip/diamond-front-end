import { observer } from "mobx-react-lite";
import React from "react";

import '../../css/bank.css'

import store from "../../phone-store";

const Blaine = observer(()=>{
    const state = store.state
    return(
            <React.Fragment >
                <div className="app-screen">
                {   
                    state.active === undefined || !state.active ?
                    <div className="bank-screen" id="blaine">
                        <div className="title">Blaine Bank</div>
                        <div className="card">
                            <div className="number">**** **** **** {state.appBank.blaine.numberCard.slice(-4)}</div>
                            <div className="valid">
                                <div className="text" />
                                <b>{state.appBank.blaine.dateCard[0]}/{state.appBank.blaine.dateCard[1]}</b>
                            </div>
                            <div className="name">{state.appBank.blaine.name}</div>
                        </div>
                        <div className="balance">
                            <span>Balance on the card:</span>
                            <span className="cash">{state.appBank.blaine.cash}$</span>
                        </div>
                        <div className="salary">
                            <div className="cash">
                                <span>Salary account status:</span>
                                <div className="sum">{state.appBank.blaine.salary}$</div>
                            </div>
                            <div className="btn" data-name='blaine' onClick={store.clickCashOut}>
                                <div className="ico"/>
                                <span>Cash out</span>
                            </div>
                        </div>
                        <div className="history-btn" data-name='blaine' onClick={store.clickBankHistory}>
                            <span>Payment history</span>
                        </div>
                    </div>:null
                }
                {
                    state.active ?
                    <div className="history-screen">
                        <div className="block">
                            <span className="title">Payment history</span>
                            <div className="content">
                                <div className="search">
                                    <input type="text" placeholder="Search..." maxLength={300}/>
                                </div>
                                <div className="text">
                                    <div className="id">№</div>
                                    <div className="description">Description</div>
                                    <div className="sum">The amount</div>
                                    <div className="date">Date</div>
                                </div>
                                <div className="items">
                                {
                                    store.arrayReverse(state.appBank.blaine.history).map((item, i)=> (
                                        <div className="item">
                                            <div className="id">#{item.id}</div>
                                            <div className="description">{item.description}</div>
                                            <div className="sum">{item.cash}$</div>
                                            <div className="date"><span>{item.date}</span><span>{item.time}</span></div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>:null
                }

                </div>
            </React.Fragment>
        )
})
export default Blaine
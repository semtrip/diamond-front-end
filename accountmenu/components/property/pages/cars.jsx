import React from "react";

import { observer } from "mobx-react-lite";

//import car_img from 'img/car_example.png'

import store from "../../../store_AccountMenu";


const Cars = observer(()=>{
    const state = store.stateCars
    function nullSlots() {
        if(!state.cars.length > 0) {
            return (<div className="nullBlock">You do not have transport<br/> free slots: {state.slots}</div>)
        } 
        else {
            let arr = []
            for (var i = 0; i < state.slots - state.cars.length; i++) {
                arr.push(<div className="item_block" />)
            }
            return arr 
        }

    }
    return(
        <div className="cars">
        {state.cars.length > 0 ? state.cars.map((item, i)=> 
            (
                <div className="item_block car" key={i}>
                    <div className="imgBlock">
                        <img src="img/car_example.png" alt="" />
                    </div> 
                    <div className="option">
                        <b>Transport information:</b>
                        <span>Model:<b>{item.name}</b></span>
                        <span>Class:<b>{item.model}</b></span>
                        <span>Tax:<b className='active'>{item.tax}</b></span>
                        <span>Fines:<b>{item.fine}</b></span>
                        <span>Fuel:<b>{item.fuel}</b></span>
                        <span>Number:<b className='active'>{item.number}</b></span>
                    </div>
                </div>
            )
            
        ): null}
        {nullSlots()}
        </div>
    )
})

export default Cars

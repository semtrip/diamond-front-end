import React from "react";
import { observer } from "mobx-react-lite";
//import house_img from 'img/house_example.png'

import store from "../../../store_AccountMenu";


const House = observer(()=>{
    const state = store.stateHouse
    return(
        <div className='house'>
                <span className="name">House #{state.id}</span>
                <div className="imgBlock">
                    <img src="img/house_example.png" alt="" />
                </div> 
                <div className="info">
                    <span>Information about the house:</span>
                    <span className='infoItem'>The address<b>{state.address}</b></span>
                    <span className='infoItem'>Tax<b>{state.tax}</b></span>
                    <span className='infoItem'>Residential places<b>{state.places}</b></span>
                    <span className='infoItem'>Garage<b>{state.garage}</b></span>
                    <span className='infoItem'>Lease term<b>{state.rent}</b></span>
                </div>
                <div className="button">
                    <div className="sell">
                        <div className="price">
                            State price:
                            <span>{state.price}$</span>
                        </div>
                    </div>
                </div>
        </div>
    )
})

export default House 
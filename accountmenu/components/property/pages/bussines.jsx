import React from "react";
import { observer } from "mobx-react-lite";

//import bussines_img from 'img/bussines_example.png'

import store from "../../../store_AccountMenu";


const Bussines = observer(()=>{
    const state = store.stateBussines
    return(
        <div className='bussines'>
        {
            state.id.length > 0 ? (
                <>
                    <span className="name">Business #{state.id}</span>
                    <div className="imgBlock">
                        <img src="img/bussines_example.png" alt="" />
                    </div> 
                    <div className="info">
                        <span>Information about business:</span>
                        <span className='infoItem'>Name<b>{state.address}</b></span>
                        <span className='infoItem'>Tax<b className="active">{state.tax}$</b></span>
                    </div>
                    <div className="button">
                        <div className="sell">
                            <div className="price">
                                State price:
                                <span>{state.price}$</span>
                            </div>
                        </div>
                    </div>
                </>
            ):<>
                <h1>You don't have a business</h1>
            </>
        }
        </div>
    )
})

export default Bussines 
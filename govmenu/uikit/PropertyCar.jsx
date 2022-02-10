import React from 'react'
import '../css/propcard.css'
//import CarCard from '../../accountmenu/uikit/CarCard'
import { useState } from 'react'
import BigButton from '../../accountmenu/uikit/BigButton'
//import Button from '../../accountmenu/uikit/Button'
import  { MdCard }from 'react-ionicons'
import  { MdCash }from 'react-ionicons'
//import Alert from '../../alert/Alert'

const PropertyCar = (props) => {
    const { id, setAlert, type, name, vin, fuel, mark, price, tax, balance, maxbalance } = props
    
    const [ isHidden, setHidden ] = useState(true)

    const [ taxValue, setTaxValue ] = useState('')
    
    return (
        <React.Fragment>
            <div className="govmenu__propertygov__container property__listed">
                <div className="govmenu__propertygov__info" onClick={() => setHidden(!isHidden)}>
                    <div className="govmenu__propertygov__info__wrapper">
                        <span className="govmenu__propertygov__propertycar__card__type">
                            {mark}
                        </span>
                        <span className="govmenu__propertygov__info__name">
                            {name}
                        </span>
                        <div className="accountmenu__content__cards__house__hprice__sell" style={{marginTop: 0, paddingTop: '1%', paddingBottom: '2%'}}>
                                <div className="accountmenu__content__cards__house__hprice__sell__linebtn">
                                    <img src={'https://gta-5.ru/server/client/images/mmenu/all/icons/money-bag.svg'} alt="" className="accountmenu__content__cards__house__hprice__sell__icon" />
                                    <span className="accountmenu__content__cards__house__hprice__sell__text">{`$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
                                </div>
                        </div>
                        <span className="govmenu__propertygov__info__balance">
                            {`Current debt: `}
                            <span className="govmenu__propertygov__info__balance__info">
                                {`$ ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                                <span className="govmenu__propertygov__info__balance"> from </span>
                                <span className="govmenu__propertygov__info__balance__info__max">
                                    {` $ ${maxbalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
                                    <span className="govmenu__propertygov__info__balance">
                                        {`  [$ ${tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} in a day ]`}
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <img src={`https://gta-5.ru/server/client/images/carsv/640/${id}.jpg`} alt="" className="govmenu__propertygov__info__img" />
                    <span data-hidden={isHidden} className="chevron left" style={{marginRight: 0}}></span>
                </div>
                {!isHidden && (
                    <React.Fragment>
                        <div className="govmenu__propertygov__payment">
                            <div className="accountmenu__content__reports__dialog__input" style={{width: '20%', height: 'auto', marginTop: 0, marginBottom: 0, paddingTop: '0.9rem', paddingBottom: '0.9rem'}}>
                                <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <input style={{width: '70%'}} type="text" name="name" placeholder="Enter the amount..." className="accountmenu__report__input" value={taxValue} onChange={(event) => setTaxValue(event.target.value)} />
                                    <div style={{display: 'flex'}}>
                                        <span className="govmenu__propertygov__info__balance" style={{fontSize: '0.8rem', marginRight: '10%'}}>
                                            {`MAX`}
                                        </span>
                                        <span className="chevron chevron-top" style={{marginRight: 0}}></span>
                                    </div>
                                </label>
                            </div>
                            <span className="govmenu__propertygov__info__balance" style={{marginLeft: '3%', marginRight: '3%'}}>
                                {`Pay`}
                            </span>
                            <div className="govmenu__propertygov__payment__btns" style={{minWidth: '60%'}}>
                                <div style={{width: '100%'}}>
                                    <BigButton
                                        text="Cash"
                                        children={<MdCash fontSize="20px" color="white" />}
                                        type={0}
                                        onPress={() => console.log('Successfully paid for the tax cash per sum ' + taxValue)}
                                    />
                                </div>
                                <div style={{width: '100%', marginLeft: '4%'}}>
                                    <BigButton
                                        nowrap={true}
                                        text="By banking card"
                                        children={<MdCard fontSize="20px" color="white" />}
                                        type={0}
                                        onPress={() => console.log('Successfully paid tax by bank card for the amount ' + taxValue)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="govmenu__propertygov__propertycar">
                            <div className="govmenu__propertygov__propertycar__card" style={{border: 0}}>
                                <div className="accountmenu__content__cards__car__props">
                                    <div className="accountmenu__content__cards__car__props__item">
                                        <span className="accountmenu__content__cards__car__props__tdata">Number</span>
                                        <span className="accountmenu__content__cards__car__props__bdata">{vin}</span>
                                    </div>
                                    <div className="accountmenu__content__cards__car__props__item">
                                        <span className="accountmenu__content__cards__car__props__tdata">Class</span>
                                        <span className="accountmenu__content__cards__car__props__bdata">{type}</span>
                                    </div>
                                    <div className="accountmenu__content__cards__car__props__item">
                                        <span className="accountmenu__content__cards__car__props__tdata">Fuel</span>
                                        <span className="accountmenu__content__cards__car__props__bdata">{fuel}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accountmenu__cards__btnreports" style={{paddingTop: 0, paddingBottom: 0}}>
                                <div style={{width: '45%'}}>
                                    <BigButton text="Sell to car dealership" type={2} onPress={() => setAlert(true, {
                                        type: 1,
                                        title: 'Sale to a car dealership',
                                        text: `You really want to sell transport ${name} (${vin}) car dealership for $ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}?`,
                                        value: [{text: 'Refuse', type: 0}, {text: 'Sell', type: 1}]
                                    })}
                                    />
                                </div>
                                <div style={{width: '45%'}}>
                                    <BigButton text="Sell to player" type={0} onPress={() => setAlert(true, {
                                        type: 0, 
                                        title: 'Sale to player', 
                                        text: `You really want to sell the transport ${name} (${vin})?`,
                                        value: [{text: 'Refuse', type: 0}, {text: 'Sell', type: 1}]
                                    })} 
                                    />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    )
}

export default PropertyCar
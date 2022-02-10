import React from 'react'
import '../css/propcard.css'
//import CarCard from '../../accountmenu/uikit/CarCard'
import { useState } from 'react'
import BigButton from '../../accountmenu/uikit/BigButton'
//import Button from '../../accountmenu/uikit/Button'
import  { MdCard }from 'react-ionicons'
import  { MdCash }from 'react-ionicons'
//import Alert from '../../alert/Alert'

const PropertyHouse = (props) => {
    // <img className="govmenu__licensegov__propertycar__img" src={`https://gta-5.ru/server/client/images/cars/${props.name}_1.jpg`} />

    const { address, setAlert, gprice, tax, balance, maxbalance, garageTypes, roommatefree, garageCount, roommatemax, roommates } = props
    
    //const html = garageTypes.forEach((item) => `${item}<br>`)

    const [ taxValue, setTaxValue ] = useState('')

    return (
        <React.Fragment>
            <div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('https://www.gtabase.com/images/gta-5/properties/story-mode/full/franklin-house.jpg')`}} />
            <div className="govmenu__propertygov__container">
                <div className="govmenu__propertygov__info">
                    <div className="govmenu__propertygov__info__wrapper">
                        <span className="govmenu__propertygov__info__name">
                            {address}
                        </span>
                        <div className="accountmenu__content__cards__house__hprice__sell" style={{marginTop: 0, paddingTop: '1%', paddingBottom: '2%'}}>
                                <div className="accountmenu__content__cards__house__hprice__sell__linebtn">
                                    <img src={'https://gta-5.ru/server/client/images/mmenu/all/icons/money-bag.svg'} alt="" className="accountmenu__content__cards__house__hprice__sell__icon" />
                                    <span className="accountmenu__content__cards__house__hprice__sell__text">{`$ ${gprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
                                </div>
                        </div>
                        <span className="govmenu__propertygov__info__balance">
                            {`Current debt: `}
                            <span className="govmenu__propertygov__info__balance__info">
                                {`$ ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
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
                </div>
                <div className="govmenu__propertygov__payment" style={{justifyContent: 'space-between'}}>
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
                                onPress={() => console.log('Successfully paid for the tax by banking card for the amount ' + taxValue)}
                            />
                        </div>
                    </div>
                </div>
                <div className="govmenu__propertygov__propertycar">
                            <div className="govmenu__propertygov__info__balance__container">
                                <span className="govmenu__propertygov__info__balance">
                                    {`Garage: `}
                                    <span className="govmenu__property__roommates__list__item">
                                        {garageCount === 0 ? 
                                        (`Missing`)
                                        : (
                                            garageTypes.map((item, index) =>  index === garageTypes.length-1 ? `${item}` : `${item} | `)
                                        )}
                                    </span>
                                </span>
                                <span className="govmenu__propertygov__info__balance">
                                    {`Available places: `}
                                    <span className="govmenu__property__roommates__list__item">
                                        {`${roommatefree} / ${roommatemax}`}
                                    </span>
                                </span>
                            </div>
                            <div className="govmenu__property__roommatesheader__container">
                                <div className="accountmenu__content__reports__dialog__input" style={{width: '35%', height: 'auto', marginTop: 0, marginBottom: 0, paddingTop: '0.9rem', paddingBottom: '0.9rem'}}>
                                    <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <input style={{width: '70%'}} type="text" name="name" placeholder="Enter the nickname..." className="accountmenu__report__input" value={taxValue} onChange={(event) => setTaxValue(event.target.value)} />
                                    </label>
                                </div>
                                <BigButton text="Settle a player for $ 25.000" type={0} />
                            </div>
                            <div className="govmenu__property__roommates__container">
                                <div className="govmenu__property__roommates__list">
                                {roommates.map((item, index) => {
                                    return (
                                        <div className="govmenu__property__roommates__list__container">
                                            <li className="govmenu__property__roommates__list__item">
                                                {`${index+1}. ${item.name}`}
                                            </li>
                                            <div style={{width: '40%'}}>
                                                <BigButton text="Evict a player for $ 5.000" type={1} />
                                            </div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="accountmenu__cards__btnreports">
                                <div style={{width: '45%'}}>
                                    <BigButton text="Sell to agency" type={2} onPress={() => setAlert(true, {
                                        type: 1,
                                        title: 'Selling to agency',
                                        text: `Do you really want to sell?`,
                                        value: [{text: 'Refuse', type: 0}, {text: 'Sell', type: 1}]
                                    })}
                                    />
                                </div>
                                <div style={{width: '45%'}}>
                                    <BigButton text="Sell player" type={0} onPress={() => setAlert(true, {
                                        type: 0, 
                                        title: 'Sale to player', 
                                        text: `You really want to sell transport ${address}?`,
                                        value: [{text: 'Refuse', type: 0}, {text: 'Sell', type: 1}]
                                    })} 
                                    />
                                </div>
                                </div>
                        </div>
                </div>
        </React.Fragment>
    )
}

export default PropertyHouse
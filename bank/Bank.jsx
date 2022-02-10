import React from 'react';

import "./css/bank.css"
import WithdrawIcon from './img/withdraw.svg'
import CardItem from './components/CardItem'
import HistoryAction from './components/HistoryAction'

class Bank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            code: true,
            isShowModalBlocked: false,
            page: 'main',
            totalBalance: 100010000,
            isShowModal: false,
            selectedCard: 0,
            bankInfo: {
                name: 'Pacific'
            },
            selectedAction: -1,
            pageInfo: {
                'main': {
                    text: 'Добро пожаловать в банк ',
                    subtitle: 'Совершайте переводы и оплачивайте услуги!'
                },
                'create-card': {
                    text: 'Получение карты',
                    subtitle: 'Выбирайте карту на свой вкус'
                }
            },
            codeInput: '',
            keyboard: [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9']
            ],
            history: [
                [{
                    type: 0,
                    money: 100000
                },
                {
                    type: 1,
                    money: 100000
                },
                {
                    type: 0,
                    money: 100000
                },
                {
                    type: 1,
                    money: 100000
                },
                {
                    type: 2,
                    money: 100000,
                    to: '328372878'
                },
                {
                    type: 1,
                    money: 100000
                }],
                [{
                    type: 0,
                    money: 100000
                },
                {
                    type: 1,
                    money: 100000
                },
                {
                    type: 0,
                    money: 100000
                },
                {
                    type: 1,
                    money: 100000
                },
                {
                    type: 2,
                    money: 100000,
                    to: '328372878'
                }],
                []
            ],
            actionsList: [
                {
                    icon: WithdrawIcon,
                    text: 'Снять средства',
                    type: 0
                },
                {
                    icon: WithdrawIcon,
                    text: 'Положить средства',
                    type: 0
                },
                {
                    icon: WithdrawIcon,
                    text: 'Выполнить перевод',
                    type: 0
                },
                {
                    icon: WithdrawIcon,
                    text: 'Сменить пин-код',
                    type: 1
                },
                {
                    icon: WithdrawIcon,
                    text: 'Заблокировать карту',
                    type: 2
                }
            ],
            cards: [
                {
                    /*name: 'Emerald Card',
                    number: '9941 5719 3289 7189',
                    money: '100000'*/
                },
                {
                    /*name: 'Platinum Card',
                    number: '2389 1919 3278 1679',
                    money: '111222333'*/
                },
                {
                    /*name: 'Gold Card',
                    number: '1237 1890 1167 9302',
                    money: '1234'*/
                }
            ]
        }
    }

    blockCard = () => {
        console.log('card blocked')
        this.setState({ isShowModalBlocked: false })
    }

    addNumberToCode = (value) => {
        if (this.state.codeInput.length === 3) {
            this.checkCode()
        } else if (this.state.codeInput.length < 4) {
            this.setState((state) => {
                return {
                    codeInput: state.codeInput + value
                }
            })
        }
    }

    checkCode = () => {
        console.log('code checked')
        this.setState({
            codeInput: '',
            code: false
        })
    }

    blockCard = () => {
        console.log('card ' + this.state.selectedCard + ' blocked')
    }

    getSelectedActionBackground = (type) => {
        let className = ''
        switch (type) {
            case 0:
                className = 'bank__menu__actions__item_active_green'
                break;
            case 1:
                className = 'bank__menu__actions__item_active_yellow'
                break;
            case 2:
                className = 'bank__menu__actions__item_active_red'
                break;
            default:
                break;
        }
        return className
    }


    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="bank__container">
                {this.state.isShowModal && (
                    <div className="bank__modal">
                        <div className="bank__modal__container">
                            <span className="bank__modal__exit" onClick={() => this.setState({ isShowModal: false })}>Close</span>
                            <div className="bank__modal__content">
                                <span className="bank__modal__content__title">Congratulations!</span>
                                <span className="bank__modal__content__text">You issued a card of our bank, we wish you a pleasant shopping and long-term cooperation!</span>
                                <div className="bank__modal__content__cimg" />
                            </div>
                        </div>
                    </div>
                )}
                {this.state.isShowModalBlocked && (
                    <div className="bank__modal">
                        <div className="bank__modal__container">
                            <span className="bank__modal__exit" onClick={() => this.setState({ isShowModalBlocked: false })}>Close</span>
                            <div className="bank__modal__content">
                                <span className="bank__modal__content__title">Warning!</span>
                                <span className="bank__modal__content__text">The card blocking process is irreversible, funds on your card will go to another card, otherwise you will receive them in cash!</span>
                                <div className="bank__modal__content__bimg" />
                                <span className="bank__modal__block" onClick={() => this.blockCard()}>Block the card</span>
                            </div>
                        </div>
                    </div>
                )}
                {this.state.code && (
                    <div className="bank__code">
                        <div className={`bank__code__bg ${this.state.bankInfo.name.split(' ')[0]}__code__bg`} />
                        <span className="bank__code__title">
                        Enter a 4-digit pin code
                        </span>
                        <div className="bank__code__input">
                            <span className="bank__code__input__text">{this.state.codeInput}</span>
                        </div>
                        <div className="bank__code__keyboard">
                            {this.state.keyboard.map((item, index) => {
                                return (
                                    <div key={`bank__code__keyboard__row-${index}`} className="bank__code__keyboard__row">
                                        {item.map((el, inx) => (
                                            <span key={`bank__code__keyboard__row-${index}-${inx}`} className={"bank__code__keyboard__item"} onClick={() => this.addNumberToCode(el)}>
                                                {el}
                                            </span>
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
                {!this.state.code && (
                    <div className="bank__menu">
                        <div className={`bank__menu__logo ${this.state.bankInfo.name.split(' ')[0]}__logo`} />
                        <div className="bank__menu__title">
                            <span className="bank__menu__title__text">{`${this.state.pageInfo[this.state.page].text} ${this.state.bankInfo.name}`}</span>
                            <span className="bank__menu__title__subtext">{this.state.pageInfo[this.state.page].subtitle}</span>
                        </div>
                        {this.state.page === 'main' && (
                            <React.Fragment>
                                <div className="bank__menu__left">
                                    <div className="bank__menu__actions">
                                        {this.state.actionsList.map((item, index) => (
                                            <div className={this.state.cards ? (this.state.selectedAction === index ? this.getSelectedActionBackground(item.type) : "bank__menu__actions__item") : "bank__menu__actions__item_disabled"} key={`bank__menu__actions__item-${index}`} onClick={() => this.state.cards ? this.setState({ selectedAction: index }) : null}>
                                                <img src={item.icon} alt="" className="bank__menu__actions__item__icon" />
                                                <span className="bank__menu__actions__item__text">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bank__menu__exit__container">
                                        <span className="bank__menu__exit">
                                        Get out of the bank
                                        </span>
                                    </div>
                                </div>
                                <div className="bank__menu__center">
                                {(() => {
                                    if (this.state.selectedAction === -1 && this.state.cards[0].name) {
                                        return (
                                            <div className="bank__menu__history">
                                                <span className="bank__menu__history__text">Operations history</span>
                                                <div className="bank__menu__history__list">
                                                    {this.state.history[this.state.selectedCard].map((item, index) => (
                                                        <HistoryAction 
                                                            data={item}
                                                            key={`bank__menu__history__list__item-${index}`}
                                                        />
                                                    ))}
                                                    {this.state.history[this.state.selectedCard].length === 0 && (
                                                        <span className="bank__menu__history__empty">Operations have not yet been.</span>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        switch (this.state.selectedAction) {
                                            case 0:
                                                return (
                                                    <div className="bank__menu__withdraw">
                                                        <span className="bank__menu__withdraw__text">{`Issuance of funds`}</span>
                                                        <div className="bank__menu__withdraw__content">
                                                            <label>
                                                                <input
                                                                    className="bank__menu__withdraw__input"
                                                                    placeholder="Enter the amount"    
                                                                />
                                                            </label>
                                                            <span className="bank__menu__withdraw__btn">{`Issue`}</span>
                                                        </div>
                                                        <div className="bank__menu__withdraw__img" />
                                                    </div>  
                                                ) 
                                            case 1:
                                                return (
                                                    <div className="bank__menu__withdraw">
                                                        <span className="bank__menu__withdraw__text">{`Replenishment of the card balance`}</span>
                                                        <div className="bank__menu__withdraw__content">
                                                            <label>
                                                                <input
                                                                    className="bank__menu__withdraw__input"
                                                                    placeholder="Enter the amount"    
                                                                />
                                                            </label>
                                                            <span className="bank__menu__withdraw__btn">{`Replenish`}</span>
                                                        </div>
                                                        <div className="bank__menu__withdraw__img" />
                                                    </div>
                                                )
                                            case 2:
                                                return (
                                                    <div className="bank__menu__transfer">
                                                        <span className="bank__menu__transfer__text">{`Transfer`}</span>
                                                        <div className="bank__menu__transfer__content">
                                                            <label className="bank__menu__transfer__label">
                                                                <input
                                                                    className="bank__menu__transfer__input"
                                                                    placeholder="Enter the card number"    
                                                                />
                                                            </label>
                                                            <label className="bank__menu__transfer__label">
                                                                <input
                                                                    className="bank__menu__transfer__input"
                                                                    placeholder="Enter the sum of the transfer"    
                                                                />
                                                            </label>
                                                            <span className="bank__menu__transfer__btn">{`Execute transfer`}</span>
                                                        </div>
                                                        <div className="bank__menu__transfer__img" />
                                                    </div>
                                                )
                                            case 3:
                                                return (
                                                    <div className="bank__menu__pincode">
                                                        <span className="bank__menu__transfer__text">{`Change of the pin-code`}</span>
                                                        <div className="bank__menu__pincode__content">
                                                            <label className="bank__menu__pincode__label">
                                                                <input
                                                                    className="bank__menu__pincode__input"
                                                                    placeholder="Enter the old pin-code"    
                                                                />
                                                            </label>
                                                            <label className="bank__menu__pincode__label">
                                                                <input
                                                                    className="bank__menu__pincode__input"
                                                                    placeholder="Enter the new pin-code"    
                                                                />
                                                            </label>
                                                            <span className="bank__menu__pincode__btn">{`Apply`}</span>
                                                        </div>
                                                    </div>
                                                )
                                            case 4:
                                                return (
                                                    <span className="bank__menu__blockcard" onClick={() => this.setState({ isShowModalBlocked: true })}>
                                                        {`Block the card`}
                                                    </span>
                                                )
                                            case -1:
                                                return (
                                                    <span className="bank__menu__getcard" onClick={() => this.setState({page: 'create-card'})}>
                                                        {`Get a card`}
                                                    </span>
                                                )
                                            default:
                                                break;
                                        }
                                    }
                                })()}
                                {this.state.selectedAction !== -1 && (
                                <div className="bank__menu__back__container">
                                    <span className="bank__menu__back" onClick={() => this.setState({ selectedAction: -1 })}>
                                    Get to back
                                    </span>
                                </div>
                                )}
                                </div>
                                <div className="bank__menu__right">
                                    <div className="bank__menu__cards">
                                        <span className={this.state.cards.length ? "bank__menu__cards__text" : "bank__menu__cards__text_disabled"}>{this.state.cards ? `Your cards` : `Cards are absent`}</span>
                                        <div className="bank__menu__cards__list">
                                            {this.state.cards.map((item, index) => {
                                                return (item.name ?
                                                    <CardItem
                                                        key={`bank__menu__cards__list__item-${index}`}
                                                        card={item}
                                                        index={index}
                                                        bankName={this.state.bankInfo.name}
                                                        setSelected={() => this.setState({ selectedCard: index })}
                                                        selectedCard={this.state.selectedCard}
                                                    /> :
                                                    <div className="bank__menu__cards__list__item">
                                                        <div className="bank__menu__cards__list__circle" />
                                                    </div>
                                                )}
                                            )}
                                            {this.state.cards.length === 0 && (
                                                <React.Fragment>
                                                    <div className="bank__menu__cards__list__item">
                                                        <div className="bank__menu__cards__list__circle" />
                                                    </div>
                                                    <div className="bank__menu__cards__list__item">
                                                        <div className="bank__menu__cards__list__circle" />
                                                    </div>
                                                    <div className="bank__menu__cards__list__item">
                                                        <div className="bank__menu__cards__list__circle" />
                                                    </div>
                                                </React.Fragment>
                                            )}
                                        </div>
                                        {this.state.cards && (
                                            <span className="bank__menu__cards__balance">{`General balance of card: ${this.state.totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $`}</span>
                                        )}
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        {this.state.page === 'create-card' && (
                            <React.Fragment>
                                <div className="bank__cards__list">
                                    <div className="bank__cards__list__row">
                                        <div className="bank__cards__list__item">
                                            <div className="bank__cards__list__header">
                                                <span className="bank__cards__list__header__text">
                                                    {this.state.bankInfo.name}
                                                    <br></br>
                                                    Classic
                                                </span>
                                            </div>
                                            <div className="bank__cards__list__content">
                                                <span className="bank__cards__list__content__title">
                                                    Description
                                                </span>
                                                <span className="bank__cards__list__content__text">
                                                    Classic card, which will allow you to pay for various purchases, receive salary and dispose of finance
                                                </span>
                                                <span className="bank__cards__list__content__btn" onClick={() => this.setState({ isShowModal: true })}>
                                                    Receive
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bank__cards__btns">
                                        <span className="bank__cards__btn" onClick={() => this.setState({ page: 'main' })}>
                                        Get to back
                                        </span>
                                        <span className="bank__cards__btn" onClick={() => this.setState({ show: false })}>
                                        Get out of the bank
                                        </span>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Bank;

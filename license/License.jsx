import React from 'react';

import "./css/license.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"

const { EventManager: em } = window;

class License extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            player_info: {
                name: 'Olejka',
                surname: 'Pelmeshka',
                sex: 'Male',
                license: 'Weapon license',
                date_start: '01.01.2019',
                date_stop: '01.01.2020',
                birthday: '21.01.01',
                prefix: 'G',
                img: '',//https://a.rsg.sc//n/lendstoun
                sign: 'testerov',
                number: 'WN273716783'
            },
            photo: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'License.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        em.addHandler('license', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({player_info: value.info})
                this.setState({show: value.isShow})
                this.checkSexandImg();
            } else return;
        })

        this.checkSexandImg();
    }

    componentWillUnmount() {
        em.removeHandler('license');
    }

    checkSexandImg() {

        if (this.state.player_info.img === '') {
            if (this.state.player_info.sex === 'Male') {
                this.setState({photo: img_man});
            } else {
                this.setState({photo: img_woman});
            }
        } else {
            this.setState({photo: this.state.player_info.img})
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="license-main">
                    <div className="lic-box">
                        <div className="lic-in-box">
                            <div className="lic-right">
                                <div className="lic-photo_player">
                                    <img src={this.state.photo} className="lic-img" alt=""/>
                                </div>
                                <div className="lic-info">
                                    <div className="lic-row">
                                        <div className="pl-clm-inf-n name-styl-id name-pff">
                                            <span className="pl-lic-grow tsp-topname">??????</span>
                                            <span className="pl-lic-black">{this.state.player_info.name}</span>
                                        </div>
                                        <div className="pl-clm-inf-n name-styl-id name-pff">
                                            <span className="pl-lic-grow tsp-topname">??????????????</span>
                                            <span className="pl-lic-black">{this.state.player_info.surname}</span>
                                        </div>
                                    </div>
                                    <div className="lic-clmn-center">
                                        <div className="pl-clm-inf-n name-styl-id name-pff">
                                            <span className="pl-lic-grow tsp-topname">??????</span>
                                            <span className="pl-lic-black">{this.state.player_info.sex}</span>
                                        </div>
                                        <div className="pl-clm-inf-n name-styl-id name-pff">
                                            <span className="pl-lic-grow tsp-topname">???????? ????????????????</span>
                                            <span className="pl-lic-black">{this.state.player_info.birthday}</span>
                                        </div>
                                    </div>
                                    <div className="lic-grow tsp-lic tsp-fff">?????? ????????????????</div>
                                    <div className="tsp-lic tsp-lic-name">{this.state.player_info.license}</div>
                                    <div className="lic-first-inf">
                                        <div className="tpc-right-ff tpc-right-ff-date">
                                            <div className="lic-grow lic-grow-date">???????? ????????????</div>
                                            <div className="lic-grow-date-value">{this.state.player_info.date_start}</div>
                                        </div>
                                        <div className="tpc-right-ff-date">
                                            <div className="lic-grow lic-grow-date">???????? ??????????????????</div>
                                            <div className="lic-grow-date-value">{this.state.player_info.date_stop}</div>
                                        </div>
                                    </div>
                                    <div className="license__sign">
                                        <span className="license__sign__text">???????????? ??????????????</span>
                                        <span className="license__sign__value">{this.state.player_info.sign}</span>
                                    </div>
                                    <div className="license__docs">
                                        <span className="license__docs__text">?????????? ??????????????????</span>
                                        <span className="license__docs__value">{this.state.player_info.number}</span>
                                    </div>
                                </div>
                                <div className="big-letter">{this.state.player_info.prefix}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default License;

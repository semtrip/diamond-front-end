
import React from 'react';
import './css/radialmenu.css';
import audioClick from './audio/mouse-click.mp3';
import openMenu from './audio/open-menu.mp3';
import hideMenu from './audio/hide-menu.mp3';
import backImg from './img/back.svg';

const { EventManager: em } = window;

let storage = {
    btns: 
    [
        {id: 'giveMoney', title: 'Give money'},
        {id: 'dating',title: 'Become acquainted'},
        {id: 'unTieById',title: 'Remove plastic screeds'},
        {id: 'inCarById',title: 'To drag into the nearest car'},
        {id: 'taskFollowById',title: 'Lead with him'},
        {id: 'taskRemoveMaskById',title: 'Remove the mask from the player'},
        {id: 'showPlayerDoсMenu',title: 'Documentation', items: [
            {id: 'card_id', title: 'The passport'},
            {id: 'work_lic', title: 'Permission to work'},
            {id: 'showLic',title: 'Licenses', items: [
                {id: 'a_lic', title: 'License category `А`'},
                {id: 'b_lic', title: 'License category `B`'},
                {id: 'c_lic', title: 'License category `C`'},
                {id: 'air_lic', title: 'License for air transport'},
                {id: 'ship_lic', title: 'License for water transport'},
                {id: 'gun_lic', title: 'Weapon license'},
                {id: 'taxi_lic', title: 'License to carriage of passengers'},
                {id: 'law_lic', title: 'Lawyer\'s license'},
                {id: 'biz_lic', title: 'Business license'},
                {id: 'fish_lic', title: 'Fishing permit'},
                {id: 'marg_lic', title: 'Permission to use marijuana'},]
            },
            {id: 'med_lic', title: 'Medical insurance'},
        ]},
        {id: 'gos_lic',title: 'Certificate'},
        {id: 'cuffItemById',title: 'Put handcuffs'},
        {id: 'unCuffById',title: 'Remove handcuffs'},
        {id: 'getInvById',title: 'Seize confiscate'},
        {id: 'getInvById2',title: 'Frisk'},
        {id: 'getPassById',title: 'Set identity'}
    ]
}

const audio = new Audio(audioClick)
const openAudio = new Audio(openMenu)
const hideAudio = new Audio(hideMenu)

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            playerName: 'Oleg Arbuzyan',
            playerId: 'A4',
            blockBtns:this.completion(storage.btns),
            backBtn: false,
            currentPage: 1,
            currentElement: null,
            oldCurrentElemetn: [],
            oldPaginatorData: this.paginator(storage.btns),
        };
    }
    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'PrefenceSelector.jsx', error, errorInfo); // eslint-disable-line
    }
    componentDidMount() {
        em.addHandler('radial', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                hideAudio.play()
                this.setState({show: false})
            } else if (value.type === 'updateData') {
                storage.btns = value.choiceData
                this.setState({
                    playerName: value.playerName,
                    playerId: value.playerId, 
                    blockBtns: this.completion(value.choiceData), 
                    backBtn: false,
                    currentPage: 1,
                    currentElement: null,
                    oldCurrentElemetn: [],
                    oldPaginatorData: this.paginator(storage.btns)
                })
            } else return;
        })
    }
    componentWillUnmount() {
        em.removeHandler('radial');
    }
    paginator = (data) => {
        if (data.length > 8) {
            let newData = data.slice(8, data.length)
            data = data.slice(0,7)
            let newItem = {id: 'run',title: 'Ещё', items: newData}
            data.push(newItem)
            this.setState({oldPaginatorData: data})
        } return data
    }
    menuClick = e => {
        console.log(this.state.currentElement)
        e.preventDefault();
        audio.play()
        if (this.state.currentPage === 1) {
            if (e.target.dataset.name === 'run') {
                let data = this.state.oldPaginatorData[7].items
                let arr = this.state.oldCurrentElemetn
                arr[0] = this.paginator(storage.btns)
                this.setState({
                    blockBtns: this.completion(data) , 
                    backBtn: true,
                    currentPage: this.state.currentPage + 1,
                    currentElement: data,
                    oldCurrentElemetn: arr});

            } else if(storage.btns[e.target.id].items !== undefined) {
                let data = storage.btns[e.target.id].items
                data = this.paginator(data)
                let arr = this.state.oldCurrentElemetn
                arr[0] = storage.btns
                this.setState({ 
                    blockBtns: this.completion(data) , 
                    backBtn: true,
                    currentPage: this.state.currentPage + 1, 
                    currentElement: data,
                    oldCurrentElemetn: arr});
            } else {
                try {
                    mp.trigger('client:radialMenu:item', // eslint-disable-line
                     e.target.dataset.name); 
                }
                catch (f) {
                    console.log(f)
                    console.log('Pressed key ' + storage.btns[e.target.id].title + ' id buttons:' + e.target.dataset.name);
                }
            }
        }
        if (this.state.currentPage > 1) {
            if (e.target.dataset.name === 'run') {
                let data = this.state.oldPaginatorData[7].items
                let arr = this.state.oldCurrentElemetn
                arr[this.state.currentPage - 1] = this.state.oldPaginatorData

                this.setState({
                    blockBtns: this.completion(data) , 
                    backBtn: true,
                    currentPage: this.state.currentPage + 1,
                    oldCurrentElemetn: arr
                });
            } else if(this.state.currentElement[e.target.id].items !== undefined) {
                        let data = this.state.currentElement[e.target.id].items
                        data = this.paginator(data)
                        let arr = this.state.oldCurrentElemetn
                        arr[this.state.currentPage - 1] = this.state.currentElement
                        this.setState({ 
                            blockBtns: this.completion(data) , 
                            backBtn: true,
                            currentPage: this.state.currentPage + 1, 
                            currentElement: data,
                            oldCurrentElemetn: arr});
                    } else {
                        try {
                            mp.trigger('client:radialMenu:item', // eslint-disable-line
                            e.target.dataset.name); 
                        }
                        catch (f) {
                            console.log(f)
                            console.log('Pressed key ' + this.state.currentElement[e.target.id].title + ' id buttons:' + e.target.dataset.name);
                        }
                    }
                }
    }
    show = () => {
        this.setState({show: true})
    }
    hide = e => {
        hideAudio.play()
        //========= Анимации===========
        // let elems = document.querySelectorAll('.menu-item')
        // elems.forEach.call(elems, function(el) {
        //     el.classList.add("no-active-item");
        // });
        // document.querySelector('.circle').classList.add("no-active");
        // document.querySelector('.close').classList.add("no-active");
        this.setState({show: false})
        try {
            mp.trigger('client:radialMenu:close'); // eslint-disable-line
        }
        catch (e) {} 
    }
    goBack = e => {
        audio.play()
        if (this.state.currentPage === 2) {
            this.setState({ 
                blockBtns: this.completion(this.state.oldCurrentElemetn[this.state.currentPage - 2]), 
                backBtn: false,
                currentPage: this.state.currentPage - 1});
            console.log('Pressed key c back');
        }
        if (this.state.currentPage > 2) {
                this.setState({ 
                    blockBtns: this.completion(this.state.oldCurrentElemetn[this.state.currentPage - 2]), 
                    backBtn: true,
                    currentPage: this.state.currentPage - 1});
                console.log('Pressed key c back');
         }

    }
    completion(data) {
            data = this.paginator(data)
            return data.map((item, i) => (<div key={item.id} className={'menu-item item-' + i} id={i} data-name={item.id} onClick={this.menuClick}><img src={`https://gta-5.ru/server/client/images/icons/radial/${item.icon}.png`} alt="" />{item.title}</div>));
    }

    animation() {
        return (
            setTimeout(() => {
                openAudio.play()
                let elems = document.querySelectorAll('.menu-item')
                elems.forEach.call(elems, function(el) {
                    el.classList.remove("no-active-item");
                });
                document.querySelector('.circle').classList.remove("no-active");
                document.querySelector('.close').classList.remove("no-active");
                return null
            },200)
        )
    }

    render() {
        if (this.state.show) {
                return (
                    <div className="radialmenu__container">
                        <React.Fragment>
                            <div className="menu-block">
                                <div className="circle" >
                                    Взаимодействие <br /> с
                                    <span>{this.state.playerName}</span>
                                    <span>#{this.state.playerId}</span>
                                </div>
                                <div className="btns">
                                    {this.state.blockBtns}
                                </div>
                                {(() => {
                                        if(this.state.backBtn){
                                            return <div id='back' onClick={this.goBack}><img src={backImg} alt=""/><span>Назад</span></div>
                                        }
                                })()}
                                <div className="close" id='close' onClick={this.hide}></div>
                            </div>
                        </React.Fragment>
                        {/* <div className="no-active"><this.animation/></div> */}
                    </div>
                )
        } else {
            return null
        }
    }
}
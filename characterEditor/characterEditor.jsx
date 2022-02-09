import { observer } from "mobx-react-lite";
import React, {useState} from "react";

import './css/main.scss'

import store from "./store.characterEditor";

import CharacterInfo from "./components/characterInfo";
import Parents from "./components/parents";
import Face from "./components/face";
import Make from "./components/make";
import Clothes from "./components/clothes";
import Haris from "./components/haris";


const CharacterEditor = observer(()=>{
    const [path, setPath] = useState('parents');
    const state = store.state
    return (
        <div className="editorBox">
            <CharacterInfo/>
            <div className="editor">
            {   
            path === 'parents' ? <Parents/> 
            :
            path === 'face' ? <Face/>
            :
            path === 'make' ? <Make/>
            :
            path === 'clothes' ? <Clothes/>
            :
            path === 'haris' ? <Haris/>
            :null
            }
                <div className="nav">
                    <div className= {path === 'parents' ? 'link parents active': 'link parents'} onClick={()=>{setPath('parents')}}/>
                    <div className= {path === 'face' ? 'link face active': 'link face'} onClick={()=>{setPath('face')}}/>
                    <div className= {path === 'make' ? 'link make active': 'link make'} onClick={()=>{setPath('make')}}/>
                    <div className= {path === 'clothes' ? 'link clothes active': 'link clothes'} onClick={()=>{setPath('clothes')}}/>
                    <div className= {path === 'haris' ? 'link haris active': 'link haris'} onClick={()=>{setPath('haris')}}/>
                </div>
                <div className="btns">
                    <div className="btn random"/>
                    <div className="btn create"/>
                    <div className="btn exit"/>
                </div>
            </div>
        </div>
    )
})
export default CharacterEditor
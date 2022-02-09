import { observer } from "mobx-react-lite";
import React, {useState} from "react";

import '../css/module.scss'

const father = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,42,43,44]
const mother = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,45]

const fatherName = ['Benjamin','Daniel', 'Joshua', 'Noah', 'Andrew', 'Juan', 'Alex', 'Isaac', 'Evan', 'Ethan', 'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago','Kevin', 'Louis', 'Samuel', 'Anthony', 'Claude', 'Niko', 'John']
const motherName = ['Hannah','Audrey','Jasmine','Giselle','Amelia','Isabella','Zoe','Ava','Camila','Violet','Sophia','Evelyn','Nicole','Ashley','Grace','Brianna','Natalie','Olivia','Elizabeth','Charlotte','Emma','Misty']

const Parents = observer(()=>{
    const [fatherId, setFatherId] = useState(0);
    const [motherId, setMotherId] = useState(0);

    const setFather = (data) => {
        let id = 0
        switch (data) {
            case 'back':
                if (fatherId === 0) {
                    id = father.length - 1
                    setFatherId(id)
                } else {
                    id = fatherId - 1
                    setFatherId(id)
                }
                break;
            case 'next':
                if (fatherId === father.length - 1) {
                    id = 0
                    setFatherId(id)
                } else {
                    id = fatherId + 1
                    setFatherId(id)
                }
                break;
            default:
                break;
        }
    }
    const setMother = (data) => {
        let id = 0
        switch (data) {
            case 'back':
                if (motherId === 0) {
                    id = mother.length - 1
                    setMotherId(id)
                } else {
                    id = motherId - 1
                    setMotherId(id)
                }
                break;
            case 'next':
                if (motherId === mother.length - 1) {
                    id = 0
                    setMotherId(id)
                } else {
                    id = motherId + 1
                    setMotherId(id)
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="parents">
            <span className="title">Parents' choice</span>
            <div className="selection">
                <div className="father">
                    <img src={`img/create_character/parents/parent_${father[fatherId]}.png`} alt="" />
                    <div className="select">
                        <div className="back" onClick={()=>{setFather('back')}}/>
                        <span>{fatherName[fatherId]}</span>
                        <div className="next" onClick={()=>{setFather('next')}}/>
                    </div>
                </div>
                <div className="mother">
                <img src={`img/create_character/parents/parent_${mother[motherId]}.png`} alt="" />
                    <div className="select">
                        <div className="back" onClick={()=>{setMother('back')}}/>
                        <span>{motherName[motherId]}</span>
                        <div className="next" onClick={()=>{setMother('next')}}/>
                    </div>
                </div>
            </div>
            <div className="range">
                <div className="title">Similarity with parents</div>
                <input type="range" />
                <div className="text">
                    <span>Mother</span>
                    <span>Father</span>
                </div>
            </div>
            <div className="range">
                <div className="title">Skin color</div>
                <input type="range" />
                <div className="text">
                    <span>Darker</span>
                    <span>Lighter</span>
                </div>
            </div>
        </div>
    )
})

export default Parents
import { observer } from "mobx-react-lite";
import React, {useState} from "react";

import '../css/module.scss'


const colorHair = ['#1c1f21', '#272a2c', '#312e2c', '#35261c', '#4b321f', '#5c3b24', '#6d4c35', '#6b503b', '#765c45', '#7f684e', '#99815d', '#a79369', '#af9c70', '#bba063', '#d6b97b', '#dac38e', '#9f7f59', '#845039', '#682b1f', '#61120c', '#640f0a', '#7c140f', '#a02e19', '#b64b28', '#a2502f', '#aa4e2b', '#626262', '#808080', '#aaaaaa', '#c5c5c5', '#463955', '#5a3f6b', '#763c76', '#ed74e3', '#eb4b93', '#f299bc', '#04959e', '#025f86', '#023974', '#3fa16a', '#217c61', '#185c55', '#b6c034', '#70a90b', '#439d13', '#dcb857', '#e5b103', '#e69102', '#f28831', '#fb8057', '#e28b58', '#d1593c', '#ce3120', '#ad0903', '#880302', '#1f1814', '#291f19', '#2e221b', '#37291e', '#2e2218', '#231b15', '#020202', '#706c66', '#9d7a50']

const maxTypeEyebrows = 31

const Face = observer(()=>{
    const [path, setPath] = useState('nose');
    const [eyebrowsId, setEyebrowsId] = useState(0);

    const setEyebrows = (type) => {
        let id = 0
        switch (type) {
            case 'back':
                if (eyebrowsId === 0) {
                    id = maxTypeEyebrows
                    setEyebrowsId(id)
                } else {
                    id = eyebrowsId - 1
                    setEyebrowsId(id)
                }
                break;
            case 'next':
                if (eyebrowsId === maxTypeEyebrows) {
                    id = 0
                    setEyebrowsId(id)
                } else {
                    id = eyebrowsId + 1
                    setEyebrowsId(id)
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="face-box">
            <div className="nav-box">
                <div className={path === 'nose' ? 'link-box nose active' : 'link-box nose'} onClick={()=>{setPath('nose')}}><span>Nose</span></div>
                <div className={path === 'eyebrows' ? 'link-box eyebrows active' : 'link-box eyebrows'} onClick={()=>{setPath('eyebrows')}}><span>Eyebrows</span></div>
                <div className={path === 'eyes' ? 'link-box eyes active' : 'link-box eyes'}  onClick={()=>{setPath('eyes')}}><span>Eyes</span></div>
                <div className={path === 'lips' ? 'link-box lips active' : 'link-box lips'} onClick={()=>{setPath('lips')}}><span>Lips</span></div>
                <div className={path === 'chin' ? 'link-box chin active' : 'link-box chin'} onClick={()=>{setPath('chin')}}><span>The chin</span></div>
            </div>
            <div className="content">
            {
                path === 'nose' ? 
                <>
                    <div className="range">
                        <div className="title">Nose width</div>
                        <input type="range" />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose height</div>
                        <input type="range" />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose tip length</div>
                        <input type="range" />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose tip height</div>
                        <input type="range" />
                        <div className="text">
                            <span>Below</span>
                            <span>Higher</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose Bridge depth</div>
                        <input type="range" />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Broken nose</div>
                        <input type="range" />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                </>
                :
                path === 'eyebrows' ?
                <>
                    <div className="select-box">
                        <div className="title">Type of eyebrows</div>
                        <div className="select">
                            <div className="back" onClick={()=>{setEyebrows('back')}}/>
                            <span>Option {eyebrowsId}</span>
                            <div className="next" onClick={()=>{setEyebrows('next')}}/>
                        </div>
                    </div>
                    <div className="color-box">
                        <div className="title">Eyebrow color</div>
                        <div className="color">
                        {   
                            colorHair.map((item, i)=>(
                                <div className="item" style={{background: item, 'box-shadow': '0px 0px 3px' + item}} onClick={()=>{console.log('Eyebrow color selected', i, colorHair[i])}}/>
                            ))
                        }
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Eyebrow height</div>
                        <input type="range" />
                        <div className="text">
                            <span>Below</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Eyebrow depth</div>
                        <input type="range" />
                        <div className="text">
                            <span>Darker</span>
                            <span>Lighter</span>
                        </div>
                    </div>
                </>
                :
                path === 'eyes' ?
                <>
                    <div className="range">
                        <div className="title">Skin color</div>
                        <input type="range" />
                        <div className="text">
                            <span>Darker</span>
                            <span>Lighter</span>
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
                </>
                :
                path === 'lips' ?
                <>
                    <div className="range">
                        <div className="title">Skin color</div>
                        <input type="range" />
                        <div className="text">
                            <span>Darker</span>
                            <span>Lighter</span>
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
                </>
                :
                path === 'chin' ?
                <>
                    <div className="range">
                        <div className="title">Skin color</div>
                        <input type="range" />
                        <div className="text">
                            <span>Darker</span>
                            <span>Lighter</span>
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
                </>
                :null
            }
            </div>
        </div>
    )
})
export default Face
    
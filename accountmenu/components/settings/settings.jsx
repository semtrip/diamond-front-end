import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/settings.css'

import Main from "./pages/main";
import Interface from "./pages/interface"
import Voice from "./pages/voice";
import Chat from "./pages/chat";
import Button from "./pages/button";
import Map from "./pages/map";

import store from "../../store_AccountMenu";

const Settings = observer(()=>{
    const state = store.stateSettings
    return(
        <div className="setting">
            <div className="nav">
                <div className={state.page === 'main' ? 'navButton active': 'navButton'} id='b_main' onClick={store.setPageSettings}>Basic</div>
                <div className={state.page === 'interface' ? 'navButton active': 'navButton'} id='b_interface' onClick={store.setPageSettings}>Interface</div>
                <div className={state.page === 'voice' ? 'navButton active': 'navButton'} id='b_voice' onClick={store.setPageSettings}>Voice chat</div>
                <div className={state.page === 'chat' ? 'navButton active': 'navButton'} id='b_chat' onClick={store.setPageSettings}>Text Chat</div>
                <div className={state.page === 'button' ? 'navButton active': 'navButton'} id='b_button' onClick={store.setPageSettings}>Key assignment</div>
                <div className={state.page === 'map' ? 'navButton active': 'navButton'} id='b_map' onClick={store.setPageSettings}>Map</div>
            </div>
            <div className="content">
                {state.page === 'main' ? <Main />: null}
                {state.page === 'interface' ? <Interface />: null}
                {state.page === 'voice' ? <Voice />: null}
                {state.page === 'chat' ? <Chat />: null}
                {state.page === 'button' ? <Button />: null}
                {state.page === 'map' ? <Map />: null}
            </div>
        </div>
    )
})


export default Settings
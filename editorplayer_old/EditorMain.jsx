import React from 'react';
import './css/editorplayer.css'
import './css/editor-adaptive.css'
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import EditorPlayer from './EditorPlayer';
import ChoiceRole from './content/ChoiceRole';

const { EventManager: em } = window;

class EditorMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            path: '/editor/name-character'
        }
    }

    componentDidCatch(error, errorInfo) {
      mp.trigger('client:ui:debug', 'EditorMain.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('customization', value => { // Скрыть/Показать кастомку, переходы по страницам
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'choicerole') {
                this.setState({path: "/choicerole"})
            } else if (value.type === 'showFamilyPage') {
                this.setState({path: "/editor/family-character"})
            } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('customization');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div id="disableZoom" className="adaptive_editor">
                    {/* <img src={serverLogo} style={{zIndex: 2, position: 'absolute', marginTop: '2rem', marginLeft: '3.4rem', width: '6rem'}} /> */}
                    <div className="editor__hint">
                        <span className="editor__hint__title">{this.state.path === '/choicerole' ? '' : 'Используйте ЛКМ чтобы вращять камеру, а колёсико мыши для приближения'}</span>
                    </div>
                    <Router>
                        <Route path="/editor">
                            <EditorPlayer/>
                        </Route>
                        <Route path="/choicerole">
                            <ChoiceRole/>
                        </Route>
                        <Redirect to={this.state.path} push/>
                    </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default EditorMain;

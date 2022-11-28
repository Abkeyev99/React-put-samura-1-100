import {state, subscriber} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (state:StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}


reportWebVitals();

renderEntireTree(state);
subscriber(renderEntireTree);
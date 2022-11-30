import {state, subscriber} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}

renderEntireTree()
// renderEntireTree(state);
subscriber(renderEntireTree);
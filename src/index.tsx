import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderEntireTree = () => {

    root.render(
        <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
    );
}
store.subscriber(renderEntireTree);
renderEntireTree();
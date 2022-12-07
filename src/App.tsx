import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profaile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/state";



type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
    store:StoreType
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs  store={props.store}/>}/>
                <Route path='/profile' render={() =>
                    <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}/>}
                />
            </div>
        </div>
    );
}

    export default App;

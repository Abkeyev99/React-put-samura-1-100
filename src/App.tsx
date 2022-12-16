import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profaile/Profile";
import {Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";



 export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
     store:any

}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer  store={props.store}/>}/>
                <Route path='/profile' render={() =>
                    <Profile store={props.store}/>}
                />
            </div>
        </div>
    );
}

    export default App;

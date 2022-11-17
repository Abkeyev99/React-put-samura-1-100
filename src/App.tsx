import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profaile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
}



function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}/>}/>
                    </div>
                </div>
        </BrowserRouter>
    );
}
export default App;

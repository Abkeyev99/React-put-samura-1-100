import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profaile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: (PostMessage: string) => void
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() =>
                    <Profile state={props.state.profilePage}
                             addPost={props.addPost}/>}/>
            </div>
        </div>
    );
}

export default App;

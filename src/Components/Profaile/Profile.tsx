import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfaileInfo} from "../../ProfaileInfo/ProfaileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

 type ProfileType = {
     state: ProfilePageType
     dispatch: (action: ActionsTypes) => void
 }


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfaileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};


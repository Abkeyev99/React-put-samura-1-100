import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfaileInfo} from "../../ProfaileInfo/ProfaileInfo";
import {ProfilePageType, updateNewPostText} from "../../redux/state";

 type ProfileType = {
     state: ProfilePageType
     addPost: () => void
     updateNewPostText:(newText: string ) => void

 }


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfaileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};


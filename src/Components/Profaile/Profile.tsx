import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfaileInfo} from "../../ProfaileInfo/ProfaileInfo";
import { ProfilePageType} from "../../redux/state";

 type ProfileType = {
     state: ProfilePageType
     addPost: (PostMessage: string) => void
 }


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfaileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
            />
        </div>
    );
};


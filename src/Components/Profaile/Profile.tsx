import React from 'react';
import {ProfaileInfo} from "../../ProfaileInfo/ProfaileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";

 type ProfileType = {
     store:StoreType


 }


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfaileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
};


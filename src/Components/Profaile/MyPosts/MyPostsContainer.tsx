import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostType, StoreType} from "../../../redux/store";

type MyPostsPropsType = {
    store: StoreType


}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState();

    let addPost = ( ) => {
        props.store.dispatch(addPostAC());
    }
    let onPostChange = (newText: string) => {
        props.store.dispatch(changeNewTextAC(newText));
    }


    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}
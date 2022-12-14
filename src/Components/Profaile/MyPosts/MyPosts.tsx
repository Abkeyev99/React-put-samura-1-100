import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { addPostAC} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType} from "../../../redux/store";
import {Button} from "@mui/material";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}




export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p) =>
        <Post message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text } as const
            props.dispatch(action);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                        placeholder='Enter new posts'
                    />
                </div>
                <div>
                    <Button onClick={addPost} variant="contained" component="label" color="success">Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


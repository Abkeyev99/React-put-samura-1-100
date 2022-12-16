import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {Button} from "@mui/material";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost:() => void
    updateNewPostText:(newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p) =>
        <Post message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let OnAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text);
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
                    <Button onClick={OnAddPost} variant="contained" component="label" color="success">Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


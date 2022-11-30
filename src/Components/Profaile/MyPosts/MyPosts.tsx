import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, updateNewPostText} from "../../../redux/state";
import {text} from "stream/consumers";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p) =>
        <Post message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
                    />
                </div>
                <div>
                    <button onClick={addPost}>OK</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    id:number
    message: string
    likesCount: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>

    );
};


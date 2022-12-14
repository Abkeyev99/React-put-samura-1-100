import React from 'react';
import {ActionsTypes, ProfilePageType, StateType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Всем привет!!!', likesCount: 102},
        {id: 2, message: 'Работаем на React!!', likesCount: 120},
        {id: 3, message: 'Это моя социальная сеть!!', likesCount: 122},
    ],
    newPostText: "",
}


export const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
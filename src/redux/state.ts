
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type PostType = {
    id: number
    message: string
    likesCount: number


}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    // newPostTitle: string;
    // users: string
    posts: PostType[]
    newPostText: string

}

export type DialogsPageType = {
    // newMessageBody: string
    dialogs: DialogType[]
    message: MessageType[]
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action:ActionsTypes) => void
}



export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>



export const addPostAC = (newPostText:string) => {
    return {
        type:'ADD POST',
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}





let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Всем привет!!!', likesCount: 102},
                {id: 2, message: 'Работаем на React!!', likesCount: 120},
                {id: 3, message: 'Это моя социальная сеть!!', likesCount: 122},
            ],
            newPostText: 'it-camasutra.com',
        },
        dialogsPage: {
            dialogs: [

                {id: 1, name: 'Azamat'},
                {id: 2, name: 'Abzal'},
                {id: 3, name: 'Martinas'},
                {id: 4, name: 'Rustem'},
                {id: 5, name: 'Maks'},
                {id: 6, name: 'Ademi'},
            ],
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yooo'},
                {id: 4, message: 'Yoo'},
                {id: 5, message: 'Yo'},
            ],

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}
export default store;



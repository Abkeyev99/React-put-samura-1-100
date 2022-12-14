import {addPostAC, changeNewTextAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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
    posts: PostType[]
    newPostText: string

}

export type DialogsPageType = {
    // newMessageBody: string
    dialogs: DialogType[]
    message: MessageType[]
    newMessageBody: any
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Всем привет!!!', likesCount: 102},
                {id: 2, message: 'Работаем на React!!', likesCount: 120},
                {id: 3, message: 'Это моя социальная сеть!!', likesCount: 122},
            ],
            newPostText: "",
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
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yoo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: ""

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

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer( this._state.sidebar, action)

            this._callSubscriber();
        }
}
export default store;



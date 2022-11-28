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

}

export type DialogsPageType = {
    // newMessageBody: string
    dialogs: DialogType[]
    message: MessageType[]
}


type addPostType = {

}

// export type ActionType = {
//     body: string;
//     type: string;
// newTitle: string;
// }

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Всем привет!!!', likesCount: 102},
            {id: 2, message: 'Работаем на React!!', likesCount: 120},
            {id: 3, message: 'Это моя социальная сеть!!', likesCount: 122},
        ],
    },
    dialogsPage: {
        dialogs: [

            {id: 1, name: 'Azamat'},
            {id: 2, name: 'Abzal'},
            {id: 3, name: 'Martias'},
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
}

export let addPost = (PostMessage:string) => {
    const newPost: PostType = {
        id: 5,
        message: PostMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
}
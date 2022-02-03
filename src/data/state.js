// export const SEND_MESSAGE = "SEND_MESSAGE"
// export const ADD_POST = "ADD_POST"
// export function addPostAC(message, author) {
//     return {type: ADD_POST, postText: message, postAuthor: author}
// }
// //TODO: make sendMessageAC func
// let store = {
//     _state: {
//         posts: [
//             {message: "text", author: "Elon musk", id: 0},
//             {message: "1234", author: "Elan mask", id: 1},
//             {message: "abcd", author: "Eljn maks", id: 2},
//         ],
//         chats: [
//             {name: "Иван Иванов", text: "Привет", id: 0},
//             {name: "Илон Маск", text: "Го на Марс", id: 1},
//             {name: "Билл Гейтс", text: "Где мой чип?", id: 2}
//         ],
//         dialogs: {
//             0: [
//                 {name: "Иван Иванов", text: "Привет", id: 0},
//                 {name: "Илон Маск", text: "Го на Марс", id: 1},
//                 {name: "Иван Иванов", text: "Пошли, когда?", id: 2}
//             ],
//             1: [
//                 {name: "Арнольд Шварценеггер", text: "Как дела?", id: 3},
//             ],
//             2: [
//                 {name: "Билл Гейтс", text: "Где мой чип?", id: 4},
//                 {name: "Илон Маск", text: "На Луне", id: 5}
//             ]
//         },
//         messageLastId: 5,
//         postsLastId: 2
//     },
//     getState() {
//         return this._state
//     },
//     renderTree() {
//         console.log("rendering in progress");
//     },
//     addPost(postText, postAuthor) {
//         let post = {message: postText, author: postAuthor, id: ++this._state.postsLastId}
//         this._state.posts.unshift(post)
//         this.onPostChange()
//     },
//     onPostChange(e) {
//         this.renderTree(this._state)
//     },
//     onMessageChange(e) {
//         this.renderTree(this._state)
//     },
//     sendMessage(messageText, name, dialogId) {
//         let message = {text: messageText, name: name, id: ++this._state.messageLastId}
//         this._state.dialogs[dialogId].push(message)
//         this.onMessageChange()
//     },
//     setRenderTree(f) {
//         this.renderTree = f
//     },
//     // type DispatchEventType = "SEND_MESSAGE"|"ADD_POST"
//     // type SendMessageEvent = {messageText:string,name:string,dialogId:number}
//     // type AddPostEvent = {postText:string,postAuthor:string}
//     // type DispatchEventPayload = SendMessageEvent|AddPostEvent
//     // type DispatchEvent = {type:DispatchEventType,payload:DispatchEventPayload}
//     dispatch(e) {
//         switch (e.type) {
//             case SEND_MESSAGE:
//                 this.sendMessage(e.messageText, e.name, e.dialogId)
//                 break
//             case ADD_POST:
//                 this.addPost(e.postText, e.postAuthor)
//                 break
//         }
//     },
//
// }
// export default store
export const SEND_MESSAGE = "SEND_MESSAGE"
export const ADD_POST = "ADD_POST"
export function postReducer(state = {
    posts: [{message: "text", author: "Elon musk", id: 0},
        {message: "1234", author: "Elan mask", id: 1},
        {message: "abcd", author: "Eljn maks", id: 2}], postLastId: 2
}, action) {
    switch (action.type) {
        case 'post/add':
            return {
                posts: [...state.posts, {
                    message: action.postText,
                    author: action.postAuthor,
                    id: state.postLastId + 1
                }],
                postLastId: state.postLastId + 1
            }
        default:
            return state
    }
}

export function addPostAC(message, author) {
    return {type: 'post/add', postText: message, postAuthor: author}
}
export function messageReducer(state = {
    chats: [
        {name: "Иван Иванов", text: "Привет", id: 0},
        {name: "Илон Маск", text: "Го на Марс", id: 1},
        {name: "Билл Гейтс", text: "Где мой чип?", id: 2}
    ],
    dialogs: {
        0: [
            {name: "Иван Иванов", text: "Привет", id: 0},
            {name: "Илон Маск", text: "Го на Марс", id: 1},
            {name: "Иван Иванов", text: "Пошли, когда?", id: 2}
        ],
        1: [
            {name: "Арнольд Шварценеггер", text: "Как дела?", id: 3},
        ],
        2: [
            {name: "Билл Гейтс", text: "Где мой чип?", id: 4},
            {name: "Илон Маск", text: "На Луне", id: 5}
        ]
    },
    messageLastId: 5
}, action) {
    switch (action.type) {
        //
//           this._state.dialogs[dialogId].push(message)
        case 'message/add':
            const newState = {chats: state.chats, dialogs: [...state.dialogs], messageLastId: state.messageLastId + 1}
            const message = {text: action.messageText, name: action.name, id: state.messageLastId + 1}
            newState.dialogs[action.dialogId].push(message)
            return newState
        default:
            return state
    }
}

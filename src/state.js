let state ={ 
    posts:[
    {message:"text", author:"Elon musk", id:0},
    {message:"1234", author:"Elan mask", id:1},
    {message:"abcd", author:"Eljn maks", id:2},
    ], 
    chats:[
    {name:"Иван Иванов", text:"Привет", id:0},
    {name:"Илон Маск", text:"Го на Марс", id:1},
    {name:"Билл Гейтс", text:"Где мой чип?", id:2}
    ], 
    dialogs:{
        0:[
        {name:"Иван Иванов", text:"Привет", id:0},
        {name:"Илон Маск", text:"Го на Марс", id:1},
        {name:"Иван Иванов", text:"Пошли, когда?", id:2}
        ],
        1:[
            {name:"Арнольд Шварценеггер", text:"Как дела?", id:3},
        ],
        2:[
            {name:"Билл Гейтс", text:"Где мой чип?", id:4},
            {name:"Илон Маск", text:"На Луне", id:5}
        ]
    },
    postsLastId: 2
}

export default state 
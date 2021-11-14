import './Messages.css'
export default function Messages(){
    return(
        <div className={"messages"}>
            <div className={"dialog"}>
                <p className={"name"}>Иван Иванов</p>
                <p className={"message"}>Привет</p>
            </div>
            <div className={"dialog"}>
                <p className={"name"}>Илон Маск</p>
                <p className={"message"}>Го на Марс</p>
            </div>
            <div className={"dialog"}>
                <p className={"name"}>Билл Гейтс</p>
                <p className={"message"}>Где мой чип?</p>
            </div>
            <textarea/>
            <button>Send</button>
        </div>
    )
}
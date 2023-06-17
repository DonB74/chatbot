import React, {useState} from 'react';
import "../styles/style.css";
import Header from "./Header";
import InputArea from "./Input_area";
import MessageArea from "./Message_Area";

const Chatbot = () => {

    const [messages, setMessages] = useState([
    ])

    function AddMes(value_info, value_type){
        const new_mes_right = Create(value_info, value_type, "User");
        const new_mes = Create("I don't know anything yet", "left", "Bot");
        setMessages([...messages, new_mes_right, new_mes]);
    }


    function Create(value_info, value_type, name){
        let date = new Date();
        let minutes = date.getMinutes().toString();
        if (date.getMinutes() < 10){
            minutes = "0" + minutes.toString();
        }
        return(
            {
                info: value_info,
                date: date.getHours().toString() + ":" + minutes,
                type: value_type,
                name: name
            }
        )

    }
    function Update(){
        setMessages([])
    }


    return (
        <div>
            <div className="main">
                <Header update={Update}/>
                <MessageArea messages={messages}/>
                <InputArea send_button={AddMes}/>
            </div>
        </div>
    );
};

export default Chatbot;

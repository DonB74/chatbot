import React, {useState} from 'react';
import "../styles/style.css";
import Header from "./Header";
import InputArea from "./Input_area";
import MessageArea from "./Message_Area";
import Sidebar from "./Sidebar";
import RightMessage from "./Right_message";
import LeftMessage from "./Left_message";

const Chatbot = () => {

    const [messages, setMessages] = useState([
    ])

    const [theme, setTheme] = useState('light');
    const [area, setArea] = useState('msg_area');

    const[update, setUpdate] = useState("https://github.com/mvpeskova/chatbot/blob/master/pictures/update_grey.png?raw=true");

    function handleButtonClick(){

        const head = document.getElementById("head");
        const input = document.getElementById("input");
        const input_area = document.getElementById("input_area");
        const container = document.getElementById("container");
        const body = document.getElementsByTagName("body")[0];
        const bar = document.getElementById("sidebar");
        const labels = document.getElementsByTagName("ul")[0];
        if (theme === 'light'){
            setTheme('dark');
            setUpdate("https://github.com/mvpeskova/chatbot/blob/master/pictures/update_white.png?raw=true");
            setArea('msg_area black');
            head.style.background = '#010507';
            head.style.color = '#ffffff';
            head.style.borderBottom = '3px solid black';
            input.style.background = '#010507';
            input.style.borderTop = '3px solid black';
            input_area.style.background = 'black';
            input_area.style.color = 'white';
            input_area.classList.toggle("placeholder-white");
            body.style.background = 'linear-gradient(135deg, #000102 0%, #173146 100%)';
            container.style.border = '3px solid black';
            container.style.backgroundColor = '#010507';
            bar.style.color = 'black';
            labels.style.color = 'black';
        }
        else {
            setTheme('light');
            setUpdate("https://github.com/mvpeskova/chatbot/blob/master/pictures/update_grey.png?raw=true");
            setArea('msg_area');
            head.style.background = '#d0d0d0';
            head.style.color = '#5b5b5b';
            head.style.borderBottom = '3px solid white';
            input.style.background = '#d0d0d0';
            input.style.borderTop = '3px solid white';
            input_area.style.background = 'white';
            input_area.style.color = '#5b5b5b';
            input_area.classList.remove("placeholder-white");
            body.style.background = 'linear-gradient(135deg, #a7acad 0%, #bac5cc 100%)';
            container.style.border = '3px solid white';
            container.style.backgroundColor = '#d0d0d0';
            bar.style.color = 'white';
            labels.style.color = 'white';
        }
    };

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
            <input className="down_button" id="top-box" type="checkbox" hidden></input>
            <label className="down_label" htmlFor="top-box"></label>
            <Sidebar func={handleButtonClick}/>
            <div className="main" id="container">
                <Header update={Update} button={update}/>
                <MessageArea messages={messages} area={area}/>
                <InputArea send_button={AddMes}/>
            </div>
            <footer>&copy; Copyright 2023</footer>
        </div>
    );
};

export default Chatbot;

import React from 'react';
import "../styles/style.css";

const Header = (props) => {
    return (
        <div className="header">ChatBot
            <button className="refresh" type="submit" onClick={props.update}>
                <img className="update"
                     src="https://github.com/mvpeskova/chatbot/blob/master/pictures/update_grey.png?raw=true"></img>
                <img className="update hover"
                     src="https://github.com/mvpeskova/chatbot/blob/master/pictures/update_green.png?raw=true"></img>
            </button>
        </div>
    );
};

export default Header;
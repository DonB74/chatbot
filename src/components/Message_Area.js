import React from 'react';
import LeftMessage from "./Left_message";
import RightMessage from "./Right_message";
import '../styles/style.css';

const MessageArea = (props) => {

    return (
        <div className="msg_area">
            {props.messages.map(mes => {
                switch (mes.type) {
                    case "right":
                        return <RightMessage right_message={mes}/>;
                    case "left":
                        return <LeftMessage left_message={mes}/>;
                }
            })}
        </div>
    );
};

export default MessageArea;
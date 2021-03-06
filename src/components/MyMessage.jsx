import React from 'react';

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return ( 
        <div className="message" style={{ float: "right", marginRight: '18px', color: 'white', backgroundColor: '#7F16B0' }}>
            <label className="text-right ml-auto text-white mb-2">You:</label><br/>
            {message.text}
           
        </div>
    );
}

export default MyMessage;

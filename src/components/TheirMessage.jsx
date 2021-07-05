import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                >
                    
              </div>  
            )
            }
            {
                    (message?.attachments?.length > 0) ?
         (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ marginLeft: isFirstMessageByUser ? '4px' :'48px' }}
            />
                    ) : (<><div className="message" style={{ float: "left", backgroundColor: '#8F8785', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        <label className="text-right ml-auto text-white mb-2">{message.sender.username}:</label><br/>
                        {message.text}
                        
                    </div></>)
    }
            
        </div>
    );
}

export default TheirMessage;

import { useState } from "react";
import { sendMessage, isTyping} from 'react-chat-engine';

const MessagewForm = (props) => {
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        e.preventDefault();

         const text = value.trim();

         if(text.length > 0) sendMessage( creds, chatId, {text})
    }

    const handleChange = (e) => {
        setValue(e.target.value)

        isTyping(props, chatId)
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-form"
                placeholder="Send a message..."
                value = {value}
                onChange = {handleChange}
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default MessagewForm
 
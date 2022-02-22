import React, { ChangeEvent, KeyboardEvent, useState } from 'react'


type PropsType = {
    addMessage: (title: string) => void
}

function AlternativeMessage(props: PropsType) {

    const [title, setTitle] = useState('')
    
    const hendleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onMessageClick = () => {
        props.addMessage(title)
        setTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onMessageClick()
        }
    }

    return (
        <div>
            <input value={title} type='text'
                onChange={hendleOnChange} 
                onKeyPress={onKeyPressHandler}
                />
            <button onClick={onMessageClick}>Send</button>
        </div>
    )
}

export default AlternativeMessage

import React, { ChangeEvent, useState } from 'react'

function AlternativeMessage() {
    
    const [title, setTitle] = useState('')

    const hendleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onMessageClick = (event: any) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <input value={title} type='text' 
            onChange={hendleOnChange} /> 
            <button onClick={onMessageClick}>Send</button>
        </div>
    )
}

export default AlternativeMessage

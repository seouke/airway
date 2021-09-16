import React, { useState } from 'react'

const PhoneNumber = () => {
    const [number, setNumber] = useState("")

    const sendInfo = (info) => {

        console.log('sent', info)
    }

    return (
        <div>
            <input type="text" onChange={e => setNumber(e.target.value)} />

            <button onClick={() =>
                sendInfo({
                    phonenumber: number
                })    
        }>send</button>
        </div>
    )
}

export default PhoneNumber
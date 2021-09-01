import React, { useState } from 'react'

const Counters = () => {
    const [name, setName] = useState("")

    const sendInfo = (info) => {
        // logic
        console.log('sent', info)
    }

    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} />
            

            <button onClick={() => 
                sendInfo({
                    name: name
                })
            }>Send</button>
        </div>
    )
}

export default Counters

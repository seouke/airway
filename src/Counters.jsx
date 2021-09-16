import React, { useState } from 'react'

const Counters = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")

    const sendInfo = (info) => {
        // logic
        console.log('sent', info)
    }

    return (
        <div>
            Name:
            <input type="text" onChange={e => setName(e.target.value)} /><br />
            Phone:
            <input type="text" onChange={e => setNumber(e.target.value)} /><br />
            Address:
            <input type="text" onChange={e => setAddress(e.target.value)} /><br />


            <button onClick={() => 
                sendInfo({
                    Name: name,
                    Number: number,
                    Address: address,

                })
            }>Send</button>
        </div>
    )

}


export default Counters

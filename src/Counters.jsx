import React, { useState } from 'react'

const Counters = () => {
    const [info, setInfo] = useState({ name, number, address })
    

    const sendInfo = (info) => {
        // logic
        console.log('sent', info)

    }

    return (
        <div>
            <form>
                Name:
                <input type="text" onChange={e => setInfo({ name: e.target.value })} /><br />
                Phone:
                <input type="text" onChange={e => setInfo({ number: e.target.value })} /><br />
                Address:
                <input type="text" onChange={e => setInfo({ address: e.target.value })} /><br />
            </form>

            <button 
                onClick={e =>  
                    sendInfo({
                        Name: info.name,
                        Number: info.number,
                        Address: info.address,

                    })
            }>
                Send
            </button>
        </div>
    )

}


export default Counters

import React from 'react'
import useInfo from './useInfo'

const Counters = () => {
    const [info, onChange] = useInfo({ name: '', number: '', address: '' })
    

    const sendInfo = (info) => {
        // logic
        console.log('sent', info)
    }

    return (
        <div>
            <form>
                Name:
                <input type="text" onChange={onChange} name="name" /><br />
                Phone:
                <input type="text" onChange={onChange} name="number" /><br />
                Address:
                <input type="text" onChange={onChange} name="address" /><br />
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

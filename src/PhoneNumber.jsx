import React, { useState } from 'react'

const PhoneNumber = () => {
    const [number, setNumber] = useState("")

    const sendInfo = (info) => {

        console.log('sent', info)
    }

    return (
        <div>
            <form id="phoneNumber">
                <input type="text" onChange={e => setNumber(e.target.value)} />
            </form>
            <button 
                type="submit"
                form='phoneNumber'
                onClick={e => {
                    e.preventDefault()

                    sendInfo({
                        phonenumber: number
                    })
                }
                }>
                    send
            </button>
        </div>
    )
}

export default PhoneNumber
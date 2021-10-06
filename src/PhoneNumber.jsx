import React, { useState, useEffect } from 'react'

const PhoneNumber = () => {
    const [number, setNumber] = useState("")
    const [buttonName, setButtonName] = useState("send")

    useEffect(() => {
        console.log('test', number)
    }, [number])


    const sendInfo = (info) => {
        console.log('sent', info)
        setNumber("")
        setButtonName("sent")
        setTimeout(() => {setButtonName("send")}, 2000 )
    }

    return (
        <div>
            <form id="phoneNumber">
                <input type="text" onChange={e => setNumber(e.target.value)} value={number} />
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
                    {buttonName}
            </button>
        </div>
    )
}

export default PhoneNumber
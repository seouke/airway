import React, { useEffect, useState } from 'react'

const PhoneNumber = () => {
    const [number, setNumber] = useState("")

    useEffect(() => {
        console.log('chnaged number', number)
    }, [number])

    const sendInfo = (info) => {
        console.log('sent', info)
        setNumber('')
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
                    send
            </button>
        </div>
    )
}

export default PhoneNumber
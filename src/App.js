import React, { useState } from 'react'
import './App.css';
import { collection, getDocs } from "firebase/firestore";  


function App() {

//     const querySnapshot = await getDocs(collection(db, "name")); querySnapshot.forEach((doc) => { 
        
//         console.log(doc.id, " => ", doc.data()); });


    const [info, setInfo ] = useState({ name: "" })
        console.log(info);
    
    const sendInfo = (info) => {
        console.log('sent', info);
    }


    return (
        <div className="App">
            <form>
                firstName:
                <input type="text" onChange={e => setInfo({ name: e.target.value })} />
                <button 
                    onClick={e => 
                        sendInfo({
                            Name: info.name

                        })
                    }
                    type="submit">
                    Submit
                </button>               
            </form>    
        </div>
    );
}

export default App;


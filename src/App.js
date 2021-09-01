import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <form>
                <label for="fname">
                First Name
                <input type="text" id="fname" name="fname" />
                </label>
                <label for="lname">
                Last Name
                <input type="text" id="lname" name="lname" />
                <br />
                </label>
                <label for="hphone">
                Home Phone
                <input type="text" id="hphone" name="hphone" />
                </label>
                <label for="phpone">
                Private Phone
                <input type="text" id="pphone" name="pphone" />
                <br />
                </label>
                <label for="haddress">
                Address
                <input type="text" id="haddress" name="haddress" />
                <br />
                </label>
            </form>
        </div>
    );
}

export default App;

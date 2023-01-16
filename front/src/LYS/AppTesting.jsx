import logo from '../logo.svg';
import '../App.css';
import SignUp from "./SignUp";

function AppTesting() {
    return (
        <div className="App">
            <header className="App-header">
                <a>
                    LYS Testing Page
                </a>
                <AppTesting/>
            </header>
        </div>
    );
}

export default AppTesting;

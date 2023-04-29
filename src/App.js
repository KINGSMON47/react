import logo from './logo.svg';
import './App.css';
import Saeedsmon from "./components/Greet";
import Saeed from "./components/welcome";
function App() {
    return (
        <div className="App" style={{display:"flex"}}>
           <Saeedsmon  />
           <Saeed />
        </div>
    );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginEdit from "./main/Login/login.component";
import KioskMain from "./main/KioskMain/kioskMain";

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<LoginEdit />}/>
                <Route path='/kiosk' element={<KioskMain/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

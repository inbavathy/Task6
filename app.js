import {Link, Routes,Route} from 'react-router-dom'
Home from "./components/Home"
export default function App()
return {(
    <div className="App">
    <Link to="/home">HOME</Link>
    <Routes>
    <Route path="/" element={<div> This is root</div>}/>
    <Routes path="/home" element={<h1>This is home</h1>}/>
    </Routes>
    </div>
);
}


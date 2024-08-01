import logo from './logo.svg';
import './App.css';
import Problem from './Problem';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  <>
 <Router>
 <Routes>
<Route path="/" exact element= {<Home/>}></Route>
<Route path="/problem" exact element= {<Problem/>}></Route>
 </Routes>
 </Router>
  </>
  );
}

export default App;

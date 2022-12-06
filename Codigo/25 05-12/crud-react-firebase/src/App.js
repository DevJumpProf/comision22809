import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';

/* 
import Show from "./components/Show"
import Create from "./components/Create"
import Edit from "./components/Edit" */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>   
<Route path="/" element="Componente Show"/>
<Route path="/create" element="Componente create"/>
<Route path="/edit/:id" element="Componente edit"/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

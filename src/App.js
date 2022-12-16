import Home from './components/Home';
import Thank from './components/Thank';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/Thank" element={<Thank />} />
      </Routes> 
    
  );
}

export default App;

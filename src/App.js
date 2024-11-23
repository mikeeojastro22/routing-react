import './App.css';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      {/* A <BrowserRouter></BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates the browser's built-in history stack */}
        
          {/* Rendered anywhere in the application. <Router></Router> will match a set of child routes from the current location */}
          
            {/* Route - most important part of react-router. They couple URL segments to components/pages, data loading and data mutations. Through route nesting, complex layouts and data dependencies become simple and declarative */}
            
         
        
    </div>
  );
}

export default App;

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
      <BrowserRouter>
      {/* A <BrowserRouter></BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates the browser's built-in history stack */}
        <Routes>
          {/* Rendered anywhere in the application. <Routes></Routes> will match a set of child routes from the current location */}
          <Route path='/' element={<Navigation />}>
            {/* Route - most important part of react-router. They couple URL segments to components/pages, data loading and data mutations. Through route nesting, complex layouts and data dependencies become simple and declarative */}
            <Route index element={<Home />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

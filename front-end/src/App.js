import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

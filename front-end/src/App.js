import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [userData, setUserData] = useState({
    userId: -1
  })

  return (
    <div id="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home userData={userData} />}/>
          {/*  <Route path="/" element={<AccountHome userData/>}/> */}
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

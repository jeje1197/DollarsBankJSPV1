import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AccountHome from './components/AccountHome';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [userData, setUserData] = useState({
    userId: -1,
    loggedIn: false
  })

  return (
    <div id="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home userData={userData} />}/>
          <Route path="/account" element={<AccountHome userData={userData} />}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AccountHome from './components/AccountHome';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Spinner from './components/Spinner';

function App() {
  const [userData, setUserData] = useState({
    id: -1,
    loggedIn: false
  })

  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    if (userData.loggedIn) {
      console.log("Logged in: " + userData)
    }
  }, [userData])

  return (
    <div id="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home userData={userData} setShowSpinner={setShowSpinner}/>}/>
          <Route path="/account" element={<AccountHome userData={userData} setShowSpinner={setShowSpinner}/>}/>
        </Routes>
        
        {showSpinner ? <Spinner/> : null}

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
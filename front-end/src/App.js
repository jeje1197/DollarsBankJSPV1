import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AccountHome from './components/AccountHome';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
// import Spinner from './components/Spinner';

function App() {
  const [userData, setUserData] = useState({
    id: -1
  })

  return (
    <div id="App">
      <div id="App-container"> 
      <BrowserRouter>
      
        <Header/>
          {/* <div id="App-background">
            <div id="App-container"> */}
              <Alert/>

              <Routes>
                <Route exact path="/" element={<Home userData={userData} />}/>
                <Route path="/account" element={<AccountHome userData={userData} />}/>
              </Routes>
    
              {/* {showSpinner ? <Spinner/> : null} */}
            {/* </div>
          </div> */}
        <Footer/>
        
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
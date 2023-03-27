import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          {/*  <Route path="/" element={<AccountHome/>}/> */}
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

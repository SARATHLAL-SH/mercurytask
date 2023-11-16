import './App.css';
import Home from './components/HomePage/Home';
import Signin from './components/SigninPage/Signin';
import Signup from './components/Signup/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path ="/" element={<Signup/>}/>
<Route path ="/signin" element={<Signin/>}/>
<Route path ="/home" element={<Home/>}/>
</Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;

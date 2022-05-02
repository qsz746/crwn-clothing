import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return(
    <Routes>  
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>}/>
    </Routes>
  );
};

export default App;

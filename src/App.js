import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Navgation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navgation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
};

export default App;

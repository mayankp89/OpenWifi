import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Upload from "./Upload";
import Select_support_plan from "./Select_support_plan";
import Selectplan from "./Selectplan";
import Payment from  "./Payment";
import { store } from './state/store';
import { useSelector } from 'react-redux/es/exports';
const App = () => {
  const amount = useSelector(state=>state.amount)
  return(
    <>
      {/* <h1>{amount}</h1> */}
    <Routes>
      <Route path = "/" element = {<Selectplan/>}/>
      <Route path = '/upload' element = {<Upload/>} exact />
      <Route path = '/upload/select_support_plan' element = {<Select_support_plan/>} exact />
      <Route path = '/upload/select_support_plan/payment' element = {<Payment/>} exact />
    </Routes>
    </>
  );
  
};

export default App;
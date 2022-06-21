import React from 'react';
import "./pay_button.css"
import { useSelector } from 'react-redux/es/exports';
function Plans() {
    const amount = useSelector(state=>state.amount)
    return(
       <>
       <button className='button'> Pay : {amount}</button>
       </>
        
    );
}
export default Plans;
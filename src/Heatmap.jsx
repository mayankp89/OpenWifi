import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Progress from "./Progress";
import {useDispatch} from 'react-redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux/es/exports';

const Heatmap=()=>{
    const dispatch = useDispatch();
    var No_of_devices = 5;
    const amount = useSelector(state=>state.amount)

    return(
        <>
           <Progress done="40"/>
          <Link to="/upload/heatmap/select_support_plan"><button type="button" class="btn btn-outline-success"  onClick={()=>{dispatch(actionCreators.depositMoney(amount*(No_of_devices-1)))}}>continue</button></Link>
        </>
    )
}

export default Heatmap;
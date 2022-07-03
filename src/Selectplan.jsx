import React from 'react';
import { Link } from "react-router-dom";
import "./Plans.css"
import Planbox from "./Planbox";
import {useDispatch} from 'react-redux';
import { actionCreators } from './state/index';
import Progress from "./Progress";

function Selectplan() {
    const dispatch = useDispatch();
    return (
        <div>
              {/* <h1>{amount}</h1> */}
              <Progress done="0"/>
            <div className='title'>
            <h1 id='title_head'>Select service plan</h1>
            </div>
            <div className="selectPlan">
                <Link className="Remove_txt_deco" to="/upload" state={{ Plan: "Pro Wireless", price:1000 }} onClick={()=>{dispatch(actionCreators.depositMoney(1000))}}><Planbox Plan="Pro Wireless" Price="$1,000 / Year" Feature_1 = "Latest Radio Technology" Feature_2 = "Advance Features"/> </Link>
                <Link className="Remove_txt_deco" to="/upload" state={{ Plan: "HD Wireless", price:1700 }} onClick={()=>{dispatch(actionCreators.depositMoney(1700))}}><Planbox Plan="HD Wireless" Price="$1,700 / Year"Feature_1 = "Everything in Enterprise" Feature_2 = "Ultra High Density"/> </Link>
            </div>

        </div>
    );
};
export default Selectplan;
import CirculaProgress from "@material-ui/core/CircularProgress";
import React, {useEffect} from "react";
import  { useState } from 'react';
import "../PopUp.css";
const ProgressBar = (props) =>
{
    useEffect(() => {
        const timer=setInterval(() => {
          props.setLevel((newLevel) => newLevel >=110 ? 110 : newLevel+10);
        },500);
        return() => {
          clearInterval(timer);
        };
      }, []);

    return (
        <div id="bar" style={{display: (props.level===110 ? 'none': ""), color: (
            ((props.model3DIndex>=3 && props.model3DIndex<=5) || (props.model3DIndex>=9 && props.model3DIndex<=11)) ?  '#29BB89' :  '#5995fd')}}>
          <CirculaProgress variant='determinate' color="green" value={props.level} />
        </div>
    )
}

export default ProgressBar;
import "../PopUp.css";
import React, {useEffect} from "react";
import { Canvas, useFrame } from 'react-three-fiber';
import  { useRef, useState } from 'react';
import {useGLTF} from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import gameObjects from "../Values/gameObjects.js";
import  { Suspense } from "react";
import gameObject from "../Values/gameObjects.js";
import ProgressBar from "./ProgressBar.js"
import { computeHeadingLevel } from "@testing-library/dom";

const Model = () =>
{
    const gltf = useGLTF("../Model 3D/Sylvanas.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
}


    

  
const PopUp = (props) =>
{
  const [clickDownload, setClickDownload] = useState(false);
  const [level, setLevel]=useState(0);
  
  
   // Rotate mesh every frame, this is outside of React without overhead
  const clickDownloadF = () =>
  {
      setClickDownload(true);
  }

  const clickCloseF = () =>
  {
      props.setShowPopUp(false);
  }
  
  function renderCharacter(index)
  {
    switch(index)
    {
      case 0:  return gameObjects[0].model; 
      break;
      case 1: return gameObjects[1].model; 
      break;
      case 2:  return gameObjects[2].model; 
      break;
      case 3: return gameObject[3].model; break;
      case 4: return gameObject[4].model;break;
      case 5: return gameObject[5].model; break;
      case 6: return gameObject[6].model; break;
      case 7: return gameObject[7].model; break;
      case 8: return gameObject[8].model; break;
      case 9: return gameObject[9].model;break;
      case 10: return gameObject[10].model; break;
      case 11: return gameObject[11].model; break;
      
    }
  }

  function intensity(index)
  {
    switch(index)
    {
      case 0:  return 10; 
      break;
      case 1: return 7; 
      break;
      case 2: return 9; break;
      case 3: return 3; break;
     case 4: return 5; break;
      case 6: return 1; break;
      case 7: return 5;
      case 10: return 100; break;
    }
  }
  
  
  
    return(
   
      <div className="popUp">
        <div className="popup-left">
        <ProgressBar level={level} setLevel={setLevel} model3DIndex={props.model3DIndex} />
        {level===110 ?(
          <Canvas>
          <directionalLight intensity={intensity(props.model3DIndex)} />
            <spotLight position={[10,10,10]} angle={0.15} />
          
            <Suspense fallback={null}>
            {renderCharacter(props.model3DIndex)} 
            </Suspense>
     
          </Canvas>)
          : ""
      }
        </div>
        <div className="vl" />       
        <div  className="popup-right">
        <h2>Animazioni:</h2>
        <ul>
          <li>Saluto</li>
          <li>Camminare</li>
          <li>Colpo di spada</li>
          <li>Risata</li>
        </ul>
        <div id="bottoni">
          <button id={(props.model3DIndex>=3 && props.model3DIndex<=5) || (props.model3DIndex>=9 && props.model3DIndex<=11) ? "buttonO" : "buttonC"} onClick={clickDownloadF}>Download</button>
          <button id={(props.model3DIndex>=3 && props.model3DIndex<=5) || (props.model3DIndex>=9 && props.model3DIndex<=11)  ? "buttonCloseO" : "buttonCloseC"} onClick={clickCloseF}>Chiudi</button>
        </div>
        </div>
        </div>       
        
    )
}

export default PopUp;
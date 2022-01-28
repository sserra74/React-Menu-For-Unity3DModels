import React, { useEffect } from "react";
import { useState } from "react";
import "../offerte.css";
import Knight from "../Immagini/character.jpg"
import Re2 from "../Immagini/re2.png"
import Re from "../Immagini/re.png"
import Objectt from "../Immagini/object.png"

const Category = (props) =>
{

  
  const checkCategoryClicked = () => {
 
    if(props.index===0)
    {
      console.log("sono dnetro");
      if(props.category[0].clicked===true)
        return props.category[0].classNotClicked;
      else
        return props.category[0].classClicked;
    }
    else
    {
      if(props.category[1].clicked===true)
        return props.category[1].classNotClicked;
      else
        return props.category[1].classClicked;
    }
  }

  const clicked = (e) =>
  {
    //0 Personaggi, 1 Oggetti
    e.preventDefault(); 
    const cat = [...props.category]
    /*Se non sto usando il filtro o se dopo averlo usato, deseleziono tutti gli item. Questo perchè non illuminava la categoria giusta mnetre usavo il filtro
      permettendo addirittura di poter cambiare categoria schiacciando sui riquadri. L'idea invece è che quando si usa il filtro, la categoria si può
      cambiare solo da là, e i riquadri si disattivano e si attivano in automatico*/
    if(props.itemSelected.length===0)
        if(props.index===0)
        {
          console.log("Sono dentro i personaggi");
          console.log("6: "+cat[1].clicked);
          if( cat[1].clicked===false)
          {
          cat[0].clicked=!cat[0].clicked ;
          console.log("Sono agendo sui personaggi");
          }
        
        }
        else 
        {
          if( cat[0].clicked===false)
          cat[1].clicked=!cat[1].clicked ;
        
        }
    
   
    
    props.setCategory(cat);
   
  }

  const clickCategoryFiltered = () =>
  {
    console.log("0: "+props.category[0].filtered);
    console.log("1: "+props.category[1].filtered);
    if(props.category[0].filtered===true) 
      return  props.category[0].classNotClicked;
    else
      if(props.category[1].filtered===true)
        return  props.category[1].classNotClicked;;

  }
  
    return(
      <div  className={ checkCategoryClicked()} 
      onClick={ clicked }> 
        <div id="img">
          <img id={props.index===0 ? "" : "objectImage"} src={ props.index===0 ? Re2 : Objectt } alt="">

          </img>
        </div>
        <div className="gameObjectCategoryContent">
          <h2 id={props.index===0 ? "h2": "h2_2"} >{props.index===0 ? "Personaggi": "Oggetti"}</h2>
          
        </div>
          
       
      </div>
    );
}

export default Category;
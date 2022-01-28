import React, { useEffect } from "react";
import { useState } from "react";
import "../offerte.css";
import Knight from "../Immagini/character.jpg"
import Re2 from "../Immagini/re2.png"
import Re from "../Immagini/re.png"
import Objectt from "../Immagini/object.png"
import gameObject from "../Values/gameObjects.js"
import { SelectItem } from "react-multi-select-component";


const CategoryFiltered = (props) =>
{

    const colorCategory  = (categoria) => 
{
    if(categoria==="gameObjectCharacter")
        return "#5995fd";
    else
        if(categoria=="gameObjectObject")
            return "green";
}


    return(
        <div id="categoryFiltered" style={{backgroundColor: colorCategory(props.categoryclass)}}>
            {props.categoria}

        </div>
    )
}
export default CategoryFiltered;
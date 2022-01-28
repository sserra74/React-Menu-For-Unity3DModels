import React, { useEffect } from "react";
import { useState } from "react";

import gameObject from "../Values/gameObjects.js";

import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';  
import FireBase from "../firebase.js"
import CategoryFiltered from "./CategoryFiltered";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/core";
import { SelectItem } from "react-multi-select-component";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const GameObject = (props) => {
  //stato utilizzatose si è usato il filtro. Inizialmente impostato a true
 
 var filtered;
 const [indexPopUp, setIndexPopUp]=useState(-1);
 /* React.useEffect(() => {
  
    if(props.itemSelected.length>0)
    {
      setL(true);
      
    }
    
  }, [props.itemSelected.length]);*/
  const checkItemCategory = (item) =>
  {
    if(props.category[0].clicked===false && props.category[1].clicked===false )
      return item.classname;
    else
      if(props.category[0].clicked===false && props.category[1].clicked===true )    
          return "gameObjectCharacter";
      else
          return "gameObjectObject";
  }
const filterCategory = () =>
{
  console.log("sono in filtercategory");
  var i;
  var selectOggetti=false;
  var selectPersonaggi=false;
  var l;
  for(i=0;i<props.itemSelected.length;i++)
      if(props.itemSelected[i].category==="Oggetti")
        selectOggetti=true;
      else
        selectPersonaggi=true;
  //Quando uso il filtro selezionando una categoria, deseleziono la maxi categoria contraria
      if(selectOggetti===true && selectPersonaggi===false)       
      props.category[0].clicked=true; //Se clicco sulla prima si attiva la seconda     
      else
        if(selectOggetti===false && selectPersonaggi===true)
          props.category[1].clicked=true;
    /*else
      {
        props.category[0].clicked=false;
        props.category[1].clicked=false;
      }*/
      console.log("1: "+props.itemSelected.length);
      console.log("2: "+props.category[0].clicked);
      console.log("3: "+props.category[1].clicked);
      
       
     
      
    
     
     
   
 
  selectOggetti=false;
  selectPersonaggi=false;
  
}
const arrayFiltered= () =>
{
  console.log("Sto filtrando");
  //se il vettore contenente le checbox selezionate dal filtro ha qualche elemento
   if(props.itemSelected.length>0)
   {
    console.log("Ho selezionato almeno un filtro");
     //ottengo il vettore con le categorie selezionate
    const myArrayFiltered = gameObject.filter((el) => {
      return props.itemSelected.some((f) => {
       // console.log("el: "+el.categoria);
        return f.value == el.categoria     });
    });   
   
   filterCategory();  
   
    filtered=true;
    
    const swiper = document.querySelector('.swiper-container').swiper;
    
    swiper.slideTo(0);
    
    props.setNGameObject(myArrayFiltered.length)

  console.log("eeeeeeeeeeeee: "+myArrayFiltered)
   
    return myArrayFiltered.slice(props.minIndex, props.maxIndex);
       
      
   }
   else //altrimenti s eho usato la barra di ricerca cerco se il nome di ogni gameObject contiene i caratteri digitati dall'utente
      if(props.searchInput!=="")
      {
        //Se una delle categorie è disabilitata, filtro prima i gameobject ottenuti da quella categoria e poi prendo quelli con il nome digitato dall'utente
        if(props.category[0].clicked===false && props.category[1].clicked===true)
            return gameObject.filter(el => el.classname==="gameObjectCharacter").
            filter(el => el.name.includes(props.searchInput));
        else
          if(props.category[0].clicked===true && props.category[1].clicked===false)
            return gameObject.filter(el => el.classname==="gameObjectObject").
            filter(el => el.name.includes(props.searchInput));
          else //altrimenti, se tutte e due le categorie sono abilitate, restituisco i gameobject con quel nome di entrambe le categorie
            return  gameObject.filter(el => el.name.includes(props.searchInput));
      }

     
        
      else //altrimenti, se non ho usato il filtro, 
      {   
        console.log("Non sto usando filtri quindi ")
        //Sono dentro questo else sia perchè non sto usando la barra di ricerca e anche perchè la lunghezza del filtro è zero
        if(props.nGameObject>0) //è maggiore di zero se dal filtro ho trovato qualche personaggio. Si utilizza per capire se è mai stato usato il filtro
        {
          //Se sono qua dentro ho deselezionato tutte le categorie dal filtro e quindi riabilito le maxi categorie e restituisco il vettore normale
          console.log("sto controllando i gameobect");
          props.category[0].clicked=false;
          props.category[1].clicked=false;
          props.setNGameObject(0);
          return gameObject.slice(props.minIndex, props.maxIndex);
        }

        else
          //se tutte e due le categorie sono selezionate, restituisco il vettore normalmente
          if((props.category[0].clicked===false && props.category[1].clicked===false) )
          {
            console.log("okkk");
            console.log("Tutte e due le categorie sono accese");
            return gameObject.slice(props.minIndex, props.maxIndex);
          }
          else //se è selezionata quella dei personaggi
            if(props.category[0].clicked===false && props.category[1].clicked===true )    
            {
              console.log("La categoria Personaggi è accesa: "+l);
              
             
                return gameObject.filter(el => el.classname==="gameObjectCharacter");
            }
            else
            {
              
              //Calcolo la lunghezza del vettore dei personaggi che verranno tolti, così da aggiungere tanti gamobject di tipo oggetto, quanti sono quelli di
              //tipo personaggio tolti
                var l= gameObject.slice(props.minIndex, props.maxIndex).filter(el => el.classname==="gameObjectCharacter").length;console.log("intervallo "+props.minIndex+" - "+(props.maxIndex+l));
                gameObject.filter(el => el.classname==="gameObjectObject").slice(0,6).map((item, index) => (console.log("nome: "+item.name)));
                return  gameObject.filter(el => el.classname==="gameObjectObject");
            }
      }
  }
/*function link()
{
 
  <FireBase />
  var storage=firebase.storage();
  var path=storage.ref('Topolino/Mickey Mouse.mtl');
  var download=storage.refFromURL('gs://unityassets-3eb90.appspot.com/Topolino/Mickey Mouse.mtl')
 
  const storageRef = firebase.storage().ref(); 
  storageRef.child('Topolino/Mickey Mouse.mtl').getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    console.log("sono dnetro");
});
}*/

  const setImgStyle= (imgName) =>
  {
      switch(imgName)
      {
        case "Troll": return "13.3rem"; break;
        case "Warrior": return "14rem"; break;
        case "PocaHontas": return "16rem"; break;
        case "Judy": return "10rem"; break;
        case "Topolino" :return "16rem"; break;
        case "Luigi": return "17rem"; break;
        case "IronMan": return "14rem"; break;
     
        case "Falò": return "28rem"; break;
        case "Sofà": return "12rem"; break;
        case "Divano": return "16.8rem"; break;
        case "Telecamera": return "14rem"; break;
        case "Sedia Ufficio": return "14rem"; break;
        case "Divanetto": return "14rem"; break;
        case "Poltrona": return "12rem"; break;
        case "Letto con Comodino": return "12rem"; break;
        default: return "";


      }
  }

  const topImgStyle= (imgName) =>
  {
      switch(imgName)
      {
        
        case "Falò": return "30%"; break;
        case "Sofà": return "50%"; break;
        default: return "";


      }
  }

  const leftImgStyle = (imgName) =>
  {
    switch(imgName)
    {
        
      case "Sedia": return "31%"; break;
      case "Divano": return "50%"; break;
      default: return "";


    }
  }

  //Utilizzato durante il filter per restituire le giuste maxi-categorie durante l'uncheck e il check di alcune categorie
  React.useEffect(() => {
   
    if(filtered===true )
    {
      props.category[0].clicked=false;
          props.category[1].clicked=false;
    }
   
  }, [props.itemSelected],[filtered]);

  
  React.useEffect(() =>
  {
    props.setModel3DIndex(indexPopUp);
  },[indexPopUp])

  const ShowPopUp = (index) =>
  {
      props.setShowPopUp(!props.showPopUP);
      setIndexPopUp(index);
      
     // props.setView3DModel(true);
  }
  
  //(props.itemSelected.length===0 && ll===true )? setL(false): null}
    return arrayFiltered().map((item, index) => (
       
     <>
    
        <div className={  checkItemCategory(item)  } onClick={() => ShowPopUp(item.id)} >
          <div className="gameObjectContent">
            <h2>{item.name }</h2>
            <CategoryFiltered categoria={item.categoria} categoryclass={item.classname}></CategoryFiltered>
            <div className="animato">
              <h3>Animato: </h3>
              <span>0</span>
              
            </div>

            {/*<div className="link">
              <button type="submit" >Download</button>
    </div>*/}
          </div>
          <div className="imgBox">
            
              <img src={item.img} style={{width:setImgStyle(item.name), top: topImgStyle(item.name), left: leftImgStyle(item.name)}} alt="" />
              
            
            
          </div> 
          
        </div>
       
      </>
      ));
   
};

export default GameObject;

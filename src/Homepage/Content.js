import React from "react";
import GameObject from "./GameObject";
import Category from "./Category";
import gameObject from "../Values/gameObjects.js";
import { useState } from "react";
import "../offerte.css";
import "../styles.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
/*
 </SwiperSlide>
  flex-wrap: wrap;
  justify-content: center;
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        */
const Content = (props) => {
  // const [maxIndex, setMaxIndex] = useState(8);
  //  const [minIndex, setMinIndex] = useState(0);

  const [nGameObject, setNGameObject]=useState(0);
  const [category, setCategory] = useState([
    { classNotClicked: "gameObjectCategory", classClicked: "gameObjectCategoryClicked0", clicked: false, filtered: false},
    {  classNotClicked: "gameObjectCategory", classClicked: "gameObjectCategoryClicked1", clicked: false, filtered: false },
   
  ]);
 
  const slide= []
 
  for(let i=0;i<((nGameObject===0 || props.itemSelected.length===0)? gameObject.length/6 : nGameObject/6);i++)
      slide.push(

        <SwiperSlide >
      <div className="gameObjects">
   
      <GameObject   searchInput={props.searchInput} 
      minIndex={i>0 ?  (i-1+gameObject.length/2) : 0} maxIndex={i>0 ? (i+gameObject.length/2)+(gameObject.length/2): gameObject.length/2} 
      category={category} itemSelected={props.itemSelected}  showPopUP={props.showPopUP} setShowPopUp={props.setShowPopUp}  setModel3DIndex={props.setModel3DIndex}
      setNGameObject={setNGameObject} nGameObject={nGameObject}/>
     
    </div></SwiperSlide>)


/*
 <SwiperSlide>
         
         <div className="gameObjects">
           {console.log("<<<<: "+props.lselected)}
           <GameObject  lselected={props.lselected} searchInput={props.searchInput} minIndex={0} maxIndex={6} category={category} itemSelected={props.itemSelected}  setCategory={setCategory}/>
           
         </div>
       </SwiperSlide>
       <SwiperSlide>
       
         <div className="gameObjects">
           <GameObject   searchInput={props.searchInput} minIndex={7} maxIndex={13} category={category} itemSelected={props.itemSelected}/>
         </div>
       </SwiperSlide>*/
  return (
    <>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
            <div  id="categoria" >
            <Category   index={0} category={category} setCategory={setCategory} itemSelected={props.itemSelected} nGameObject={nGameObject}/>
            <Category    index={1} category={category} setCategory={setCategory} itemSelected={props.itemSelected} nGameObject={nGameObject}/>
            </div>
           
       {slide}
    
       
        </Swiper>

        
    
    </>
  );
}

export default Content;

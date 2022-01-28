import React from "react";
import "../styles.css";
//import logo from "../Immagini/logo.jpg";
//import Header from "./Header";
import Knight from "../Immagini/character.jpg"
import PopUp from "./PopUp.js";
import Content from "./Content";
import { useState } from "react";
import MultiSelect from 'react-multi-select-component';
//import { useFormik } from "formik";
import Search from '../Immagini/search.png';

const initialValues = {
  search: "",
  password: ""
};

 const category =[
  {
    value: 'Mostro', 
    label: 'Mostro',
    category: 'Personaggi'
  },
  {
    value: 'Fantasy',
    label: 'Fantasy',
    category: 'Personaggi'
  },
  {
    value: 'SuperEroe', 
    label: 'SuperEroe',
    category: 'Personaggi'
  },
  {
    value: 'Disney',
    label: 'Disney',
    category: 'Personaggi'
  },
  {
    value: 'Cavaliere',
    label: 'Cavaliere',
    category: 'Personaggi'
  },
  {
    value: 'VideoGames',
    label: 'VideoGames',
    category: 'Personaggi'
  },
  {
    value: 'Interno',
    label: 'Interno',
    category: 'Oggetti'
  },
  {
    value: 'Esterno',
    label: 'Esterno',
    category: 'Oggetti'
  }
]  

//<Content />
const Homepage = () => {
  const [selected, setSelected] = useState([]);
  const [searchedItem, setSearch] = useState("");
 
  const [showPopUP,setShowPopUp] = useState(false);
  const [model3DIndex, setModel3DIndex] = useState(-1);
 /* const formik = useFormik(
    initialValues,
    
  );*/

  
  

  React.useEffect(() => {
   
    setSearch(searchedItem);
    console.log("bbb: "+searchedItem);
  }, [searchedItem]);

  const handleChange = (e) =>
  {
      setSearch(e.target.value);
      
  }
 
 
  
  
  return (
    <>
  
   {showPopUP===true ? <div className="bg"> </div> : null}
   {showPopUP===true ? <PopUp setShowPopUp={setShowPopUp} model3DIndex={model3DIndex}/> : null}
  
        
          
      <fieldset>
        <legend>Menù</legend>
        {/*<div id="search">*/}
        <input type="text" name="searchInput" placeholder="Cerca" onChange={handleChange}/>
        {/*<img src={Search} alt=""></img>*/}
        {/*</div>*/}
        <MultiSelect 
        options={category} 
        overrideStrings={{
        "allItemsAreSelected": "All items are selected.",
        "clearSearch": "Clear Search",
        "noOptions": "No options",
        "search": "Search",
        "selectAll": "Select All",
        "selectSomeItems": "Filtro"
        }} 
        hasSelectAll={false} 
        disableSearch={true}
        value={selected}
        onChange={setSelected}
       
      />
     
     </fieldset>
    <br /><br /><br /><br />
 
   
    <Content searchInput={searchedItem} itemSelected={selected}  lselected={selected.length}  showPopUP={showPopUP} setShowPopUp={setShowPopUp} Model3DIndex={model3DIndex}
    setModel3DIndex={setModel3DIndex}/>

    
   
    </>
  );
};
 
export default Homepage;

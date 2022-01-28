import topolino from "../Immagini/topolino.png";
import troll from "../Immagini/troll.png";
import warrior from "../Immagini/warrior.png";
import pocaHontas from "../Immagini/pocahontas.png"
import mickey from "../Immagini/Mickey.png";
import child from "../Immagini/childd.png";
import warcraft from "../Immagini/warcraft.png";
import shadowling from "../Immagini/shadowling.png";

import luigi from "../Immagini/Luigi.png"
import Judy from "../Immagini/Judy.png";
import ironMan from "../Immagini/ironman.png";
import Spiderman from "../Immagini/Spiderman.png";
import Sedia from "../Immagini/sedia.png"
import Falò from "../Immagini/Fire.png";
import Sofà from "../Immagini/Sofà.png";
import sofà2 from "../Immagini/Sofà2.png";
import boccale from "../Immagini/Boccale.png"
import sediaUfficio from "../Immagini/SediaUfficio.png";
import divanetto from "../Immagini/Divanetto.png"
import Chair from "../Immagini/Chair.png";
import Telecamera from "../Model3D/TeleCamera.js"
import Letto from "../Immagini/bed.png";
import Warrior from "../Model3D/Warrior.js";
import Troll from "../Model3D/Troll.js";
import PocaOntas from "../Model3D/Ontas.js";
import Mickey from "../Model3D/Mickey.js"
import Luigi from "../Model3D/Luigi.js";
import IronMan from "../Model3D/IronMan.js"
import ChairModel from "../Model3D/Chair.js"
import Sofà2 from "../Model3D/Sofà2.js";
import Boccale from "../Model3D/Boccale.js"
import SediaUfficio from "../Model3D/SediaUfficio.js"
import Divanetto from "../Model3D/Divanetto.js"
import telecamera from "../Immagini/Telecamera.png";
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';  
import FireBase from "../firebase.js"
function link()
{
 
  <FireBase />
  var storage=firebase.storage();
  var path=storage.ref('Topolino/Mickey Mouse.mtl');
  var download=storage.refFromURL('gs://unityassets-3eb90.appspot.com/Topolino/Mickey Mouse.mtl')
  const storageRef = firebase.storage().ref(); 
  let downloadUrl =  storageRef.child('Topolino/Mickey Mouse.mtl').getDownloadURL();
  console.log("url "+downloadUrl);
  return downloadUrl;
}
const gameObject = [
  {
    id: 0,
    name: "Troll",
    animato: "Sì",
    img: troll,
    classname: "gameObjectCharacter",
    categoria: "Mostro",
    showed: false,
    model: <Troll />,
    intensiti: 3,
    //link: link()
  },
  {
    id: 1,
    name: "Warrior",
    animato: "Sì",
    img: warrior,
    classname: "gameObjectCharacter",
    categoria: "Cavaliere",
    showed: false,
    model: <Warrior />,
  },
  {
    id: 2,
    name: "PocaHontas",
    animato: "Sì",
    img: pocaHontas,
    classname: "gameObjectCharacter",
    categoria: "Disney",
    showed: false,
    model: <PocaOntas />,
  },
  {
    id: 3,
    name: "Sedia",
    animato: "Sì",
    img: Sedia,
    classname: "gameObjectObject",
    categoria: "Esterno",
    model: <ChairModel />
  },

  {
    id: 4,
    name: "Divano",
    animato: "Sì",
    img: sofà2,
    classname: "gameObjectObject",
    categoria: "Interno",
    model: <Sofà2 />
  },
  {
    id: 5,
    name: "Boccale",
    animato: "Sì",
    img: boccale,
    classname: "gameObjectObject",
    categoria: "Interno",
    model: <Boccale />
  },
  {
    id: 6,
    name: "Topolino",
    Animato: "Sì",
    img: mickey,
    categoria: "Disney",
    classname: "gameObjectCharacter",
    showed: false,
    model: <Mickey />
  },
  {
    id: 7,
    name: "Luigi",
    Animato: "Sì",
    img: luigi,
    categoria: "VideoGames",
    classname: "gameObjectCharacter",
    showed: false,
    model: <Luigi />
  },
  {
    id: 8,
    name: "IronMan",
    Animato: "Sì",
    img: ironMan,
    categoria: "SuperEroi",
    classname: "gameObjectCharacter",
    showed: false,
    model: <IronMan />
  },
  {
    
      id: 9,
      name: "Sedia Ufficio",
      Animato: "Sì",
      img: sediaUfficio,
      categoria: "Interno",
      classname: "gameObjectObject",
      model: <SediaUfficio />
  },

  {
    id: 10,
    name: "Telecamera",
    Animato: "Sì",
    img: telecamera,
    categoria: "Interno/Esterno",
    classname: "gameObjectObject",
    model: <Telecamera />
  },
  {
    id: 11,
    name: "Telecamera",
    Animato: "Sì",
    img: telecamera,
    categoria: "Interno",
    classname: "gameObjectObject",
    model: <Telecamera />
  },
  
  
];

export default gameObject;

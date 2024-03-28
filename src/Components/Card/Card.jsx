import React from "react";
import "./Card.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import {easeIn, motion} from "framer-motion";

const Card = ({titulo, noche, dia, precio,imagen,id}) => {
  return (
    <motion.div
    initial={{opacity:0, top:10}}
    animate={{opacity:1, top:0}}
    transition={{duration:1, ease:easeIn, type:"tween"}}


    className="card">
      <img  src={`https://turisclub.cl/upload/${imagen}`} />
      <div className="card-top">
        <h2
      
        >{titulo}</h2>
        <h3><IoSunnySharp /> {dia} días <br/> <MdNightlight /> {noche} noches</h3>
      </div>
      <div className="card-bottom">
        <div></div>
        <p><IoIosInformationCircle /> Precio por persona en base doble desde</p>
        <p>USDT: $ {precio}</p>
        
        <a href={`https://turisclub.cl/programa/${id}`}><button
        
        ><FaArrowCircleRight />Descripción</button></a>
      </div>
     
    </motion.div>
  );
};

export default Card;

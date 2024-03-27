import React from "react";
import "./Card.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import {easeIn, motion} from "framer-motion";

const Card = () => {
  return (
    <motion.div
    initial={{opacity:0, top:10}}
    animate={{opacity:1, top:0}}
    transition={{duration:1, ease:easeIn, type:"tween"}}


    className="card">
      <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506675-pont-neuf.jpg" />
      <div className="card-top">
        <h2>Playa del Carmén</h2>
        <h3><IoSunnySharp /> 8 días / <MdNightlight /> 7 noches</h3>
      </div>
      <div className="card-bottom">
        <div></div>
        <p><IoIosInformationCircle /> Precio por persona en base doble desde</p>
        <p>USDT: 1699</p>
        <button><FaArrowCircleRight /> Ir a Descripción</button>
      </div>
    </motion.div>
  );
};

export default Card;

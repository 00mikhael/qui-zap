import React from "react";
import {Link} from 'react-router-dom'



const QuizAdd = () => {
  return (
    <Link to="/add" style={{flexBasis: "13rem", width: "16rem", height: "auto"}} className={`flex-grow xl:flex-none  h-80 bg-fuchsia-200 rounded-md text-6xl font-light flex justify-center items-center text-fuchsia-300 hover:bg-fuchsia-300 hover:text-fuchsia-100 cursor-pointer shadow-inner mt-4`}>+</Link>
  );
};

export default QuizAdd;

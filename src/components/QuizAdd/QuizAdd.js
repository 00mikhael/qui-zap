import React from "react";
import {Link} from 'react-router-dom'



const QuizAdd = () => {
  return (
    <Link to="/create" style={{width: "100%", height: "auto"}} className={`h-80 bg-fuchsia-100 rounded-b-md text-6xl font-light flex justify-center items-center text-fuchsia-300 hover:bg-fuchsia-300 hover:text-fuchsia-100 cursor-pointer shadow-inner mt-4`}>+</Link>
  );
};

export default QuizAdd;

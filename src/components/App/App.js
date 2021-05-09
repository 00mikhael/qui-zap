import React from "react";

// import {HiOutlineMenuAlt4, HiOutlineX} from 'react-icons/hi'

import Logo from '../Logo'
import Nav from '../Nav'
// import HomePage from '../HomePage'
import Playground from '../Playground'


const App = () => {
  return (
    <div className={`bg-blueGray-100 min-h-screen border-t-2 border-fuchsia-600 space-y-4 flex flex-col`}>
      <header className={`sticky top-0 border-b border-fuchsia-200 p-4 flex items-center justify-between bg-white shadow z-10`}>
          {/* <span className={`font-semibold text-fuchsia-600`}>&larr;</span> */}
          <Logo />
          <Nav className={`flex space-x-4`}>
            <button className={`px-4 py-2 cursor-pointer hover:bg-fuchsia-200 rounded font-semibold text-fuchsia-600`}>CREATE QUIZ</button>
            <button className={`bg-fuchsia-600 rounded text-fuchsia-50 px-4 py-2 cursor-pointer hover:bg-fuchsia-700 font-semibold`}>PLAY</button>
            {/* <HiOutlineMenuAlt4 className={`text-xl w-8 h-8 text-fuchsia-600`} />*/}
            {/* <HiOutlineX  className={`text-xl w-8 h-8 text-fuchsia-600`} /> */}
          </Nav>
      </header>
      <main className={`px-4 w-full md:mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex-1`}>
        {/* <HomePage /> */}
        <Playground />
      </main>
      <footer className={`p-12 flex items-center justify-between bg-fuchsia-100 shadow-inner`}>

      </footer>
    </div>
  );
};

export default App;

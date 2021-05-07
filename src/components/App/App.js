import React from "react";
import Logo from '../Logo'
import Nav from '../Nav'
import WelcomeBoard from '../WelcomeBoard'
import ListCategory from '../ListCategory'
import CategoryItem from '../CategoryItem'
import AddCategory from '../AddCategory'


const App = () => {
  return (
    <div className={`bg-blueGray-100 min-h-screen border-t-2 border-fuchsia-600 space-y-4`}>
      <header className={`sticky top-0 border-b border-fuchsia-200 p-4 flex items-center justify-between bg-white shadow`}>
          <Logo />
          <Nav className={`flex space-x-4`}>
            <button className={`px-4 py-2 cursor-pointer hover:bg-fuchsia-200 rounded font-semibold text-fuchsia-600`}>Play</button>
            <button className={`bg-fuchsia-600 rounded text-fuchsia-50 px-4 py-2 cursor-pointer hover:bg-fuchsia-700 font-semibold`}>CREATE QUIZ</button>
          </Nav>
      </header>
      <main className={`px-4 md:mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl`}>
        <WelcomeBoard />
        <ListCategory>
          <CategoryItem />
          <AddCategory />
        </ListCategory>
      </main>
    </div>
  );
};

export default App;

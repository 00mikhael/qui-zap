import React from "react";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";

import Logo from '../Logo'
import Nav from '../Nav'
// import QuizAdd from '../QuizAdd'
import HomePage from '../HomePage'
import PlayPage from '../PlayPage'
import CreatePage from '../CreatePage'

const App =  () => {

  return (
    <BrowserRouter>
      <div className={`bg-blueGray-50 min-h-screen border-t-2 border-fuchsia-600 flex flex-col bg-fuchsia-200`}>
        <header className={`sticky top-0 py-4 px-6 flex items-center justify-between z-30 bg-fuchsia-200 shadow border-b border-fuchsia-300`}>
            <Logo className={`border-2 rounded-bl-2xl rounded-t-2xl border-fuchsia-600 px-2 py-1 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white text-xl font-sans font-bold cursor-pointer`}>Q</Logo>
            <Nav className={`flex space-x-4`}>
              <Route exact path="/">
                <Link className={`bg-fuchsia-600 rounded text-fuchsia-50 px-4 py-2 cursor-pointer hover:bg-fuchsia-700 focus:bg-fuchsia-700 font-semibold`} to="/create">CREATE
                </Link>
              </Route>
            </Nav>
        </header>

        <main className={`w-full flex-1 flex flex-col`}>
          { <Switch>

            <Route exact path="/">
              <div className={`flex flex-col overflow-hidden min-h-full flex-1`} >
                <HomePage />

              </div>
            </Route>

            <Route exact path="/play/:id">
              <PlayPage />
            </Route>

            <Route exact path="/create">
              <CreatePage />
            </Route>

          </Switch> }
        </main>

        <footer className={`px-6 py-4 space-y-4 flex flex-col justify-center bg-white shadow-inner rounded-tr-3xl`}>
          <div className={`bg-pink-200`}></div>
          <small className={`text-fuchsia-500 self-center`}>With <span className={`text-red-600`}>&hearts;</span> from <a className={`border-b-2 border-fuchsia-600 text-fuchsia-600 `}  target="_blank" rel="noreferrer" href="https://github.com/mikhaelnwankwo/qui-zap">Quizap HQ</a></small>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;

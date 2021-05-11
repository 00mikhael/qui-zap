import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import {HiOutlineMenuAlt4, HiOutlineX} from 'react-icons/hi'

import Logo from '../Logo'
import Nav from '../Nav'
import HomePage from '../HomePage'
import PlayPage from '../PlayPage'
import AddPage from '../AddPage'

import {shuffleList, randomItem} from '../../utils/util'


const App = ({quizList}) => {

  // eslint-disable-next-line
  const [allQuiz, setAllQuiz] = useState(shuffleList(quizList));

  const [currentQuiz, setCurrentQuiz] = useState(randomItem(quizList));

  const handleClick = (item) => {
    setCurrentQuiz(item)
  }

  return (

    <Router>

      <div className={`bg-blueGray-50 min-h-screen border-t-2 border-fuchsia-600 space-y-4 flex flex-col`}>

        <header className={`sticky top-0 border-b border-fuchsia-200 p-4 flex items-center justify-between bg-white shadow z-30`}>

            <Logo className={`border-2 rounded-bl-2xl rounded-t-2xl border-fuchsia-600 px-2 py-1 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white text-xl font-sans font-bold cursor-pointer`}>Q</Logo>
            <Nav className={`flex space-x-4`}>
              <Link className={`px-4 py-2 cursor-pointer hover:bg-fuchsia-200 rounded font-semibold text-fuchsia-600`} to="/add">ADD QUIZ
              </Link>
              <Link className={`bg-fuchsia-600 rounded text-fuchsia-50 px-4 py-2 cursor-pointer hover:bg-fuchsia-700 font-semibold`} to="/play">PLAY
              </Link>

              {/* <HiOutlineMenuAlt4 className={`text-xl w-8 h-8 text-fuchsia-600`} />*/}
              {/* <HiOutlineX  className={`text-xl w-8 h-8 text-fuchsia-600`} /> */}

            </Nav>

        </header>



        <main className={`px-4 w-full md:mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex-1`}>

          <Switch>
            <Route exact path="/">
              <HomePage onAction={handleClick} quizList={allQuiz} />
            </Route>
            <Route exact path="/play">
              <PlayPage quiz={currentQuiz} />
            </Route>
            <Route exact path="/add">
              <AddPage />
            </Route>
          </Switch>

        </main>



        <footer className={`p-4 space-y-4 flex flex-col justify-center bg-fuchsia-100 shadow-inner `}>
          <div className={`bg-pink-200`}></div>
          <small className={`text-fuchsia-500 self-center`}>With <span className={`text-red-600`}>&hearts;</span> from <a className={`border-b-2 border-fuchsia-600 text-fuchsia-600 `}  target="_blank" rel="noreferrer" href="https://github.com/mikhaelnwankwo/qui-zap">Quizap HQ</a></small>
        </footer>

      </div>

    </Router>

  );
};

export default App;

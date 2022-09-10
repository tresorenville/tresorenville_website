import logo_day_lantern from './logo/day/lantern.svg'
import logo_day_title_first_part from './logo/day/text_first_part.svg'
import logo_day_title_second_part from './logo/day/text_second_part.svg'
import logo_night_lantern from './logo/night/lantern.svg'
import githubMark from './GitHub-Mark.png'
import { NavLink } from "react-router-dom";
import {SetStateAction, useState} from "react";

function Header() {
  // hook for dark mode:
  const [mode, setMode] = useState('light')

  const onSelectMode = (mode: SetStateAction<string>) => {
    setMode(mode)
    if (mode === 'dark') {
      document.body.classList.add('dark-mode')
      console.log('in dark mode')
    }
    else {
      document.body.classList.remove('dark-mode')
      console.log('in light mode')
    }
  }

  return (
    <header className="p-2 pb-4 border-b border-gray-200 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-6">
          <div className="icons">
            {
              mode === 'dark' ?
                <img className="inline-block h-20 md:h-28 ml-2 hover:animate-wiggle" src={logo_night_lantern} alt="Tresor en ville Lantern"
                onClick={() => onSelectMode('light')} />
              :
                <img className="inline-block h-20 md:h-28 ml-2 hover:animate-wiggle" src={logo_night_lantern} alt="Tresor en ville Lantern"
                  onClick={() => onSelectMode('dark')} />
            }
          </div>
          <div className="flex flex-col sm:flex-row items-start">
            <img className="inline-block h-9 md:h-12 ml-2 md:ml-4 sm:mt-2" src={logo_day_title_first_part} alt="Tresor en ville Title part 1" />
            <img className="inline-block h-9 md:h-12 ml-4 sm:ml-3 sm:mt-2" src={logo_day_title_second_part} alt="Tresor en ville Title part 2" />
          </div>
        </div>
        <nav className="">
          <ul className="flex justify-around space-x-6">
            <li>
              <NavLink to="/"
                className={({ isActive }) => {
                  if (isActive) return "p-2 underline underline-offset-2 text-gray-500"
                  else return "p-2 hover:underline underline-offset-2 hover:text-gray-500"
              }}>Accueil</NavLink>
            </li>
            <li>
              <div className="border-l border-gray-200 block pl-6">
                <NavLink to="/about"
                  className={({ isActive }) => {
                    if (isActive) return "p-2 underline underline-offset-2 text-gray-500"
                    else return "p-2 hover:underline underline-offset-2 hover:text-gray-500"
                }}>À propos</NavLink>
              </div>
            </li>
            <li>
              <div className="border-l border-gray-200 block pl-6">
                <a href="https://github.com/tresorenville/tresorenville_website" rel="external nofollow" title="Code source sur GitHub">
                  <img src={githubMark} alt="Github Mark" className="h-6 w-6" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
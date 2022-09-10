import logo_day_lantern from './logo/day/lantern.svg'
import logo_day_title_first_part from './logo/day/text_first_part.svg'
import logo_day_title_second_part from './logo/day/text_second_part.svg'
import githubMark from './GitHub-Mark.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="p-2 border-b border-gray-200 shadow-sm">
      <div className="flex  flex-col items-center">
        <div className="flex  flex-row items-center">
          <img className="inline-block h-28 ml-2" src={logo_day_lantern} alt="Tresor en ville Lantern" />
          <div className="flex  flex-col md:flex-row items-start">
            <img className="inline-block h-14 ml-4 md:ml-8 md:mt-6" src={logo_day_title_first_part} alt="Tresor en ville Title part 1" />
            <img className="inline-block h-14 ml-6 md:ml-4 md:mt-6" src={logo_day_title_second_part} alt="Tresor en ville Title part 2" />
          </div>
        </div>
        <nav className="md:ml-auto">
          <ul className="flex justify-around mt-2 md:mt-0 md:space-x-6">
            <li>
              <NavLink to="/"
                className={({ isActive }) => {
                  if (isActive) return "p-2 rounded-md text-white bg-gray-500"
                  else return "p-2 rounded-md hover:text-white hover:bg-gray-500"
              }}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about"
                className={({ isActive }) => {
                  if (isActive) return "p-2 rounded-md text-white bg-gray-500"
                  else return "p-2 rounded-md hover:text-white hover:bg-gray-500"
              }}>À propos</NavLink>
            </li>
          </ul>
        </nav>
        <div className="border-l border-gray-200 hidden md:block md:ml-4 md:pl-4">
          <a href="https://github.com/tresorenville/tresorenville_website" rel="external nofollow" title="Code source sur GitHub">
            <img src={githubMark} alt="Github Mark" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
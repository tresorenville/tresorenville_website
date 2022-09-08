import githubMark from './GitHub-Mark.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="p-2 border-b border-gray-200 shadow-sm">
      <div className="flex  flex-col md:flex-row md:items-center">
        <p className="text-center text-2xl font-bold ml-4 py-2">Trésor en ville</p>
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
              <NavLink to="/"
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
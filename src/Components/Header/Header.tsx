import githubMark from './GitHub-Mark.png'

function Header() {
  return (
    <header className="p-2 border-b border-gray-200 shadow-sm">
      <div className="flex  flex-col md:flex-row md:items-center">
        <p className="text-center text-2xl font-bold ml-4 py-2">Trésor en ville</p>
        <nav className="md:ml-auto">
          <ul className="flex justify-around mt-2 md:mt-0 md:space-x-6">
            <li>
              <a href="/" className="p-2 rounded-md hover:text-white bg-gradient-to-r hover:from-gray-100 hover:to-gray-400">Accueil</a>
            </li>
            <li>
              <a href="/" className="p-2 rounded-md hover:text-white bg-gradient-to-r hover:from-gray-100 hover:to-gray-400">À propos</a>
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
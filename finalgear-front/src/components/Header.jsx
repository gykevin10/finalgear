import BurgerMenu from "./BurgerMenu"
import Connexion from "./Connexion"
import Social from "./Social"

const Header = () => {
  return (
    <header className="flex justify-between bg-gradient-to-r from-slate-500 to-white">
      <BurgerMenu />
      <div className="flex items-center justify-center py-4 md:px-10 px-7">
        <img
          className="h-14 w-14 mr-3"
          src="https://pbs.twimg.com/profile_images/1417635808853565440/d6fFCTfg_400x400.jpg"
          alt="finalgear"
        />

        <div className="flex flex-col font-blod text-2xl cursor-pointer flex justify-center font-[poppins] text-black underline">
          <h1>FINAL GEAR</h1>
          <Social />
        </div>
      </div>
      <Connexion />
    </header>
  )
}
export default Header

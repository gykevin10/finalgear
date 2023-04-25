import Navbar from "@/components/Navbar"
import Connexion from "./Connexion"

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-800">
      <Navbar />
      <Connexion />
    </header>
  )
}
export default Header

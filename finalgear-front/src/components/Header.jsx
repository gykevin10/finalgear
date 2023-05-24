import Navbar from "@/components/Navbar"
import Status from "./Status"

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-800">
      <Navbar />
      <Status />
    </header>
  )
}
export default Header

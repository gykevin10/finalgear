import React, { useState } from "react"
import Link from "next/link"
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router"

const navMenu = [
  {
    parent: "Genèse",
    children: [
      { children: "FINAL FANTASY I", href: "/genese/finalfantasyi" },
      { children: "FINAL FANTASY II", href: "/genese/finalfantasyii" },
      { children: "FINAL FANTASY VII", href: "/genese/finalfantasyvii" },
      { children: "FINAL FANTASY IX", href: "/genese/finalfantasyix" },
    ],
    isExpanded: false, // Ajouter cette propriété pour chaque élément parent avec des enfants
  },
  { parent: "Théories", href: "/theory" },
  { parent: "Let's Play", href: "/letsplay" },
  { parent: "Iceberg", href: "/iceberg" },
  { parent: "Les dossiers de Corcicasse", href: "/corsimania" },
  { parent: "Triple Triad FFXIV", href: "/cardsCollection" },
  { parent: "notion", href: "/notion" },
]

const Navbar = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/")
  }
  const [isOpen, setIsOpen] = useState(false)
  const [menu, setMenu] = useState(navMenu) // Ajouter un état pour le menu

  const toggleNavbar = () => setIsOpen(!isOpen)

  const toggleSubMenu = (index) => {
    const updatedMenu = [...menu]
    updatedMenu[index].isExpanded = !updatedMenu[index].isExpanded
    setMenu(updatedMenu) // Mettre à jour l'état du menu avec setMenu
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleNavbar}
              className="bg-gray-800 inline-flex items-center justify-start p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <XCircleIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center py-4 md:px-10 px-7">
                <img
                  className="h-14 w-14 mr-3"
                  src="https://pbs.twimg.com/profile_images/1417635808853565440/d6fFCTfg_400x400.jpg"
                  alt="finalgear"
                />
                <button
                  className="font-blod text-2xl font-[poppins] text-white underline"
                  onClick={handleClick}
                >
                  FINAL GEAR
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menu.map((item, index) => (
                  <div key={index}>
                    {item.children ? (
                      <div
                        className="relative"
                        onMouseEnter={() => toggleSubMenu(index)}
                        onMouseLeave={() => toggleSubMenu(index)}
                      >
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.parent}
                        </a>
                        {item.isExpanded && (
                          <div className="absolute top-full left-0 w-40 bg-gray-800 rounded-md py-2">
                            {item.children.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                              >
                                {subItem.children}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.parent}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navMenu.map((item, index) => {
            if (item.children) {
              return (
                <div key={item.parent}>
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.parent}
                    {!item.isExpanded}
                  </button>
                  <div className={`${item.isExpanded ? "block" : "hidden"}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.children}
                        href={child.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {child.children}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <Link
                  key={item.parent}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.parent}
                </Link>
              )
            }
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

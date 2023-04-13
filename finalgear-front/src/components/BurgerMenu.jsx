import React, { useCallback, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const menu = [
  {
    parent: "Genèse",
    children: [
      { children: "FINAL FANTASY I", href: "/genese/finalfantasyi" },
      { children: "FINAL FANTASY II", href: "/genese/finalfantasyii" },
      { children: "FINAL FANTASY VII", href: "/genese/finalfantasyvii" },
      { children: "FINAL FANTASY IX", href: "/genese/finalfantasyix" },
    ],
  },
  { parent: "Théories", href: "/theory", children: "" },
  { parent: "Let's Play", href: "/letsplay", children: "" },
  { parent: "Iceberg", href: "/iceberg", children: "" },
  { parent: "Les dossiers de Corcicasse", href: "/dossiers", children: "" },
  { parent: "Triple Triad FFXIV", href: "/", children: "" },
]

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [currentParent, setCurrentParent] = useState(menu[0].parent)

  const handleMenu = useCallback(() => {
    setMenuOpen((open) => !open)
  }, [])

  const handleSubMenu = useCallback(
    (parent, href, children) => {
      if (children) {
        if (parent !== currentParent) {
          setCurrentParent(parent)
          setSubMenuOpen(true)
        } else {
          setSubMenuOpen((open) => !open)
        }
      } else {
        setMenuOpen(false)
      }
    },
    [currentParent]
  )

  return (
    <div>
      <button onClick={handleMenu} className="text-3xl cursor-pointer">
        <Bars3Icon className="w-6 h-6 mt-8" />
      </button>
      <ul
        className={classNames(
          "flex flex-col fixed top-[88px] bottom-6 bg-slate-600 left-0 pl-6 transition-all duration-500 z-50 ease-in",
          { "-left-full": !menuOpen }
        )}
      >
        {menu.map((linkMenu) => (
          <li key={linkMenu.parent} className="mr-4 text-xl md:my-0 my-7">
            <button
              onClick={() =>
                handleSubMenu(linkMenu.parent, linkMenu.href, linkMenu.children)
              }
              className="text-2xl cursor-pointer"
            >
              {linkMenu.parent}
            </button>

            {linkMenu.parent === currentParent && (
              <ol
                className={classNames(
                  "flex flex-col",
                  subMenuOpen ? "" : "hidden"
                )}
              >
                {linkMenu.children.map((subLinkMenu) => (
                  <li
                    key={subLinkMenu.href}
                    className="mr-4 text-xl md:my-0 my-7"
                  >
                    <Link className="text-white" {...subLinkMenu} />
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerMenu

import React, { useCallback, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const links = [
  { children: "Genèse", href: "/genese" },
  { children: "Théories", href: "/theory" },
  { children: "Let's Play", href: "/letsplay" },
  { children: "Iceberg", href: "/iceberg" },
  { children: "Les dossiers de Corcicasse", href: "/dossiers" },
  { children: "Triple Triad FFXIV", href: "/" },
]

const sublinks = [
  { children: "FINAL FANTASY I", href: "/genese/finalfantasyi" },
  { children: "FINAL FANTASY II", href: "/genese/finalfantasyii" },
  { children: "FINAL FANTASY VII", href: "/genese/finalfantasyvii" },
  { children: "FINAL FANTASY IX", href: "/genese/finalfantasyix" },
]

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handle = useCallback(() => {
    setMenuOpen((x) => !x)
  }, [])

  const [subMenu, setSubMenu] = useState(false)
  const handleSubMenu = useCallback(() => {
    setSubMenu((x) => !x)
  }, [])

  return (
    <div>
      <button
        onClick={handle}
        className="text-3xl
        cursor-pointer"
      >
        <Bars3Icon className="w-6 h-6 mt-8" />
      </button>

      <button
        onClick={handleSubMenu}
        className="text-3xl
        cursor-pointer"
      ></button>

      <ul
        className={classNames(
          "flex flex-col fixed top-[88px] bottom-6 bg-slate-600 left-0 pl-6 transition-all duration-500 z-50 ease-in",
          { "-left-full": !menuOpen }
        )}
      >
        {links.map((linkProps) => (
          <li
            key={linkProps.href}
            className="mr-4
            text-xl md:my-0 my-7"
          >
            <Link className="text-white" {...linkProps} />
            <ol
              className={classNames(
                "flex flex-col top-[88px] bottom-6 bg-slate-600 left-0 pl-6 transition-all duration-500 z-50 ease-in",
                { "-left-full": !subMenu }
              )}
            >
              {sublinks.map((subLinkProps) => (
                <li
                  key={subLinkProps.href}
                  className="mr-4
          text-xl md:my-0 my-7"
                >
                  <Link className="text-white" {...subLinkProps} />
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerMenu

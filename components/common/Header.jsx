import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const router = useRouter();

  return (
    <div className='bg-[honeydew] fixed w-full z-10'>
      <nav
        className="container m-auto bg-[honeydew] flex flex-wrap items-center justify-between w-full py-3 text-lg"
      >
        <div>
          <div className="logo">
            <Link href="/">
              <img
                src="/images/logo.png"
                className='w-[80px]'
                alt="The Yummy Motion"
              />
            </Link>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full md:flex md:items-center md:w-auto transition-all adjust_header duration-300 ease-in-out ${showMenu ? 'okk' : ''
            }`}
          id="menu"
        >
          <ul
            className="pt-4 text-base md:flex gap-2 md:justify-between md:pt-0"
          >
            <li>
              <Link
                href="/"
                className={`md:p-4 py-2 block font-semibold hover:text-orange-800 hover:underline hover:underline-offset-8 ${router.pathname === "/" ? "text-orange-800 underline underline-offset-8" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/opening-hours"
                className={`md:p-4 py-2 block font-semibold hover:text-orange-800 hover:underline hover:underline-offset-8 ${router.pathname === "/opening-hours" ? "text-orange-800 underline underline-offset-8" : ""}`}
              >
                Opening
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`md:p-4 py-2 block font-semibold hover:text-orange-800 hover:underline hover:underline-offset-8 ${router.pathname === "/about" ? "text-orange-800 underline underline-offset-8" : ""}`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`md:p-4 py-2 block font-semibold hover:text-orange-800 hover:underline hover:underline-offset-8 ${router.pathname === "/contact" ? "text-orange-800 underline underline-offset-8" : ""}`}
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/menu-price"
                className={`md:p-4 py-2 block font-semibold hover:text-orange-800 hover:underline hover:underline-offset-8 ${router.pathname === "/menu-price" ? "text-orange-800 underline underline-offset-8" : ""}`}
              >
                Menu & Prices
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;






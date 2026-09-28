import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // ================= THEME =================
  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // ================= NAV ITEMS =================
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/course">Course</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        <a href="#about">About</a>
      </li>
    </>
  );

  // ================= LOGIN =================
  const openLogin = () => {
    const modal = document.getElementById("my_modal_3");

    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      {/* ================= FIXED NAVBAR ================= */}
      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          w-full
          h-16
          z-[99999]

          bg-white
          dark:bg-slate-900
          dark:text-white

          border-b
          border-gray-200
          dark:border-slate-700

          shadow-sm
        "
      >
        <div
          className="
            w-full
            max-w-screen-2xl
            h-full
            mx-auto
            px-3
            sm:px-4
            md:px-8
            lg:px-20
          "
        >
          <div className="h-full flex items-center justify-between">

            {/* ================= LEFT ================= */}
            <div className="flex items-center gap-1 shrink-0">

              {/* Mobile Menu */}
              <div className="dropdown lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="
                    menu
                    menu-sm
                    dropdown-content
                    z-[100000]
                    mt-3
                    w-52
                    p-2
                    shadow-lg
                    rounded-box
                    bg-white
                    dark:bg-slate-800
                    dark:text-white
                  "
                >
                  {navItems}
                </ul>
              </div>

              {/* Logo */}
              <Link
                to="/"
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  whitespace-nowrap
                "
              >
                bookStore
              </Link>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <ul className="menu menu-horizontal items-center px-1">
                  {navItems}
                </ul>
              </div>

              {/* Search */}
              <div className="hidden md:block">
                <label
                  className="
                    h-10
                    w-40
                    xl:w-48
                    px-3
                    border
                    border-gray-300
                    dark:border-gray-600
                    rounded-md

                    flex
                    items-center
                    gap-2

                    bg-white
                    dark:bg-slate-800
                  "
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="
                      w-full
                      outline-none
                      bg-transparent
                      dark:text-white
                    "
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="
                        M9.965 11.026
                        a5 5 0 1 1
                        1.06-1.06
                        l2.755 2.754
                        a.75.75 0 1 1
                        -1.06 1.06
                        l-2.755-2.754
                        Z
                        M10.5 7
                        a3.5 3.5 0 1 1
                        -7 0
                        a3.5 3.5 0 0 1
                        7 0
                        Z
                      "
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {/* ================= THEME ================= */}
              <button
                type="button"
                onClick={() =>
                  setTheme(
                    theme === "light"
                      ? "dark"
                      : "light"
                  )
                }
                className="
                  h-10
                  w-10
                  flex
                  items-center
                  justify-center
                  rounded-md

                  hover:bg-gray-100
                  dark:hover:bg-slate-800

                  duration-200
                  shrink-0
                "
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  /* Moon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      d="
                        M21.64 13a1 1 0 0 0-1.05-.14
                        8.05 8.05 0 0 1-3.37.73
                        A8.15 8.15 0 0 1 9.08 5.49
                        a8.59 8.59 0 0 1 .25-2
                        A1 1 0 0 0 8 2.36
                        a10.14 10.14 0 1 0 14 11.69
                        A1 1 0 0 0 21.64 13
                        Z
                      "
                    />
                  </svg>
                ) : (
                  /* Sun */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      d="
                        M12 2a1 1 0 0 0-1 1v1
                        a1 1 0 0 0 2 0V3
                        a1 1 0 0 0-1-1Z

                        M12 19
                        a1 1 0 0 0-1 1v1
                        a1 1 0 0 0 2 0v-1
                        a1 1 0 0 0-1-1Z

                        M4.22 3.81
                        a1 1 0 0 0-1.41 1.41
                        l.71.71
                        a1 1 0 0 0 1.41-1.41Z

                        M20.48 18.07
                        l-.71-.71
                        a1 1 0 0 0-1.41 1.41
                        l.71.71
                        a1 1 0 0 0 1.41-1.41Z

                        M2 11
                        a1 1 0 0 0 0 2h1
                        a1 1 0 0 0 0-2Z

                        M21 11
                        a1 1 0 0 0 0 2h1
                        a1 1 0 0 0 0-2Z

                        M12 7
                        a5 5 0 1 0 0 10
                        a5 5 0 0 0 0-10Z
                      "
                    />
                  </svg>
                )}
              </button>

              {/* ================= LOGIN / LOGOUT ================= */}
              <div className="shrink-0">
                {authUser ? (
                  <Logout />
                ) : (
                  <>
                    <button
                      type="button"
                      className="
                        h-10
                        bg-black
                        text-white
                        px-3
                        rounded-md

                        hover:bg-slate-800
                        duration-200

                        whitespace-nowrap
                      "
                      onClick={openLogin}
                    >
                      Login
                    </button>

                    <Login />
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
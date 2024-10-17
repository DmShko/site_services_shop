import { FC, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate  } from "react-router-dom";
import { Suspense } from "react";

import sh from './SharedLayout.module.scss';

const SharedLayout: FC = () => {
    return (
        <>
          <header className={sh.header}>
            <ul className={sh.navList}>
              <li className={sh.navItem}>
                <NavLink to={"/services"}>services</NavLink>
              </li>
              <li className={sh.navItem}>
              <NavLink to={"/store"}>store</NavLink>
              </li>
              <li className={sh.navItem}>
              <NavLink to={"/about"}>about</NavLink>
              </li>
              <li className={sh.navItem}>
              <NavLink to={"/contacts"}>contacts</NavLink>
              </li>
            </ul>
            <ul className={sh.navList}>
              <li className={sh.navItem}>
              <NavLink to={"/information"}>information</NavLink>
              </li>
              <li className={sh.navItem}>
              <NavLink to={"/basket"}>basket</NavLink>
              </li>
            </ul>
          </header>
    
          <main>
            <Suspense fallback={"..loading"}>
              <Outlet />
            </Suspense>
          </main>
    
          <footer>
    
          </footer>
    
        </>
      );
    };
    
export default SharedLayout;
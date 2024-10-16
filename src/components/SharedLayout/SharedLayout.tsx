import { FC, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate  } from "react-router-dom";
import { Suspense } from "react";

import sh from './SharedLayout.scss';

const SharedLayout: FC = () => {
    return (
        <>
          <header>
    
            
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
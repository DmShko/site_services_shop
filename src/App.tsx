import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';

// import component pages
import SharedLayout from './components/SharedLayout/SharedLayout.tsx';
import Home from './pages/Home/Home.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Basket from './pages/Basket/Basket.tsx';
import Services from './pages/Services/Services.tsx';
import Store from './pages/Shop/Shop.tsx';
import About from './pages/About/About.tsx';
import Information from './pages/Information/Information.tsx';
import Contacts from './pages/Contacts/Contacts.tsx';

import './App.css';

const BASKET = '/basket';
const SERVICES = '/services';
const STORE = '/store';
const ABOUT = '/about';
const INFORMATION = '/information';
const CONTACTS = '/contacts';
const NOTFOUND = '/*';

const App = () => {

  // Routes
  const appRoutes = [
  
  {path: BASKET, element: <Basket />,}, 

  {path: SERVICES, element: <Services />,},

  {path: STORE, element: <Store />,},

  {path: ABOUT, element: <About />,},

  {path: INFORMATION, element: <Information />,},

  {path: CONTACTS, element: <Contacts />,},
  
  {path: NOTFOUND, element: <NotFound />,},
  
  ];
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index
            element={<Home/>}
          />

          {appRoutes.map(({ path, element }) => 
          {return <Route key={nanoid()} path= {path} element={element}/>})}
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
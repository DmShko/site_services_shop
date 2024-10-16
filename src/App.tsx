import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';

// import component pages
import SharedLayout from './components/SharedLayout/SharedLayout.tsx';
import Home from './pages/Home/Home.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Basket from './pages/Basket/Basket.tsx'

import './App.css';

const BASKET = '/courses';
const NOTFOUND = '/*';

const App = () => {

  // Routes
  const appRoutes = [
  
  {path: BASKET, element: <Basket />,}, 
  
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
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//import routes
import NavBarIndex from '../components/Navbar/Navbar';
import Inicio from '../components/Navbar/Menu/Inicio';
import Contacto from '../components/Navbar/Menu/Contacto';
import Carrito from '../components/Navbar/Menu/Carrito';

//import routes submenus
import CafeGenericoOaxaqueno from '../components/Navbar/Menu/Categorias/CafeGenerico/cg-oaxaqueno';
import CafeGenericoVeracruzano from '../components/Navbar/Menu/Categorias/CafeGenerico/cg-veracruzano';

import CafeOrganicoOaxaqueno from '../components/Navbar/Menu/Categorias/CafeOrganico/co-oaxaqueno';
import CafeOrganicoVeracruzano from '../components/Navbar/Menu/Categorias/CafeOrganico/co-veracruzano';

import CafePremiumOaxaqueno from '../components/Navbar/Menu/Categorias/CafePremium/cp-oaxaqueno';
import CafePremiumVeracruzano from '../components/Navbar/Menu/Categorias/CafePremium/cp-veracruzano';

const RoutesNavbar = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarIndex/>}>
            <Route path='inicio' element={<Inicio/>}/>
            <Route path='CafeGenericoOaxaqueno' element={<CafeGenericoOaxaqueno/>}/>
            <Route path='CafeGenericoVeracruzano' element={<CafeGenericoVeracruzano/>}/>
            
            <Route path='CafeOrganicoOaxaqueno' element={<CafeOrganicoOaxaqueno/>}/>
            <Route path='CafeOrganicoVeracruzano' element={<CafeOrganicoVeracruzano/>}/>

            <Route path='CafePremiumOaxaqueno' element={<CafePremiumOaxaqueno/>}/>
            <Route path='CafePremiumVeracruzano' element={<CafePremiumVeracruzano/>}/>
            
            <Route path='contacto' element={<Contacto/>}/>

            <Route path='contacto' element={<Carrito/>}/>

            <Route path='*' element={<Navigate replace to="/" />}/>
          </Route>
        </Routes>
</BrowserRouter>
    </>
  )
}

export default RoutesNavbar


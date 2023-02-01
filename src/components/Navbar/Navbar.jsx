import React from 'react';
import {Outlet} from 'react-router-dom';

//import items navbar
import { CartWidget } from '../CartWidget/Cartwidget';
import Menu from './Menu/Menu';


const NavBarIndex = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-expand-lg navbar-dark bg-dark-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/inicio">Aromas de Mexico</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse p-2" id="navbarTogglerDemo02">
            <div className="container">
              <div className="row justify-content-evenly">
                <div className="col-lg-10 col-sm-12">
                  <Menu/>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="d-flex justify-content-start">
                    <CartWidget/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default NavBarIndex
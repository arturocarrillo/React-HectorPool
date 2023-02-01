import {GiCoffeeBeans} from "react-icons/gi"
const Menu = () => {
  return (
    <>
       <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cafés Genericos
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/CafeGenericoOaxaqueno">Cafés Genericos Oxaqueños <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                        <li><a className="dropdown-item" href="/CafeGenericoVeracruzano">Cafés Genericos Veracruzanos <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cafés Organicos
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/CafeOrganicoOaxaqueno">Cafés Organicos Oxaqueños <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                        <li><a className="dropdown-item" href="/CafeOrganicoVeracruzano">Cafés Organicos Veracruzanos <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cafés Premiums
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/CafePremiumOaxaqueno">Cafés Premiums Oxaqueños <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                        <li><a className="dropdown-item" href="/CafePremiumVeracruzano">Cafés Premiums Veracruzanos <span className='iconCoffe'><GiCoffeeBeans /></span></a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contacto">Contacto</a>
                    </li>

                  </ul>
    </>
  )
}

export default Menu
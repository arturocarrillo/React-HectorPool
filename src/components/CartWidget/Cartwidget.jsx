import { FaShoppingCart} from "react-icons/fa";
export const CartWidget = ({cantCarrito}) => {
  return (
      <>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link mx-auto " href="/carrito"><FaShoppingCart /> <span className='shoppingAdd'>+1</span></a>
          </li>
        </ul>
      </>
  )
}


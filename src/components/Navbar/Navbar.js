import './Navbar.css'
import Button from "../Button/Button"
import CartWidget from '../CartWidget/CartWidget';

const Navbar = (props) => {

    return  <nav>
                <img src="./images/logo.png" alt="logo"/>
                
                <Button>Comics</Button>
                <Button>Mangas</Button>
                <Button>Merch</Button>
                <CartWidget/>
            </nav>
}

export default Navbar
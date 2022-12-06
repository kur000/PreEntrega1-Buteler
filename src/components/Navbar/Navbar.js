import './Navbar.css'
import Button from "../Button/Button"
import CartWidget from '../CartWidget/CartWidget';

const Navbar = (props) => {

    return  <nav>
                <img src="./images/logo.png" alt="logo" width="60"/>
                
                <Button>Comics</Button>
                <Button>Mangas</Button>
                <Button>Merch</Button>
                <CartWidget/>
            </nav>
}

export default Navbar
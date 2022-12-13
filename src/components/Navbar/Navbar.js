import './Navbar.css'
import Button from "../Button/Button"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return  <nav>
                <Link to='/'><img src="./images/logo.png" alt="logo" style={{width: 400}}/></Link>
                <Link to='category/comics'><Button>Comics</Button></Link>
                <Link to='category/mangas'><Button>Mangas</Button></Link>
                <Link to='category/merch'><Button>Merch</Button></Link>
                
                
                <CartWidget/>
            </nav>
}

export default Navbar
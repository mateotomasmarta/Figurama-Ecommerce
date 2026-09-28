import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <Link to="/">
            <img src={logo} alt="Figurama - Figuras de acción" className={styles.logo} />
        </Link>


        <ul className={styles.categories}>
            <li><Link to="/category/starwars" className={styles.link}>Star Wars</Link></li>
            <li><Link to="/category/pokemon" className={styles.link}>Pókemon</Link></li>
            <li><Link to="/category/marvel" className={styles.link}>Marvel</Link></li>
            <li><Link to="/category/dragonball" className={styles.link}>Dragon Ball</Link></li>
            <li><Link to="/category/videojuegos" className={styles.link}>VideoJuegos</Link></li>
        </ul>

        <CartWidget />
        </nav>
    );
};

export default Navbar;
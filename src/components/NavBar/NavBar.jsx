import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
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
                <li><Link to="/category/videojuegos" className={styles.link}>Videojuegos</Link></li>
            </ul>

            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default NavBar;
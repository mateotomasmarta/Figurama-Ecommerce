import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <img src={logo} alt="Figurama - Figuras de acción" className={styles.logo} />


        <ul className={styles.categories}>
            <li><a href="#" className={styles.link}>Star Wars</a></li>
            <li><a href="#" className={styles.link}>Pókemon</a></li>
            <li><a href="#" className={styles.link}>Marvel</a></li>
            <li><a href="#" className={styles.link}>Dragon Ball</a></li>
            <li><a href="#" className={styles.link}>Videojuegos</a></li>
        </ul>

        <CartWidget />
        </nav>
    );
};

export default Navbar;
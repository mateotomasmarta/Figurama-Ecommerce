import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const handleLogout = async () => {
        setMenuAbierto(false);
        await logout();
        navigate("/");
    };

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

            <div className={styles.auth}>
                {user ? (
                    <div
                        className={styles.userMenu}
                        onMouseLeave={() => setMenuAbierto(false)}
                    >
                        <FaUserCircle
                            className={styles.userIcon}
                            onClick={() => setMenuAbierto(!menuAbierto)}
                        />

                        {menuAbierto && (
                            <div className={styles.dropdown}>
                                <button className={styles.cerrar} onClick={() => setMenuAbierto(false)}>×</button>
                                <span className={styles.dropdownEmail}>{user.email}</span>
                                <button className={styles.dropdownItem}>Ver perfil</button>
                                <button className={styles.dropdownItem} onClick={handleLogout}>Salir</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className={styles.link}>Ingresar</Link>
                )}

                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
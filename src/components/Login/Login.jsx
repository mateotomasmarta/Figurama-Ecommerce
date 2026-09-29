import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setCargando(true);

        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Email o contraseña incorrectos");
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className={styles.contenedor}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Iniciar sesión</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.boton} disabled={cargando}>
                    {cargando ? "Ingresando..." : "Ingresar"}
                </button>

                <p className={styles.link}>
                    ¿No tenés cuenta? <Link to="/register">Registrate</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Register.module.css";

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setCargando(true);

        try {
            await register(email, password);
            navigate("/");
        } catch (err) {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                setError("Ese email ya está registrado");
            } else if (err.code === "auth/invalid-email") {
                setError("El email no es válido");
            } else {
                setError("No se pudo crear la cuenta");
            }
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className={styles.contenedor}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Crear cuenta</h2>

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
                    placeholder="Contraseña (mínimo 6 caracteres)"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.boton} disabled={cargando}>
                    {cargando ? "Creando cuenta..." : "Registrarme"}
                </button>

                <p className={styles.link}>
                    ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <nav>
        <ul>
          <li>
            {user ? (
              <>
                <NavLink to="/">Inicio</NavLink>
                <button
                  onClick={() => {
                    setUser(false);
                  }}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

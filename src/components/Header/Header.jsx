import { Link } from "react-router-dom";
import { HeaderStyled } from "./StyleHeader";

export default function Header() {
  return (
    <HeaderStyled>
      <img src="src\assets\images\logo 1 (1).png" alt="logomarca" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
      </HeaderStyled>
  );
}
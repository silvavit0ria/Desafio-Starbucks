import { Link } from "react-router-dom";
import { HeaderStyled } from "./StyleHeader";
import logomarca from '../../assets/images/logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logomarca} alt="logomarca" />
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
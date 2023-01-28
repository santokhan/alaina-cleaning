import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="h-12 lg:h-16 object-contain logo" />
    </Link>
  );
}

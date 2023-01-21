import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="h-8 lg:h-10 object-contain logo" />
    </Link>
  );
}

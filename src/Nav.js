import { Link,Route,Routes } from "react-router-dom";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import BookingPage from "./BookingPage";
import App from "./App";

export default function Nav() {
  return (
 <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/menu">Menu</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/book'>Book</Link>
</nav>
  );
}

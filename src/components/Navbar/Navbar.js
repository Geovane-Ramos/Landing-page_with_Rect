import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import imagens from "../../assets/images.jpg";

const Navbar = () => {
  return (
    <nav className={styles.Container_Nave}>
      <img src={imagens} alt="Developer" />
      <Link to="/">Cadastro</Link>
      <Link to="/ContactUs">ContactUs</Link>
      <Link to="/Home">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/SignIn">Sign In</Link>
    </nav>
  );
};

export default Navbar;

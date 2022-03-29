//imports at the top
import { Link } from 'react-router-dom';

//function definition for my component-return a single JSX element
const Navbar = () => {
    return(
        <nav class="navbar">
<div class="navbar_container">
  <a href="#home" id="navbar__logo">KC'S CATERING</a>
  <div class="navbar__toggle" id="mobile-menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
  <ul class="navbar__menu">
    <li class="navbar__item">
      <Link class="navbar__link" to="/" id="home-page">HOME</Link>
    </li>
    <li class="navbar__item">
      <Link class="navbar__link" to="/" id="about-page">ABOUT</Link>
    </li>
    <li class="navbar__item">
      <Link class="navbar__link" to="/" id="menu-page">MENU</Link>
    </li>
    <li class="navbar__item">
      <Link class="navbar__link" to="/" id="social-page">SOCIAL</Link> 
    </li>
    <li class="navbar__item">
      <Link class="navbar__link" to="/" id="gallery-page">GALLERY</Link>
    </li>
    <li class="navbar__item">
      <Link class="navbar__link" to="/Shop" id="gallery-page">SHOP</Link>
    </li>
    <li class="navbar__btn">
      {/* {% if current_user.is_authenticated %} */}
      <a href="{{ url_for ('auth.signout') }}" class="button" id="sign-in-page">SignOut</a>
      {/* {% else %} */}
      <a href="{{ url_for ('auth.signin') }}" class="button" id="sign-in-page">SignIn</a>
      {/* {% endif %} */}
    </li>
    <li class="navbar__btn">
      <a href="{{ url_for ('auth.register') }}" class="button" id="sign-up-page">SignUp</a>
    </li>
  </ul>
</div>
</nav>
    );
}

//export that functional component
export default Navbar;
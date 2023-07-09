import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import brandLogo from "../../assets/shared/desktop/logo.svg";

const NavBar = () => {
  return (
    <nav className="bg-neutral-950 py-8 px-6">
      <div className="flex justify-between items-center">
        <img src={hamburgerMenu} alt="menu" />
        {/* TODO: Convert to react router Link tag */}
        <a href="/">
          <img src={brandLogo} alt="go home" />
        </a>
        <img src="/icon-cart.svg" alt="shopping cart" />
      </div>
    </nav>
  );
};

export default NavBar;

import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import brandLogo from "../../assets/shared/desktop/logo.svg";
import NavLinks from "../NavLinks/NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-neutral-950 py-8 px-6">
      <div className="flex justify-between items-center lg:max-w-[1110px] lg:mx-auto">
        <img
          src={hamburgerMenu}
          alt="menu"
          className="md:mr-[42px] lg:hidden"
        />
        {/* TODO: Convert to react router Link tag */}
        <a href="/" className="md:mr-auto lg:mr-0">
          <img src={brandLogo} alt="go home" />
        </a>
        <NavLinks />
        <img src="/icon-cart.svg" alt="shopping cart" />
      </div>
    </nav>
  );
};

export default NavBar;

const NavLinks = () => {
  const links = ["home", "headphones", "speakers", "earphones"];

  return (
    <div className="hidden lg:flex justify-between w-[430px]">
      {/* TODO: Convert to react router Link */}
      {links.map((link) => (
        <a href="#" className="text-white text-sm hover:text-orange-400">
          {link.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;

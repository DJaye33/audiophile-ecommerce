type SiteButtonTextProps = {
  text: string;
};

const SiteButton = ({ text }: SiteButtonTextProps) => {
  return (
    <button className="bg-amber-600 text-white py-4 px-9 hover:bg-amber-500">
      {text.toUpperCase()}
    </button>
  );
};

export default SiteButton;

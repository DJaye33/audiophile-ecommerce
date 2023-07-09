type SiteButtonTextProps = {
  text: string;
};

const SiteButton = ({ text }: SiteButtonTextProps) => {
  if (text === "see product") {
    return (
      <a
        onClick={() => console.log(text)}
        className="bg-amber-600 text-white py-4 px-9 hover:bg-amber-500 inline-block cursor-pointer"
      >
        {text.toUpperCase()}
      </a>
    );
  } else {
    return (
      <button
        onClick={() => console.log(text)}
        className="bg-amber-600 text-white py-4 px-9 hover:bg-amber-500"
      >
        {text.toUpperCase()}
      </button>
    );
  }
};

export default SiteButton;

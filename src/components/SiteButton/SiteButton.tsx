type SiteButtonTextProps = {
  text: string;
  isDark?: boolean;
};

const SiteButton = ({ text, isDark }: SiteButtonTextProps) => {
  if (text.toLowerCase() === "see product") {
    return (
      <a
        onClick={() => console.log(text)}
        className={`${
          isDark ? "bg-black" : "bg-orange-400"
        } text-white py-4 px-9 hover:bg-orange-300 inline-block cursor-pointer`}
      >
        {text.toUpperCase()}
      </a>
    );
  } else {
    return (
      <button
        onClick={() => console.log(text)}
        className={`${
          isDark ? "bg-black" : "bg-orange-400"
        } text-white py-4 px-9 hover:bg-orange-300 inline-block cursor-pointer`}
      >
        {text.toUpperCase()}
      </button>
    );
  }
};

export default SiteButton;

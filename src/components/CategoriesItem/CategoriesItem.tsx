import chevronIcon from "../../assets/shared/desktop/icon-arrow-right.svg";

type CategoriesItemProps = {
  imageUrl: string;
  categoryType: string;
};

const CategoriesItem = ({ imageUrl, categoryType }: CategoriesItemProps) => {
  return (
    <div className="bg-gray-400 h-[165px] w-[327px]">
      <div>
        <img src={imageUrl} alt={`category ${categoryType}`} />
        <p>{categoryType}</p>
        {/* TODO: Convert to react router link */}
        <a href="">
          SHOP<img src={chevronIcon} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default CategoriesItem;

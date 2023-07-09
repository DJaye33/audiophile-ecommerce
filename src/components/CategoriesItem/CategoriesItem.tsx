import chevronIcon from "../../assets/shared/desktop/icon-arrow-right.svg";

type CategoriesItemProps = {
  imageUrl: string;
  categoryType: string;
};

const CategoriesItem = ({ imageUrl, categoryType }: CategoriesItemProps) => {
  return (
    <div className="bg-gray-100 h-[165px] w-[327px] relative rounded-xl flex flex-col justify-end text-center py-6 mb-[68px]">
      <img
        className="absolute w-21 h-[104px] right-1/3 bottom-24"
        src={imageUrl}
        alt={`category ${categoryType}`}
      />
      <div>
        <p className="font-bold mb-4">{categoryType.toUpperCase()}</p>
        {/* TODO: Convert to react router link */}
        <a href="" className="text-gray-500 inline-flex items-center font-bold">
          SHOP<img className="ml-3" src={chevronIcon} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default CategoriesItem;

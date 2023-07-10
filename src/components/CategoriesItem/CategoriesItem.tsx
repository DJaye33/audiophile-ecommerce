import chevronIcon from "../../assets/shared/desktop/icon-arrow-right.svg";

type CategoriesItemProps = {
  imageUrl: string;
  categoryType: string;
};

const CategoriesItem = ({ imageUrl, categoryType }: CategoriesItemProps) => {
  return (
    <div className="bg-gray-100 h-[165px] relative rounded-xl flex justify-center py-6 mb-[68px]">
      <img
        className="absolute w-21 lg:w-[130px] h-[104px] lg:h-32 bottom-24 lg:bottom-16"
        src={imageUrl}
        alt={`category ${categoryType}`}
      />
      <div className="mt-auto text-center">
        <p className="font-bold">{categoryType.toUpperCase()}</p>
        {/* TODO: Convert to react router link */}
        <a href="" className="text-gray-500 inline-flex items-center font-bold">
          SHOP<img className="ml-3" src={chevronIcon} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default CategoriesItem;

import ItemsContainer from "../ItemsContainer/ItemsContainer";

type CategoriesItemProps = {
  imageUrl: string;
  categoryType: string;
  linkText: string;
};

const CategoriesItem = ({
  imageUrl,
  categoryType,
  linkText,
}: CategoriesItemProps) => {
  return (
    <ItemsContainer>
      <div className="bg-gray-400 h-[165px] w-[327px]">
        <div>
          <img src={imageUrl} alt={`category ${linkText}`} />
          <p>{categoryType}</p>
          {/* TODO: Convert to react router link */}
          <a href=""></a>
        </div>
      </div>
    </ItemsContainer>
  );
};

export default CategoriesItem;

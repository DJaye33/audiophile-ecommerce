import ItemsContainer from "../ItemsContainer/ItemsContainer";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

const AppMain = () => {
  return (
    <main>
      <ItemsContainer>
        <CategoriesItem
          imageUrl="/image-category-thumbnail-headphones.png"
          categoryType="headphones"
        />
        <CategoriesItem
          imageUrl="/image-category-thumbnail-speakers.png"
          categoryType="speakers"
        />
        <CategoriesItem
          imageUrl="/image-category-thumbnail-earphones.png"
          categoryType="earphones"
        />
      </ItemsContainer>
    </main>
  );
};

export default AppMain;

import ItemsContainer from "../ItemsContainer/ItemsContainer";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import SpeakerFeature1 from "../SpeakerFeature1/SpeakerFeature1";

const AppMain = () => {
  return (
    <main className="py-20 px-6">
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
      <SpeakerFeature1 />
    </main>
  );
};

export default AppMain;

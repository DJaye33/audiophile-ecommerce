import ProductInfoGroup from "../ProductInfoGroup/ProductInfoGroup";

const Hero = () => {
  return (
    <header className="bg-neutral-950 bg-[url('/image-header.jpg')] md:bg-[url('/image-header-tab.jpg')] lg:bg-[url('/image-hero.jpg')] bg-cover bg-bottom py-28 md:py-32 px-6 lg:px-[165px]">
      <ProductInfoGroup
        isNewProduct
        title="XX99 Mark II Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
    </header>
  );
};

export default Hero;

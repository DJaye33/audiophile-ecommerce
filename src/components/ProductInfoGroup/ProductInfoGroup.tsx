import SiteButton from "../SiteButton/SiteButton";

const ProductInfoGroup = () => {
  return (
    <div className="lg:max-w-[1110px] lg:mx-auto">
      <div className="text-center lg:text-left">
        <p className="text-gray-500 uppercase tracking-[10px] mb-4">
          New Product
        </p>
        <h2 className="text-white text-4xl font-bold uppercase md:text-6xl mb-6 md:mx-auto md:w-[396px] lg:mx-0">
          XX99 MARK II Headphones
        </h2>
        <p className="text-gray-300 mb-7 md:mx-auto md:w-[349px] lg:mx-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <SiteButton text="see product" />
      </div>
    </div>
  );
};

export default ProductInfoGroup;

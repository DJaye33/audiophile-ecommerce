import SiteButton from "../SiteButton/SiteButton";

type ProductInfoGroupProps = {
  isNewProduct?: boolean;
  title: string;
  description: string;
};

const ProductInfoGroup = ({
  isNewProduct,
  title,
  description,
}: ProductInfoGroupProps) => {
  return (
    <div className="lg:max-w-[1110px] lg:mx-auto">
      <div className="text-center lg:text-left">
        <p className="text-gray-500 uppercase tracking-[10px] mb-4">
          {isNewProduct && "New Product"}
        </p>
        <h2 className="text-white text-4xl font-bold uppercase md:text-6xl mb-6 md:mx-auto md:w-[396px] lg:mx-0">
          {title}
        </h2>
        <p className="text-gray-300 mb-7 md:mx-auto md:w-[349px] lg:mx-0">
          {description}
        </p>
        <SiteButton text="see product" />
      </div>
    </div>
  );
};

export default ProductInfoGroup;

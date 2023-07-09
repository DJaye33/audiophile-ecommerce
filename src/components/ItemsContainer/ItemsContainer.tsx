type ItemsContainerProps = {
  children: React.ReactNode;
};

const ItemsContainer = ({ children }: ItemsContainerProps) => {
  return <div>{children}</div>;
};

export default ItemsContainer;

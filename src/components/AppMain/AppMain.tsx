type AppMainProps = {
  children: React.ReactNode;
};

const AppMain = ({ children }: AppMainProps) => {
  return <main>{children}</main>;
};

export default AppMain;

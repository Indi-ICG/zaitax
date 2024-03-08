

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center relative min-h-[95vh]">
      {children}
    </div>
  );
};

export default Layout;

import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex  flex-col duration-700 ease-in-out">
      <Header />
      <main className="flex-grow">{children}</main>
      <div className="w-full pt-0"></div>
    </div>
  );
};

export default DefaultLayout;

import Footer from "../../components/layoutsComponents/footer/Footer";
import Header from "../../components/layoutsComponents/header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

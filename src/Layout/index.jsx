import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

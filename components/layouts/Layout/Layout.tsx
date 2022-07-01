import Head from "next/head";
import Container from "../../atoms/Container/Container";
import Footer from "../../molecules/Footer/Footer";
import Header from "../../molecules/Header/Header";

type PropTypes = { children: React.ReactNode };

const Layout = ({ children }: PropTypes) => (
  <div>
    <Header />
    <div>
      <Container>{children}</Container>
    </div>
    <Footer />
  </div>
);

export default Layout;

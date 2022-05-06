import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

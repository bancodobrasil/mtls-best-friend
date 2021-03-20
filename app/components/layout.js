import Navbar from "./navbar";
import Footer from "./footer";

import "./i18n";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

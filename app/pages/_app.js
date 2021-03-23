import { appWithTranslation } from "next-i18next";

import "../styles/tailwind.css";
import "../styles/sweetalert-custom.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);

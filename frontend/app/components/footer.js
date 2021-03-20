import React from "react";

import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-8 mb-4 pt-4 flex justify-center items-center border-t">
      <a href="https://www.bb.com.br" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center">
        {t("footer.broughtToYouBy")} <img src="/logo_labbs.png" alt="Logo BB" className="logo mt-2 w-8" />
      </a>
    </footer>
  );
};

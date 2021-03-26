import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-8 mb-4 pt-4 flex flex-col justify-center items-center border-t">
      <p className="text-sm mb-4">
        {t("contribute-to-mtls-bff-project-at")}{" "}
        <a href="https://github.com/bancodobrasil/mtls-best-friend" className="underline text-gray-600" target="_blank" rel="noreferer">
          bancodobrasil/mtls-best-friend
        </a>
      </p>
      <a
        href="https://www.bb.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-center items-center text-sm"
      >
        {t("brought-to-you-by")} <img src="/logo_labbs.png" alt="Logo BB" className="logo mt-2 w-8" />
      </a>
    </footer>
  );
}

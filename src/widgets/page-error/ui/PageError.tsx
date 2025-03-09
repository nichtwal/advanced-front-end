import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../../../shared/ui/Button";

interface PageErrorProps {
  className?: string;
}
const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.PageError, {}, [className ?? ""])}>
      <p>{t("Unexpcted Error")}</p>
      <Button onClick={reloadPage}>{t('Refresh')}</Button>
    </div>
  );
};
export default PageError;

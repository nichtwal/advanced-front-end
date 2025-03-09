import { classNames } from "../../../shared/lib/classNames/classNames";
import React from "react";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
interface NotFoundPageProps {
className?: string;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const {t} = useTranslation()
  return (
 <div className={classNames(cls.NotFoundPage, {}, [className ?? ""])}>
    {t('Page not found')}
    </div>
  );
};
export default NotFoundPage;
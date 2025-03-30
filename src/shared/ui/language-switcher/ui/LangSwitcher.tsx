import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./style.module.scss";
import { Button } from "../../Button";
import { ButtonTheme } from "../../Button/ui/Button";
interface LangSwitcherProps {
  className?: string;
  isShort: boolean
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, isShort }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className ?? ""])}
            onClick={toggleLanguage}
            theme={ButtonTheme.CLEAR}
        >
            {t(isShort ? "ShortLang" :"Lang")}
        </Button>
    );
};
export default LangSwitcher;
